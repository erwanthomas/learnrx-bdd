/* global describe, it */

'use strict';

var Pconsole = require('../utils/pconsole');
var expect = require('chai').expect;

describe('Pseudo-console', function () {

  it("should respond to a 'create' class method", function () {
    expect(Pconsole).itself.to.respondTo('create');
  });

  it("should respond to a 'log' method", function () {
    expect(Pconsole).to.respondTo('log');
  });

  it("should respond to a 'clear' method", function () {
    expect(Pconsole).to.respondTo('clear');
  });

  describe('.create', function () {

    it('should create a new instance', function () {
      expect(Pconsole.create()).to.be.an.instanceof(Pconsole);
    });

  });

  describe('#log', function () {

    it('should log any item', function () {
      var pc = new Pconsole();
      pc.log('item1');
      pc.log([[]]);
      pc.log(function () {});
    });

  });

  describe('#clear', function () {

    it('should return all logged items', function () {
      var pc = new Pconsole();
      var wanted = ['item1', ['item2'], 3];

      pc.log(wanted[0]);
      pc.log(wanted[1]);
      pc.log(wanted[2]);

      expect(pc.clear()).to.deep.equal(wanted);
    });

    it('should clear all logged items', function () {
      var pc = new Pconsole();
      var wanted = ['item1', ['item2'], 3];

      pc.log(wanted[0]);
      pc.log(wanted[1]);
      pc.log(wanted[2]);
      pc.clear();

      expect(pc.clear().length).to.equal(0);
    });

  });

});
