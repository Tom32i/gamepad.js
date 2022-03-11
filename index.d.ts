declare module "gamepad.js" {
  class GamepadListener {
    constructor(options?: GamepadOptions);
    start: () => void;
    stop: () => void;
    update: () => void;
    discover: (gamepad: Gamepad, index: number) => void;
    registerHandler: (index: number, gamepad: Gamepad) => void;
    removeGamepad: (index: number) => void;
    onAxis: (event: Event) => void;
    on: GamepadEvent;
    off: GamepadEvent;
  }

  class GamepadHandler {
    constructor(index: number, gamepad: Gamepad, options?: GamepadOptions);
    update: (gamepad: Gamepad) => void;
    updateStick: (
      gamepad: Gamepad,
      stick: number,
      axis: number,
      value: number
    ) => void;
    updateButton: (
      gamepad: Gamepad,
      button: GamepadButton,
      index: number
    ) => void;
  }

  interface GamepadOptions {
    analog: boolean;
    precision: number;
    deadZone: number;
    button: {
      analog: boolean;
    };
    stick: {
      analog: boolean;
      precision: number;
      deadZone: number;
    };
  }

  type GamepadEvent = (
    event:
      | "gamepad:connected"
      | "gamepad:disconnected"
      | "gamepad:axis"
      | `gamepad:${number}:axis`
      | `gamepad:${number}:axis:${number}`
      | "gamepad:button"
      | `gamepad:${number}:button`
      | `gamepad:${number}:button:${number}`
      | string,
    handler: (e: Event) => void
  ) => void;
}
