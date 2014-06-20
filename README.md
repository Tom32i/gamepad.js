gamepad.js
================

Simple HTML5 Gamepad API handler

Demo here: [http://tom32i.github.io/gamepad.js/](http://tom32i.github.io/gamepad.js/)

## Installation:

    bower install --save tom32i-gamepad.js

## Usage:

```javascript
var listener = new GamepadListener();
```

## Options:

__analog:__ (boolean: default true)
Set to false to get fixed value: ex for a stick 0/1/-1. Used to reduce the number of change event triggered if you dont need analog values.

__precision:__ (int: default 0 (no rounding))
When in analog mode, set the number of number you want after decimal. Used to reduce the muber of event triggered but keep analog values.

__deadZone:__ (float: from 0 to 1)
Percent of noise to ignore around 0.
Ex: deadZone set to 0.3 will cause stick position of from -0.3 to 0.3 to be considered 0.
Stick moves below 30% from default positon won't trigger a change.

Theses options can be set for the whole gamepad:

```javascript
var listener = new GamepadListener({
    analog: false,
    deadZone: 0.3
});
```

Or distinctly for sticks and buttons:

```javascript
var listener = new GamepadListener({
    button: {
        analog: false
    },
    stick: {
        precision: 2,
        deadZone: 0.5
    }
});
```

## Events:

* 'gamepad:connected': When a new gamepad is connected.
* 'gamepad:disconnected': When a gamepad is disconnected.
* 'gamepad:axis': When a gamepad axis changes.
* 'gamepad:{gamepad}:axis': When a specific gamepad axis changes, '{gamepad}' being the numeric index.
* 'gamepad:{gamepad}:axis:{axis}': When a specific axis on a specific gamepad changes, '{axis}' being the numeric index of the axis.
* 'gamepad:button': When a gamepad button changes.
* 'gamepad:{gamepad}:button': When a specific gamepad button changes, '{gamepad}' being the numeric index.
* 'gamepad:{gamepad}:button:{button}': When a specific button on a specific gamepad changes, '{button}' being the numeric index of the button.

__Listen for value change on gampads:__

```javascript

listener.on('gamepad:connected',  function (event) {
    /**
     * event: CustomEvent
     *   detail: {
     *       gamepad: Gamepad,
     *       index: 0
     *   }
     */
});

listener.on('gamepad:disconnected',  function (event) {
    /**
     * event: CustomEvent
     *   detail: {
     *       index: 0
     *   }
     */
});

listener.on('gamepad:axis', function (event) {
    /**
     * event: CustomEvent
     *   detail: {
     *       axis: 1,
     *       gamepad: Gamepad,
     *       value: -0.34
     *   }
     */
});

listener.on('gamepad:0:button',  function (event) {
    /**
     * event: CustomEvent
     *   detail: {
     *       gamepad: Gamepad,
     *       button: GamepadButton,
     *       pressed: true,
     *       index: 7,
     *       value: 0.56
     *   }
     */
});

listener.on('gamepad:0:button:5',  function (event) {
    /**
     * event: CustomEvent
     *   detail: {
     *       gamepad: Gamepad,
     *       button: GamepadButton,
     *       pressed: true,
     *       index: 5,
     *       value: 1
     *   }
     */
});
```
