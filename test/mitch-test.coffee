chai = require 'chai'
sinon = require 'sinon'
chai.use require 'sinon-chai'

expect = chai.expect

describe 'hubot-mitch', ->
	beforeEach ->
		@robot =
			respond: sinon.spy()
			hear: sinon.spy()

		require('../src/mitch')(@robot)

	it 'responds to "mitch me"', ->
		expect(@robot.respond).to.have.been.calledWith sinon.match( (val) -> 
			val.test /mitch me/
		)

	it 'responds to "mitch bomb"', ->
		expect(@robot.respond).to.have.been.calledWith sinon.match( (val) -> 
			val.test /mitch bomb/
		)

	it 'responds to "mitch bomb 3"', ->
		expect(@robot.respond).to.have.been.calledWith sinon.match( (val) -> 
			val.test /mitch bomb 3/
		)

	it 'does NOT responds to "mitch"', ->
		expect(@robot.respond).to.not.have.been.calledWith sinon.match( (val) -> 
			val.test /mitch/
		)
