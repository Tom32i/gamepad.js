import { describe, test, expect, vi, beforeAll, afterAll, beforeEach } from 'vitest';
import { connect, disconnect, nextFrame, reset, Gamepad } from './mock';
import { GamepadListener, GamepadHandler, XboxMapping } from 'gamepad.js';

describe('GamepadListener', () => {
    describe('Multiple gamepads', () => {
        // Mocking native browser feature
        const gamepadA = new Gamepad(4, 10, 'Gamepad A');
        const gamepadB = new Gamepad(4, 10, 'Gamepad B');
        const gamepadC = new Gamepad(4, 10, 'Gamepad C');
        const gamepadD = new Gamepad(4, 10, 'Gamepad D');

        // Spies
        const onConnected = vi.fn();
        const onDisconnected = vi.fn();
        const onAxis = vi.fn();
        const onButton = vi.fn();
        const onButtonFour = vi.fn();

        // Gamepad listener
        const listener = new GamepadListener();

        beforeEach(() => {
            vi.clearAllMocks();
        });

        beforeAll(() => {
            reset();
            listener.on('gamepad:connected', onConnected);
            listener.on('gamepad:disconnected', onDisconnected);
            listener.on('gamepad:axis', onAxis);
            listener.on('gamepad:button', onButton);
            listener.on('gamepad:0:button:4', onButtonFour);
            listener.start();
        });

        afterAll(() => {
            listener.off('gamepad:connected', onConnected);
            listener.off('gamepad:disconnected', onDisconnected);
            listener.off('gamepad:axis', onAxis);
            listener.off('gamepad:button', onButton);
            listener.off('gamepad:0:button:4', onButtonFour);
            listener.stop();
        });

        test('Idle', () => {
            nextFrame();

            expect(onConnected).not.toHaveBeenCalled();
            expect(onDisconnected).not.toHaveBeenCalled();
            expect(onAxis).not.toHaveBeenCalled();
            expect(onButton).not.toHaveBeenCalled();
            expect(onButtonFour).not.toHaveBeenCalled();
        });


        test('Gamepad A connected', () => {
            connect(gamepadA);

            nextFrame();

            expect(onConnected).toHaveBeenCalledWith({
                type: "gamepad:connected",
                detail: {
                    index: 0,
                    gamepad: gamepadA,
                    mapping: null,
                }
            });

            expect(onDisconnected).not.toHaveBeenCalled();
            expect(onAxis).not.toHaveBeenCalled();
            expect(onButton).not.toHaveBeenCalled();
            expect(onButtonFour).not.toHaveBeenCalled();
        });

        test('Button 4 pressed', () => {
            gamepadA.buttons[4].press();

            nextFrame();

            const detail = {
                index: 0,
                button: 4,
                label: "Button 4",
                value: 1,
                pressed: true,
                gamepad: gamepadA,
            };

            expect(onButton).toHaveBeenCalledWith({ type: "gamepad:button", detail });
            expect(onButtonFour).toHaveBeenCalledWith({ type: "gamepad:0:button:4", detail });

            expect(onConnected).not.toHaveBeenCalled();
            expect(onDisconnected).not.toHaveBeenCalled();
            expect(onAxis).not.toHaveBeenCalled();
        });

        test('Button 4 released', () => {
            gamepadA.buttons[4].release();

            nextFrame();

            const detail = {
                index: 0,
                button: 4,
                label: "Button 4",
                value: 0,
                pressed: false,
                gamepad: gamepadA,
            };

            expect(onButton).toHaveBeenCalledWith({ type: "gamepad:button", detail });
            expect(onButtonFour).toHaveBeenCalledWith({ type: "gamepad:0:button:4", detail });

            expect(onConnected).not.toHaveBeenCalled();
            expect(onDisconnected).not.toHaveBeenCalled();
            expect(onAxis).not.toHaveBeenCalled();
        });

        test('Axis 1 move', () => {
            gamepadA.axes[1] = -0.1;

            nextFrame();

            expect(onAxis).toHaveBeenCalledWith({
                type: 'gamepad:axis',
                detail: {
                    index: 0,
                    axis: 1,
                    label: "Axis 1",
                    value: -0.1,
                    gamepad: gamepadA
                }
            });

            expect(onConnected).not.toHaveBeenCalled();
            expect(onDisconnected).not.toHaveBeenCalled();
            expect(onButton).not.toHaveBeenCalled();
            expect(onButtonFour).not.toHaveBeenCalled();
        });

        test('Axis 3 move', () => {
            gamepadA.axes[3] = 0.9;

            nextFrame();

            expect(onAxis).toHaveBeenCalledWith({
                type: 'gamepad:axis',
                detail: {
                    index: 0,
                    axis: 3,
                    label: "Axis 3",
                    value: 0.9,
                    gamepad: gamepadA
                }
            });

            expect(onConnected).not.toHaveBeenCalled();
            expect(onDisconnected).not.toHaveBeenCalled();
            expect(onButton).not.toHaveBeenCalled();
            expect(onButtonFour).not.toHaveBeenCalled();
        });

        test('Gamepad B connected', () => {
            connect(gamepadB);

            nextFrame();

            expect(onConnected).toHaveBeenCalledWith({
                type: "gamepad:connected",
                detail: {
                    index: 1,
                    gamepad: gamepadB,
                    mapping: null,
                }
            });

            expect(onDisconnected).not.toHaveBeenCalled();
            expect(onAxis).not.toHaveBeenCalled();
            expect(onButton).not.toHaveBeenCalled();
            expect(onButtonFour).not.toHaveBeenCalled();
        });

        test('Gamepad A disconnected', () => {
            disconnect(gamepadA);

            nextFrame();

            expect(onDisconnected).toHaveBeenCalledWith({
                type: "gamepad:disconnected",
                detail: {
                    index: 0,
                }
            });

            expect(onConnected).not.toHaveBeenCalled();
            expect(onAxis).not.toHaveBeenCalled();
            expect(onButton).not.toHaveBeenCalled();
            expect(onButtonFour).not.toHaveBeenCalled();
        });
    });

    describe('GamepadListener options', () => {
        // Mocking native browser feature
        const gamepad = new Gamepad(1, 1, 'Xbox 360 Controller');

        // Spies
        const onConnected = vi.fn();
        const onDisconnected = vi.fn();
        const onAxis = vi.fn();
        const onButton = vi.fn();

        // Gamepad listener
        const listener = new GamepadListener({
            precision: 2,
            deadZone: 0.1,
            analog: true,
        }, [XboxMapping]);

        beforeEach(() => {
            vi.clearAllMocks();
        });

        beforeAll(() => {
            reset();
            listener.on('gamepad:connected', onConnected);
            listener.on('gamepad:disconnected', onDisconnected);
            listener.on('gamepad:axis', onAxis);
            listener.on('gamepad:button', onButton);
            listener.start();
        });

        afterAll(() => {
            listener.off('gamepad:connected', onConnected);
            listener.off('gamepad:disconnected', onDisconnected);
            listener.off('gamepad:axis', onAxis);
            listener.off('gamepad:button', onButton);
            listener.stop();
        });

        test('Gamepad connected', () => {
            connect(gamepad);

            nextFrame();

            expect(onConnected).toHaveBeenCalledWith({
                type: "gamepad:connected",
                detail: {
                    index: 0,
                    gamepad: gamepad,
                    mapping: 'Xbox',
                }
            });
        });

        test('Button 0 pressed', () => {
            gamepad.buttons[0].press();

            nextFrame();

            expect(onButton).toHaveBeenCalledWith({
                type: "gamepad:button",
                detail: {
                    index: 0,
                    button: 0,
                    label: "A",
                    value: 1,
                    pressed: true,
                    gamepad: gamepad
                }
            });
        });

        test('Axis 0 under dead zone', () => {
            gamepad.axes[0] = 0.001;

            nextFrame();

            expect(onAxis).not.toHaveBeenCalledWith();
        });

        test('Axis 0 over dead zone', () => {
            gamepad.axes[0] = -0.34567;

            nextFrame();

            expect(onAxis).toHaveBeenCalledWith({
                type: "gamepad:axis",
                detail: {
                    index: 0,
                    axis: 0,
                    label: "Left X",
                    value: -0.35,
                    gamepad: gamepad
                }
            });
        });
    });
});
