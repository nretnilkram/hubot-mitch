// Description:
//   A hubot plugin that returns Mitch Hedberg quotes
//
// Dependencies:
//   None
//
// Configuration:
//   HUBOT_MITCH_HEAR - Optional. If set, bot will respond to any line that begins with "mitch me" or "mitch bomb".
//
// Commands:
//   hubot mitch me - Returns a mitch quote
//   hubot mitch bomb # - Displays # mitch quotes up to 10
//
// Author:
//   nrentnilkram

const mitch = require('./data/mitch.json');

module.exports = (robot) => {
  robot.respond(/mitch me/i, (msg) => {
    msg.send(msg.random(mitch.quotes));
  });

  robot.respond(/mitch bomb( \d+)?/i, (msg) => {
    const count = msg.match[1] ? parseInt(msg.match[1], 10) : 5;
    const maxCount = Math.min(count, 10);
    
    for (let i = 0; i < maxCount; i++) {
      msg.send(msg.random(mitch.quotes));
    }
  });

  if (process.env.HUBOT_MITCH_HEAR === "true") {
    robot.hear(/^mitch me/i, (msg) => {
      msg.send(msg.random(mitch.quotes));
    });

    robot.hear(/^mitch bomb( \d+)?/i, (msg) => {
      const count = msg.match[1] ? parseInt(msg.match[1], 10) : 5;
      const maxCount = Math.min(count, 10);
      
      for (let i = 0; i < maxCount; i++) {
        msg.send(msg.random(mitch.quotes));
      }
    });
  }
};