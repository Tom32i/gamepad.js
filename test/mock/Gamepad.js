module.exports = class Gamepad {
    constructor(axes = 4, buttons = 10, id = 'Mocked Gamepad') {
        this.axes = new Array(axes).fill(0.0);
        this.buttons = new Array(buttons).fill(null).map(() => new GamepadButton());
        this.displayId = id;
        this.id = id;
        this.index = undefined;
        this.mapping = 'standard';
        this.timestamp = Date.now();
    }

    get connected() {
        return this.index !== undefined;
    }
};

class GamepadButton {
    constructor() {
        this.pressed = false;
        this.touched = false;
        this.value = 0;
    }

    press(value = 1) {
        this.pressed = value > 0;
        this.touched = value > 0;
        this.value = value;
    }

    release() {
        this.press(0);
    }
}
