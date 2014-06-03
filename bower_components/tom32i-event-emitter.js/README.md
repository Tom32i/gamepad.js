event-emitter.js
================

Simple JS Event Emitter


## Usage:

```javascript
// Setting up:

Player.prototype = Object.create(EventEmitter.prototype);
Player.prototype.constructor = Player;

/**
 * Player
 */
function Player()
{
    EventEmitter.call(this);

    this.alive = true;
}

Player.prototype.die = function ()
{
    this.alive = false;
    this.emit('die', {player: this, foo: 'bar'});
}

/// Usage :

var player = new Player();

player.on('die', function (event) {
    var foo = event.detail.foo,
          player = event.detail.player;
    // ...
});

player.die();
```
