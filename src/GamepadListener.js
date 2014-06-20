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
    this.handlers = new Array(4);

    window.addEventListener('error', this.stop);

}

GamepadListener.prototype = Object.create(EventEmitter.prototype);

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
        } else if (this.handlers[i]) {
            this.removeGamepad(i);
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

    handler.on('axis', this.onAxis);
    handler.on('button', this.onButton);

    this.emit('gamepad:connected', {gamepad: gamepad, index: gamepad.index});
    this.emit('gamepad:' + gamepad.index + ':connected', {gamepad: gamepad, index: gamepad.index});

    this.handlers[gamepad.index] = handler;
};

/**
 * Add gamepad
 *
 * @param {Gamepad} gamepad
 */
GamepadListener.prototype.removeGamepad = function(index)
{
    var handler = this.handlers[index];

    handler.off('axis', this.onAxis);
    handler.off('button', this.onButton);

    this.emit('gamepad:disconnected', {index: index});
    this.emit('gamepad:' + index + ':disconnected', {index: index});

    this.handlers[index] = null;
};

/**
 * On axe
 *
 * @param {Event} event
 */
GamepadListener.prototype.onAxis = function(event)
{
    this.emit('gamepad:axis', event.detail);
    this.emit('gamepad:' + event.detail.gamepad.index + ':axis', event.detail);
    this.emit('gamepad:' + event.detail.gamepad.index + ':axis:' + event.detail.axis, event.detail);
};

/**
 * On button
 *
 * @param {Event} event
 */
GamepadListener.prototype.onButton = function(event)
{
    this.emit('gamepad:button', event.detail);
    this.emit('gamepad:' + event.detail.gamepad.index + ':button', event.detail);
    this.emit('gamepad:' + event.detail.gamepad.index + ':button:' + event.detail.index, event.detail);
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
