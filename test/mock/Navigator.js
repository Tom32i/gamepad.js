module.exports = class Navigator {
    constructor() {
        this.gamepads = [undefined, undefined, undefined, undefined];

        this.getGamepads = this.getGamepads.bind(this);
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.reset = this.reset.bind(this);
    }

    getGamepads() {
        return this.gamepads;
    }

    connect(gamepad) {
        const { length } = this.gamepads;

        for (let index = 0; index < length; index++) {
            if (this.gamepads[index] === undefined) {
                gamepad.index = index;
                this.gamepads[index] = gamepad;

                return;
            }
        }

        throw new Error('Maximum number of gamepads reached.');
    }

    disconnect(gamepad) {
        if (!gamepad.connected) {
            throw new Error('Gamepad is not connected.');
        }

        this.gamepads[gamepad.index] = undefined;
        gamepad.index = undefined;
    }

    reset() {
        this.gamepads.forEach(gamepad => {
            if (gamepad) {
                this.disconnect(gamepad);
            }
        });
    }
};
