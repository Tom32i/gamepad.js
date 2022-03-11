declare module "gamepad.js" {
  class GamepadListener {
    constructor(options?: GamepadOptions);
    start: () => void;
    stop: () => void;
    update: () => void;
    discover: (gamepad: Gamepad, index: number) => void;
    registerHandler: (index: number, gamepad: Gamepad) => void;
    removeGamepad: (index: number) => void;
    onAxis: (event: GamepadAxisEvent) => void;
    onButton: (event: GamepadButtonEvent) => void;
    public on(
      event: "gamepad:connected",
      handler: (e: GamepadConnectEvent) => void
    ): void;
    public on(
      event: "gamepad:disconnected",
      handler: (e: GamepadDisconnectEvent) => void
    ): void;
    public on(
      event:
        | "gamepad:button"
        | `gamepad:${number}:button`
        | `gamepad:${number}:button:${number}`,
      handler: (e: GamepadButtonEvent) => void
    ): void;
    public on(
      event:
        | "gamepad:axis"
        | `gamepad:${number}:axis`
        | `gamepad:${number}:axis:${number}`,
      handler: (e: GamepadAxisEvent) => void
    ): void;
    public off(
      event: "gamepad:connected",
      handler: (e: GamepadConnectEvent) => void
    ): void;
    public off(
      event: "gamepad:disconnected",
      handler: (e: GamepadDisconnectEvent) => void
    ): void;
    public off(
      event:
        | "gamepad:button"
        | `gamepad:${number}:button`
        | `gamepad:${number}:button:${number}`,
      handler: (e: GamepadButtonEvent) => void
    ): void;
    public off(
      event:
        | "gamepad:axis"
        | `gamepad:${number}:axis`
        | `gamepad:${number}:axis:${number}`,
      handler: (e: GamepadAxisEvent) => void
    ): void;
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

  interface GamepadAxisEvent {
    detail: {
      index: number;
      value: number;
      stick: number;
      axis: number;
      gamepad: Gamepad;
    };
  }

  interface GamepadButtonEvent {
    detail: {
      index: number;
      value: number;
      pressed: boolean;
      button: number;
      gamepad: Gamepad;
    };
  }

  interface GamepadConnectEvent {
    detail: { index: number; gamepad: Gamepad };
  }

  interface GamepadDisconnectEvent {
    detail: { index: number };
  }
}
