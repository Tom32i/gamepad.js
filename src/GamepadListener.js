/**
 * Gamepad Listener
 */
function GamepadListener(options)
{
    EventEmitter.call(this);

    this.options  = typeof(options) === 'object' ? options : {};
    this.frame    = null;
    this.gamepads = [];
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

    this.checkForNewGamepad();

    for (var i = this.gamepads.length - 1; i >= 0; i--) {
        this.gamepads[i].handler.update();
    }
};

/**
 * Check for new gampads
 */
GamepadListener.prototype.checkForNewGamepad = function()
{
    var gamepads = this.getGamepads();

    if (gamepads.length !== this.gamepads.length) {
        for (var i = gamepads.length - 1; i >= 0; i--) {
            if (gamepads[i] && this.gamepads.indexOf(gamepads[i]) < 0) {
                this.addGamepad(gamepads[i]);
            }
        }
    }
};

/**
 * Add gamepad
 *
 * @param {GamepadHandler} gamepad
 */
GamepadListener.prototype.addGamepad = function(gamepad)
{
    var handler = new GamepadHandler(gamepad, this.options);

    this.gamepads.push(gamepad);

    handler.on('axis', this.onAxis);
    handler.on('button', this.onButton);
};

/**
 * On axe
 *
 * @param {Event} event
 */
GamepadListener.prototype.onAxis = function(event)
{
    this.emit('axis', event.detail);
};

/**
 * On button
 *
 * @param {Event} event
 */
GamepadListener.prototype.onButton = function(event)
{
    this.emit('button', event.detail);
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
