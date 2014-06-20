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

__eventType:__ (String: default 'gamepad', available 'gamepad', 'key', 'global')
* global: Send 'gamepad:axis' and 'gamepad:button' each time an axis or a button state change.
* gamepad: Send 'gamepad:(index):axis' and 'gamepad:(index):button' where '(index)' is the index of the gamepad, allowing you to listen to a specific gamepad.
* key: Send 'gamepad:(gamepadIndex):axis:(axisIndex)' and 'gamepad:(gamepadIndex):button:(buttonIndex)' where '(gamepadIndex)' is the index of the gamepad and '(axisIndex)' / 'buttonIndex' is the index of the axis/button, allowing you to listen to a specific button or axis.

Theses options can be set for the whole gamepad:

```javascript
var listener = new GamepadListener({
    analog: false,
    deadZone: 0.3,
    eventType: 'key'
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

Listen for value change on gampads:

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
