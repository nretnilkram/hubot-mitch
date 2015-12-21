# hubot-mitch

A hubot plugin that returns Mitch Hedberg quotes.

See [`src/mitch.coffee`](src/mitch.coffee) for full documentation.

## Installation

In hubot project repo, run:

`npm install https://github.com/nretnilkram/hubot-mitch.git --save`

Then add **hubot-mitch** to your `external-scripts.json`:

```json
["hubot-mitch"]
```

## Configuration
Set environment variable `HUBOT_MITCH_HEAR` to true if you want hubot to listen for commands instead of responding to them

## Sample Interaction

```
user1>> hubot mitch me
hubot>> I like wearing necklaces, because it lets me know when I'm upside down.
```
