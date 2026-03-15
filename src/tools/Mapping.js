export default class Mapping {
    static match(gamepad) {
        return this.Id.test(gamepad.id);
    }

    static getButton(index) {
        return this.Buttons[index] || null;
    }

    static getAxis(index) {
        return this.Axis[index] || null;
    }
}
