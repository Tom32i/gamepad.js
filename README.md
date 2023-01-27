gamepad.js
================

A simple HTML5 Gamepad handler that provides keyboard-like events for Gamepad axes and button.

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

listener.on('gamepad:button', onButtonChange);

listener.start();
```

### Configuration:

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| __analog__ | boolean | `true` | Set to `false` to get fixed value: e.g for a axis [-1, 0, 1]. Used to reduce the number of change event triggered if you dont need analog values. |
| __precision__ | integer | `0` | When in analog mode, set the number of decimals. Used to reduce the muber of event triggered but keep analog values. |
| __deadZone__ | float | `0` | Percent of noise to ignore around 0. Ex: deadZone set to 0.3 will cause axis position of from -0.3 to 0.3 to be considered 0. Axes moves below 30% from default positon won't trigger a change. |

Theses options can be set for the whole gamepad:

```javascript
const listener = new GamepadListener({
  analog: false,
  deadZone: 0.3
});
```

Or distinctly for axes and buttons:

```javascript
const listener = new GamepadListener({
  button: {
    analog: false
  },
  axis: {
    precision: 2,
    deadZone: 0.5
  }
});
```

### Events:

To listen for events use the `listener.addEventListener(eventName, callback);` method (also available under alias `listener.on(...)`).

To stop listening for events use the `listener.removeEventListener(eventName, callback);` method (also available under alias `listener.off(...)`).

#### gamepad:connected

A new gamepad is connected.

```javascript
listener.on('gamepad:connected', event => {
    const {
        index, // Gamepad index: Number [0-3].
        gamepad, // Native Gamepad object.
    } = event.detail;
});
```

#### gamepad:disconnected

A gamepad was disconnected.

```javascript
listener.on('gamepad:disconnected', event => {
    const {
        index, // Gamepad index: Number [0-3].
        // Native Gamepad object is no longer available.
    } = event.detail;
});
```

#### gamepad:axis

A gamepad axis value has changed.

```javascript
listener.on('gamepad:axis', event => {
    const {
        index,// Gamepad index: Number [0-3].
        axis, // Axis index: Number [0-N].
        value, // Current value: Number between -1 and 1. Float in analog mode, integer otherwise.
        gamepad, // Native Gamepad object
    } = event.detail;
});
```

Optional: Can be listened for a specific Gamepad index: `gamepad:{gamepad}:axis`.
Optional: Can be listened for a specific Gamepad index and a specific axis: `gamepad:{gamepad}:axis:{axis}`.

#### gamepad:button

A gamepad button value has changed.

```javascript
listener.on('gamepad:button', event => {
    const {
        index,// Gamepad index: Number [0-3].
        button, // Button index: Number [0-N].
        value, // Current value: Number between 0 and 1. Float in analog mode, integer otherwise.
        pressed, // Native GamepadButton pressed value: Boolean.
        gamepad, // Native Gamepad object
    } = event.detail;
});
```

Optional: Can be listened for a specific Gamepad index: `gamepad:{gamepad}:button`.
Optional: Can be listened for a specific Gamepad index and a specific axis: `gamepad:{gamepad}:button:{button}`.

### Stop listening

When you don't need to listen for events anymore:

```javascript
listener.stop();
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
