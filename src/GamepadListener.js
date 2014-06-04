/**
 * Gamepad Listener
 */
function GamepadListener(options)
{
    EventEmitter.call(this);

    this.options  = typeof(options) === 'object' ? options : {};
    this.frame    = null;
    this.update   = this.update.bind(this);
    this.onAxis   = this.onAxis.bind(this);
    this.onButton = this.onButton.bind(this);
    this.stop     = this.stop.bind(this);

    window.addEventListener('error', this.stop);

    this.start();
}

GamepadListener.prototype = Object.create(EventEmitter.prototype);
GamepadListener.prototype.constructor = GamepadListener;

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
    this.emit('gamepad:axis', event.detail);
};

/**
 * On button
 *
 * @param {Event} event
 */
GamepadListener.prototype.onButton = function(event)
{
    this.emit('gamepad:button', event.detail);
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
