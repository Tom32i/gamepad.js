const AnimationFrame = require('./AnimationFrame');

module.exports = class Window {
    constructor() {
        this.animationFrame = new AnimationFrame();
        this.events = [];

        this.requestAnimationFrame = this.animationFrame.requestAnimationFrame;
        this.cancelAnimationFrame = this.animationFrame.cancelAnimationFrame;
    }

    addEventListener(event, callback) {
        this.events.push([event, callback]);
    }

    reset() {
        this.animationFrame.reset();
        this.events.length = 0;
    }
}
