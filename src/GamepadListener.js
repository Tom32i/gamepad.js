/**
 * Gamepad Listener
 */
function GamepadListener(options)
{
    EventEmitter.call(this);

    this.distinctGamepad = typeof(options.distinctGamepad) != 'undefined' ?

    this.options  = this.resolveOptions(typeof(options) === 'object' ? options : {});
    this.frame    = null;
    this.update   = this.update.bind(this);
    this.onAxis   = this.onAxis.bind(this);
    this.onButton = this.onButton.bind(this);
    this.stop     = this.stop.bind(this);

    window.addEventListener('error', this.stop);

    this.start();
}

GamepadListener.prototype = Object.create(EventEmitter.prototype);

/**
 * Option resolver
 *
 * @type {OptionResolver}
 */
GamepadListener.prototype.optionResolver = new OptionResolver(false);

GamepadListener.prototype.optionResolver.setDefaults({
    analog: true,
    deadZone: 0,
    precision: 0,
    eventType: 'gamepad'
});

GamepadListener.prototype.optionResolver.setTypes({
    analog: 'boolean',
    deadZone: 'number',
    precision: 'number',
    eventType: 'string'
});

/**
 * Resolve options
 *
 * @param {Object} options
 *
 * @return {Object}
 */
GamepadListener.prototype.resolveOptions = function(source)
{
    var customStick = typeof source.stick !== 'undefined',
        customButton = typeof source.button !== 'undefined',
        options = {
            stick: this.optionResolver.resolve(customStick ? source.stick : (customButton ? {} : source)),
            button: this.optionResolver.resolve(customButton ? source.button : (customStick ? {} : source))
        };

    options.stick.deadZone   = Math.max(Math.min(options.stick.deadZone, 1), 0);
    options.button.deadZone  = Math.max(Math.min(options.button.deadZone, 1), 0);
    options.stick.precision  = options.stick.precision ? Math.pow(10, options.stick.precision) : 0;
    options.button.precision = options.button.precision ? Math.pow(10, options.button.precision) : 0;

    return options;
};

/**
 * Start
 */
GamepadListener.prototype.start = function()
{
    if (!this.frame) {
        this.update();
    }
};

/**
 * Stop
 */
GamepadListener.prototype.stop = function()
{
    if (this.frame) {
        window.cancelAnimationFrame(this.frame);
        this.frame = null;
    }
};

/**
 * Update
 */
GamepadListener.prototype.update = function()
{
    this.frame = window.requestAnimationFrame(this.update);

    var gamepads = this.getGamepads();

    for (var i = gamepads.length - 1; i >= 0; i--) {
        if (gamepads[i]) {
            if (typeof(gamepads[i].handler) === 'undefined') {
                this.addGamepad(gamepads[i]);
            }

            gamepads[i].handler.update();
        }
    }
};

/**
 * Add gamepad
 *
 * @param {Gamepad} gamepad
 */
GamepadListener.prototype.addGamepad = function(gamepad)
{
    var handler = new GamepadHandler(gamepad, this.options);

    handler.on('gamepad:axis', this.onAxis);
    handler.on('gamepad:button', this.onButton);

    this.emit('gamepad:connected', {gamepad: gamepad, index: gamepad.index});
};

/**
 * On axe
 *
 * @param {Event} event
 */
GamepadListener.prototype.onAxis = function(event)
{
    var eventName = 'gamepad:axis';

    if (this.options.eventType == 'gamepad') {
        eventName = 'gamepad:' + event.detail.gamepad.index + ':axis';
    } else if (this.options.eventType == 'key') {
        eventName = 'gamepad:' + event.detail.gamepad.index + ':axis:' + event.detail.axis;
    }

    this.emit(eventName, event.detail);
};

/**
 * On button
 *
 * @param {Event} event
 */
GamepadListener.prototype.onButton = function(event)
{
    var eventName = 'gamepad:button';

    if (this.options.eventType == 'gamepad') {
        eventName = 'gamepad:' + event.detail.gamepad.index + ':button';
    } else if (this.options.eventType == 'key') {
        eventName = 'gamepad:' + event.detail.gamepad.index + ':button:' + event.detail.index;
    }

    this.emit(eventName, event.detail);
};

/**
 * Get gampads
 *
 * @return {GamepadList}
 */
GamepadListener.prototype.getGamepads = function()
{
    return typeof(navigator.getGamepads) !== 'undefined' ? navigator.getGamepads() : (typeof(navigator.webkitGetGamepads) !== 'undefined' ? navigator.webkitGetGamepads() : null);
};
