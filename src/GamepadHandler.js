import EventEmitter from 'tom32i-event-emitter.js';
import OptionResolver from 'option-resolver.js';

/**
 * Gamepad Handler
 *
 * @param {Gamepad} gamepad
 * @param {Object} options
 */
export default class GamepadHandler extends EventEmitter {
    constructor(index, gamepad, options = {}) {
        super();

        this.index = index;
        this.options = this.constructor.resolveOptions(options);
        this.sticks = new Array(gamepad.axes.length === 0 ? 0 : gamepad.axes.length / 2).fill(null).map(() => [null, null]);
        this.buttons = new Array(gamepad.buttons.length === 0 ? 0 : gamepad.buttons.length).fill(null);

        this.updateStick = this.updateStick.bind(this);
        this.updateButton = this.updateButton.bind(this);
    }

    /**
     * Resolve options
     *
     * @param {Object} sourceOptions
     *
     * @return {Object}
     */
    static resolveOptions(sourceOptions) {
        const customStick = typeof sourceOptions.stick !== 'undefined';
        const customButton = typeof sourceOptions.button !== 'undefined';

        const options = {
            stick: this.optionResolver.resolve(customStick ? sourceOptions.stick : (customButton ? {} : sourceOptions)),
            button: this.optionResolver.resolve(customButton ? sourceOptions.button : (customStick ? {} : sourceOptions))
        };

        options.stick.deadZone = Math.max(Math.min(options.stick.deadZone, 1), 0);
        options.button.deadZone = Math.max(Math.min(options.button.deadZone, 1), 0);
        options.stick.precision = options.stick.precision ? Math.pow(10, options.stick.precision) : 0;
        options.button.precision = options.button.precision ? Math.pow(10, options.button.precision) : 0;

        return options;
    }

    /**
     * Update
     */
    update(gamepad) {
        let index = 0;
        const sticks = this.sticks.length;

        for (let stick = 0; stick < sticks; stick++) {
            for (let axis = 0; axis < 2; axis++) {
                this.updateStick(gamepad, stick, axis, gamepad.axes[index++]);
            }
        }

        const buttons = this.buttons.length;

        for (index = 0; index < buttons; index++) {
            this.updateButton(gamepad, gamepad.buttons[index], index);
        }
    }

    /**
     * Set stick
     *
     * @param {Number} stick
     * @param {Number} axis
     * @param {Number} value
     */
    updateStick(gamepad, stick, axis, value) {
        const { deadZone, analog, precision } = this.options.stick;

        if (deadZone && value < deadZone && value > -deadZone) {
            value = 0;
        }

        if (!analog) {
            value = value > 0 ? 1 : value < 0 ? -1 : 0;
        } else if (precision) {
            value = Math.round(value * precision) / precision;
        }

        if (this.sticks[stick][axis] !== value) {
            this.sticks[stick][axis] = value;
            this.emit('axis', { gamepad, stick, axis, value, index: this.index });
        }
    }

    /**
     * Set button
     *
     * @param {Gamepad} gamepad
     * @param {GamepadButton} button
     * @param {Number} index
     */
    updateButton(gamepad, button, index) {
        const { deadZone, analog, precision } = this.options.button;
        const { value: currentValue, pressed } = button;
        let value = currentValue;

        if (deadZone && button.value < deadZone && button.value > -deadZone) {
            value = 0;
        }

        if (!analog) {
            value = pressed ? 1 : 0;
        } else if (precision) {
            value = Math.round(value * precision) / precision;
        }


        if (this.buttons[index] !== value) {
            this.buttons[index] = value;
            this.emit('button', { gamepad, button: index, pressed, value, index: this.index });
        }
    }
}

/**
 * Option resolver
 *
 * @type {OptionResolver}
 */
GamepadHandler.optionResolver = new OptionResolver()
    .setDefaults({
        analog: true,
        deadZone: 0,
        precision: 0
    })
    .setTypes({
        analog: 'boolean',
        deadZone: 'number',
        precision: 'number'
    });
