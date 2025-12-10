import { expect, use } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import mitchModule from '../src/mitch.js';

use(sinonChai);

describe('hubot-mitch', () => {
  beforeEach(function() {
    this.robot = {
      respond: sinon.spy(),
      hear: sinon.spy()
    };

    mitchModule(this.robot);
  });

  it('responds to "mitch me"', function() {
    expect(this.robot.respond).to.have.been.calledWith(sinon.match((val) => {
      return val.test('mitch me');
    }));
  });

  it('responds to "mitch bomb"', function() {
    expect(this.robot.respond).to.have.been.calledWith(sinon.match((val) => {
      return val.test('mitch bomb');
    }));
  });

  it('responds to "mitch bomb 3"', function() {
    expect(this.robot.respond).to.have.been.calledWith(sinon.match((val) => {
      return val.test('mitch bomb 3');
    }));
  });

  it('does NOT respond to "mitch"', function() {
    expect(this.robot.respond).to.not.have.been.calledWith(sinon.match((val) => {
      return val.test('mitch');
    }));
  });

  it('does NOT respond to "mitchme"', function() {
    expect(this.robot.respond).to.not.have.been.calledWith(sinon.match((val) => {
      return val.test('mitchme');
    }));
  });

  it('does NOT respond to "mitchbomb"', function() {
    expect(this.robot.respond).to.not.have.been.calledWith(sinon.match((val) => {
      return val.test('mitchbomb');
    }));
  });
});