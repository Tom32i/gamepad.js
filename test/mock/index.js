const Window = require('./Window');
const Navigator = require('./Navigator');
const Gamepad = require('./Gamepad');

if (!global.window) {
    global.window = new Window();
}

if (!global.navigator) {
    global.navigator = new Navigator();
}

function reset() {
    global.window.reset();
    global.navigator.reset();
}

module.exports = {
    Gamepad,
    reset,
    connect: global.navigator.connect,
    disconnect: global.navigator.disconnect,
    nextFrame: global.window.animationFrame.next,
};
