const assert = require('assert');
const sinon = require('sinon');
const { connect, disconnect, nextFrame, Gamepad, reset } = require('./mock');
const { GamepadListener } = require('../gamepad');

describe('GamepadListener', function () {
    describe('Multiple gamepads', function () {
        // Mocking native browser feature
        const gamepadA = new Gamepad(4, 10, 'Gamepad A');
        const gamepadB = new Gamepad(4, 10, 'Gamepad B');
        const gamepadC = new Gamepad(4, 10, 'Gamepad C');
        const gamepadD = new Gamepad(4, 10, 'Gamepad D');

        // Spies
        const onConnected = sinon.spy();
        const onDisconnected = sinon.spy();
        const onAxis = sinon.spy();
        const onButton = sinon.spy();
        const onButtonFour = sinon.spy();

        // Gamepad listener
        const listener = new GamepadListener();

        before(function () {
            sinon.reset();
            reset();

            listener.on('gamepad:connected', onConnected);
            listener.on('gamepad:disconnected', onDisconnected);
            listener.on('gamepad:axis', onAxis);
            listener.on('gamepad:button', onButton);
            listener.on('gamepad:0:button:4', onButtonFour);
            listener.start();
        });

        after(function () {
            listener.off('gamepad:connected', onConnected);
            listener.off('gamepad:disconnected', onDisconnected);
            listener.off('gamepad:axis', onAxis);
            listener.off('gamepad:button', onButton);
            listener.off('gamepad:0:button:4', onButtonFour);
            listener.stop();
        });

        it('Idle', function () {
            nextFrame();

            assert.equal(onConnected.called, false);
            assert.equal(onDisconnected.called, false);
            assert.equal(onButton.called, false);
            assert.equal(onAxis.called, false);
        });


        it('Gamepad A connected', function () {
            connect(gamepadA);

            nextFrame();

            assert.equal(onConnected.calledOnce, true);

            const { detail } = onConnected.lastCall.args[0];

            assert.equal(detail.index, 0);
            assert.equal(detail.gamepad, gamepadA);

            assert.equal(onButton.called, true);

            const onButtonDetail = onButton.firstCall.args[0].detail;

            assert.equal(onButtonDetail.index, 0);
            assert.equal(onButtonDetail.button, 0);
            assert.equal(onButtonDetail.value, 0);
            assert.equal(onButtonDetail.pressed, false);
        });

        it('Button 4 pressed', function () {
            gamepadA.buttons[4].press();

            nextFrame();

            assert.equal(onButton.called, true);
            assert.equal(onButtonFour.called, true);

            const onButtonDetail = onButton.lastCall.args[0].detail;

            assert.equal(onButtonDetail.index, 0);
            assert.equal(onButtonDetail.button, 4);
            assert.equal(onButtonDetail.value, 1);
            assert.equal(onButtonDetail.pressed, true);

            const onButtonFourDetail = onButtonFour.lastCall.args[0].detail;

            assert.equal(onButtonFourDetail.index, 0);
            assert.equal(onButtonFourDetail.button, 4);
            assert.equal(onButtonFourDetail.value, 1);
            assert.equal(onButtonFourDetail.pressed, true);
        });

        it('Button 4 released', function () {
            gamepadA.buttons[4].release();

            nextFrame();

            assert.equal(onButton.called, true);

            const onButtonDetail = onButton.lastCall.args[0].detail;

            assert.equal(onButtonDetail.index, 0);
            assert.equal(onButtonDetail.button, 4);
            assert.equal(onButtonDetail.value, 0);
            assert.equal(onButtonDetail.pressed, false);

            const onButtonFourDetail = onButtonFour.lastCall.args[0].detail;

            assert.equal(onButtonFourDetail.index, 0);
            assert.equal(onButtonFourDetail.button, 4);
            assert.equal(onButtonFourDetail.value, 0);
            assert.equal(onButtonFourDetail.pressed, false);
        });

        it('Axis 1 move', function () {
            gamepadA.axes[1] = -0.1;

            nextFrame();

            assert.equal(onAxis.called, true);

            const onAxisDetail = onAxis.lastCall.args[0].detail;

            assert.equal(onAxisDetail.index, 0);
            assert.equal(onAxisDetail.axis, 1);
            assert.equal(onAxisDetail.value, -0.1);
        });

        it('Axis 3 move', function () {
            gamepadA.axes[3] = 0.3;

            nextFrame();

            assert.equal(onAxis.called, true);

            const onAxisDetail = onAxis.lastCall.args[0].detail;

            assert.equal(onAxisDetail.index, 0);
            assert.equal(onAxisDetail.axis, 3);
            assert.equal(onAxisDetail.value, 0.3);
        });

        it('Gamepad B connected', function () {
            connect(gamepadB);

            nextFrame();

            const { detail } = onConnected.lastCall.args[0];

            assert.equal(detail.index, 1);
            assert.equal(detail.gamepad, gamepadB);
        });

        it('Gamepad A disconnected', function () {
            disconnect(gamepadA);

            nextFrame();

            assert.equal(onDisconnected.calledOnce, true);

            const { detail } = onDisconnected.lastCall.args[0];

            assert.equal(detail.index, 0);
        });
    });

    describe('GamepadListener options', function () {
        // Mocking native browser feature
        const gamepad = new Gamepad(0, 4, 'Gamepad solo');

        // Spies
        const onConnected = sinon.spy();
        const onDisconnected = sinon.spy();
        const onAxis = sinon.spy();
        const onButton = sinon.spy();

        // Gamepad listener
        const listener = new GamepadListener({
            precision: 2,
            deadZone: 0.2,
            analog: true,
        });

        before(function () {
            sinon.reset();
            reset();

            listener.on('gamepad:connected', onConnected);
            listener.on('gamepad:disconnected', onDisconnected);
            listener.on('gamepad:axis', onAxis);
            listener.on('gamepad:button', onButton);
            listener.start();
        });

        after(function () {
            listener.off('gamepad:connected', onConnected);
            listener.off('gamepad:disconnected', onDisconnected);
            listener.off('gamepad:axis', onAxis);
            listener.off('gamepad:button', onButton);
            listener.stop();
        });

        it('Gamepad connected', function () {
            connect(gamepad);

            nextFrame();

            assert.equal(onConnected.calledOnce, true);

            const { detail } = onConnected.lastCall.args[0];

            assert.equal(detail.index, 0);
            assert.equal(detail.gamepad, gamepad);
        });

        it('Button 0 pressed', function () {
            gamepad.buttons[0].press();

            nextFrame();

            assert.equal(onButton.called, true);

            const onButtonDetail = onButton.lastCall.args[0].detail;

            assert.equal(onButtonDetail.index, 0);
            assert.equal(onButtonDetail.button, 0);
            assert.equal(onButtonDetail.value, 1);
            assert.equal(onButtonDetail.pressed, true);
        });
    });
});
