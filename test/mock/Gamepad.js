module.exports = class Gamepad {
    constructor(sticks = 2, buttons = 10, id = 'Mocked Gamepad') {
        this.axes = new Array(sticks * 2).fill(0.0);
        this.buttons = new Array(buttons).fill(null).map(() => new GamepadButton());
        this.sticks = new Array(sticks).fill(null).map((value, index) => new GamepadStick(this, index));
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


class GamepadStick {
    constructor(gamepad, index) {
        this.gamepad = gamepad;
        this.index = index;
    }

    setX(value) {
        this.gamepad.axes[this.index * 2] = value;
    }

    setY(value) {
        this.gamepad.axes[this.index * 2 + 1] = value;
    }
}
