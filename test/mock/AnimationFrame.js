module.exports = class AnimationFrame {
    constructor() {
        this.nextFrame = [];

        this.requestAnimationFrame = this.requestAnimationFrame.bind(this);
        this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this);
        this.next = this.next.bind(this);
        this.reset = this.reset.bind(this);
    }

    requestAnimationFrame(callback) {
        this.nextFrame.push(callback);
    }

    cancelAnimationFrame(callback) {
        const index = this.nextFrame.indexOf(callback);

        if (index >= 0) {
            this.nextFrame = this.nextFrame.splice(index, 1);
        }
    }

    next() {
        const frame = this.nextFrame.slice(0);

        this.reset();

        let callback;

        while (callback = frame.pop()) {
            callback();
        }
    }

    reset() {
        this.nextFrame.length = 0;
    }
}
