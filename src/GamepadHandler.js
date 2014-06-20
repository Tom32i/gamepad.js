/**
 * Gamepad Handler
 *
 * @param {Gamepad} gamepad
 * @param {Object} options
 */
function GamepadHandler(gamepad, options)
{
    EventEmitter.call(this);

    this.gamepad = gamepad;
    this.options = options;
    this.sticks  = new Array(this.gamepad.axes.length);
    this.buttons = new Array(this.gamepad.buttons.length);

    for (var s = this.sticks.length - 1; s >= 0; s--) {
        this.sticks[s] = [0, 0];
    }

    for (var b = this.buttons.length - 1; b >= 0; b--) {
        this.buttons[b] = 0;
    }

    this.gamepad.handler = this;
}

GamepadHandler.prototype = Object.create(EventEmitter.prototype);

/**
 * Update
 */
GamepadHandler.prototype.update = function()
{
    var i = 0,
        s = 0,
        a = 0;

    for (s = 0; s < 2; s++) {
        for (a = 0; a < 2; a++) {
            this.setStick(s, a, this.gamepad.axes[i], this.options.stick);
            i++;
        }
    }

    for (i = this.gamepad.buttons.length - 1; i >= 0; i--) {
        this.setButton(i, this.gamepad.buttons[i], this.options.button);
    }
};

/**
 * Set stick
 *
 * @param {Number} stick
 * @param {Number} axis
 * @param {Number} value
 */
GamepadHandler.prototype.setStick = function(stick, axis, value, options)
{
    if (options.deadZone && value < options.deadZone && value > -options.deadZone) {
        value = 0;
    }

    if (!options.analog) {
        value = value > 0 ? 1 : value < 0 ? -1 : 0;
    } else if (options.precision) {
        value = Math.round(value * options.precision) / options.precision;
    }

    if (this.sticks[stick][axis] !== value) {
        this.sticks[stick][axis] = value;
        this.emit('axis', {
            gamepad: this.gamepad,
            axis: axis,
            value: this.sticks[stick][axis]
        });
    }
};

/**
 * Set button
 *
 * @param {Number} index
 * @param {GamepadButton} button
 */
GamepadHandler.prototype.setButton = function(index, button, options)
{
    var value = button.value;

    if (options.deadZone && button.value < options.deadZone && button.value > -options.deadZone) {
        value = 0;
    }

    if (!options.analog) {
        value = button.pressed ? 1 : 0;
    } else if (options.precision) {
        value = Math.round(value * options.precision) / options.precision;
    }

    if (this.buttons[index] !== value) {
        this.buttons[index] = value;
        this.emit('button', {
            gamepad: this.gamepad,
            button: button,
            index: index,
            pressed: button.pressed,
            value: value
        });
    }
};