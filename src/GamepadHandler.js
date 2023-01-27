import EventEmitter from 'tom32i-event-emitter.js';
import OptionResolver from 'option-resolver.js';

/**
 * Gamepad Handler
 *
 * @param {Gamepad} gamepad
 * @param {Object} config
 */
export default class GamepadHandler extends EventEmitter
{
    static optionResolver = new OptionResolver()
        .setDefaults({
            analog: true,
            deadZone: 0,
            precision: 0,
            initToZero: true,
        })
        .setTypes({
            initToZero: 'boolean',
            analog: 'boolean',
            deadZone: 'number',
            precision: 'number',
        })
        .setValidators({
            deadZone: value => Math.max(Math.min(value, 1), 0),
            precision: value => value > 0 ? Math.pow(10, value) : 0,
        });

    constructor(index, gamepad, config = {}) {
        super();

        this.index = index;
        this.options = this.constructor.resolveOptions(config);
        this.axes = new Array(gamepad.axes.length).fill(
            this.constructor.getDefaultValue(this.options.axis)
        );
        this.buttons = new Array(gamepad.buttons.length).fill(
            this.constructor.getDefaultValue(this.options.button)
        );
        this.updateAxis = this.updateAxis.bind(this);
        this.updateButton = this.updateButton.bind(this);
    }

    /**
     * Resolve options
     *
     * @param {Object} config
     *
     * @return {Object}
     */
    static resolveOptions(config) {
        const { axis, button } = config;

        return  {
            axis: this.optionResolver.resolve(axis ?? button ?? config ?? {}),
            button: this.optionResolver.resolve(button ?? axis ?? config ?? {}),
        };
    }

    static getDefaultValue(config) {
        const { analog, initToZero } = config;

        if (initToZero === false) {
            return null;
        }

        return analog ? 0.0 : 0;
    }

    /**
     * Update
     */
    update(gamepad) {
        this.updateAxes(gamepad);
        this.updateButtons(gamepad);
    }

    updateAxes(gamepad) {
        const { length } = this.axes;

        for (let index = 0; index < length; index++) {
            this.updateAxis(gamepad, gamepad.axes[index], index);
        }
    }

    updateButtons(gamepad) {
        const { length } = this.buttons;

        for (let index = 0; index < length; index++) {
            this.updateButton(gamepad, gamepad.buttons[index], index);
        }
    }

    /**
     * @param {Gamepad} gamepad
     * @param {Float} value
     * @param {Number} index
     */
    updateAxis(gamepad, value, index) {
        const { deadZone, analog, precision } = this.options.axis;

        if (deadZone && value < deadZone && value > -deadZone) {
            value = 0;
        }

        if (!analog) {
            value = value > 0 ? 1 : value < 0 ? -1 : 0;
        } else if (precision) {
            value = Math.round(value * precision) / precision;
        }

        if (this.axes[index] !== value) {
            this.axes[index] = value;
            this.emit('axis', { gamepad, axis: index, value, index: this.index });
        }
    }

    /**
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
