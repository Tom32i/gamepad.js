gamepad.js
================

A simple HTML5 Gamepad handler that provides keyboard-like events for Gamepad sticks and button.

Try it right now in your browser: [http://tom32i.github.io/gamepad.js/](http://tom32i.github.io/gamepad.js/)

## Installation:

    npm install gamepad.js

## Import

HTML:

```html
<script src="gamepad.js"></script>
<script>const { GamepadListener } = gamepad;</script>
```

ES modules:

```javascript
import { GamepadListener } from 'gamepad.js';
```

CommonJs modules:

```javascript
const { GamepadListener } = require('gamepad.js');
```

## Usage:

```javascript
const listener = new GamepadListener(/* options*/);
listener.start();
```

### Configuration:

__analog:__ (boolean: default true)
Set to false to get fixed value: ex for a stick 0/1/-1. Used to reduce the number of change event triggered if you dont need analog values.

__precision:__ (integer: default 0 (no rounding))
When in analog mode, set the number of number you want after decimal. Used to reduce the muber of event triggered but keep analog values.

__deadZone:__ (float: from 0 to 1)
Percent of noise to ignore around 0.
Ex: deadZone set to 0.3 will cause stick position of from -0.3 to 0.3 to be considered 0.
Stick moves below 30% from default positon won't trigger a change.

Theses options can be set for the whole gamepad:

```javascript
const listener = new GamepadListener({
    analog: false,
    deadZone: 0.3
});
```

Or distinctly for sticks and buttons:

```javascript
const listener = new GamepadListener({
    button: {
        analog: false
    },
    stick: {
        precision: 2,
        deadZone: 0.5
    }
});
```

### Events:

* `gamepad:connected: When a new gamepad is connected.
* `gamepad:disconnected: When a gamepad is disconnected.
* `gamepad:axis: When a gamepad axis changes.
* `gamepad:{gamepad}:axis: When a specific gamepad axis changes, '{gamepad}' being the numeric index.
* `gamepad:{gamepad}:axis:{axis}: When a specific axis on a specific gamepad changes, '{axis}' being the numeric index of the axis.
* `gamepad:button: When a gamepad button changes.
* `gamepad:{gamepad}:button: When a specific gamepad button changes, '{gamepad}' being the numeric index.
* `gamepad:{gamepad}:button:{button}: When a specific button on a specific gamepad changes, '{button}' being the numeric index of the button.

__Listen for value change on gampads:__

```javascript

listener.on('gamepad:connected',  function (event) {
    /**
     * event:
     *   detail: {
     *       index: 0, // Gamepad index [0-3]
     *       gamepad, // Native Gamepad object
     *   }
     */
});

listener.on('gamepad:disconnected',  function (event) {
    /**
     * event:
     *   detail: {
     *       index: 0,
     *       // Native Gamepad object is no longer available
     *   }
     */
});

listener.on('gamepad:axis', function (event) {
    /**
     * event:
     *   detail: {
     *       index: 0, // Gamepad index [0-3]
     *       stick: 0, // Stick index [0-N]
     *       axis: 1, // Axis index [0-1]
     *       value: -0.34, // Value (float if analog, otherise integer)
     *       gamepad, // Native Gamepad object
     *   }
     */
});

listener.on('gamepad:0:button',  function (event) {
    /**
     * event:
     *   detail: {
     *       index: 2, // Gamepad index [0-3]
     *       button: 4, // Button index [0-N]
     *       value: 0.56, // Value (float if analog, otherise integer)
     *       pressed: true, // Boolean
     *       gamepad, // Native Gamepad object
     *   }
     */
});

listener.on('gamepad:0:button:5',  function (event) {
    /**
     * event:
     *   detail: {
     *       index: 3, // Gamepad index [0-3]
     *       button: 8, // Button index [0-N]
     *       value: 1, // Value (float if analog, otherise integer)
     *       pressed: true, // Boolean
     *       gamepad, // Native Gamepad object
     *   }
     */
});
```
## Contributing

Clone the repository:

    git clone git@github.com:Tom32i/gamepad.js.git

Install dev dependencies:

    npm install

### Launch the dev server

    make start

Go to http://localhost:8080

### Code quality

Linting:

    make lint

Run tests:

    make test
