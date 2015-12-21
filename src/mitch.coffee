# Description:
#   Play Updated Cards Against Humanity in Hubot
#
# Dependencies:
#   None
#
# Configuration:
#   HUBOT_MITCH_HEAR - Optional. If set, bot will respond to any line that begins with "mitch me" or "mitch bomb".
#
# Commands:
#   hubot mitch me - Returns a mitch quote
#   hubot mitch bomb # - Displays # mitch quotes up to 10
#
# Author:
#   nrentnilkram

quotes = require './data/quotes.json'

module.exports = (robot) ->
  robot.respond /mitch me/i, (msg) ->
    msg.send msg.random quotes

  robot.respond /mitch bomb( \d+)?/i, (msg) ->
    count = if msg.match[1]? then parseInt(msg.match[1], 10) else 5
    msg.send msg.random quotes for i in [1..count]

  if process.env.HUBOT_MITCH_HEAR?
    robot.hear /mitch me/i, (msg) ->
      msg.send msg.random quotes

    robot.hear /mitch bomb( \d+)?/i, (msg) ->
      count = if msg.match[1]? then parseInt(msg.match[1], 10) else 5
      msg.send msg.random quotes for i in [1..count]