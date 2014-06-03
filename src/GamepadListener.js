GamepadListener.prototype = Object.create(EventEmitter.prototype);
GamepadListener.prototype.constructor = GamepadListener;

/**
 * Gamepad Listener
 */
function GamepadListener(element)
{
    EventEmitter.call(this);

    this.output   = element;
    this.frame    = null;
    this.gamepads = [];
    this.update   = this.update.bind(this);
    this.onAxis   = this.onAxis.bind(this);
    this.onButton = this.onButton.bind(this);

    window.addEventListener('error', this.stop.bind(this));

    this.start();
}

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

    var gamepads = this.getGamepads();

    for (var i = this.gamepads.length - 1; i >= 0; i--) {
        this.gamepads[i].handler.update();
    }

    this.output.className = 'gamepad-output ' + (this.gamepads.length ? 'ok' : 'not-found');
};

/**
 * Get gampads
 *
 * @return {GamepadList}
 */
GamepadListener.prototype.getGamepads = function()
{
    return typeof(navigator.getGamepads) != 'undefined' ? navigator.getGamepads() : typeof(navigator.webkitGetGamepads) != 'undefined' ? navigator.webkitGetGamepads() : null;
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
    var handler = new GamepadHandler(gamepad);

    this.gamepads.push(gamepad);

    handler.addListener('axis', this.onAxis);
    handler.addListener('button', this.onButton);
};

/**
 * On axe
 *
 * @param {Event} event
 */
GamepadListener.prototype.onAxis = function(event)
{
    this.emit('axis', event.detail);
    console.log(this.getGamepads());
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
