#!/usr/bin/env node

var chai = require('chai');
var shelldone = require('./../shell-done.js');

describe('Shell-done', function() {

    it('Log contains message', function() {
        var logItems = [];
        var log = function (message) {
            logItems.push(message);
        };
        var steps = [{
            'message': 'Get current date',
            'commands': ['date']
        }];

        shelldone(steps, log);

        chai.expect(logItems.length).to.greaterThan(0);

        var logContainsMessage = false;
        logItems.forEach(function (logItem) {
            if (logItem.includes('Get current date')) {
                logContainsMessage = true;
            }
        });

        chai.expect(logContainsMessage).to.equal(true);
    });

    it('Log contains command', function() {
        var logItems = [];
        var log = function (message) {
            logItems.push(message);
        };
        var steps = [{
            'message': 'Get current time',
            'commands': ['date']
        }];

        shelldone(steps, log);

        chai.expect(logItems.length).to.greaterThan(0);

        var logContainsCommand = false;
        logItems.forEach(function (logItem) {
            if (logItem.includes('date')) {
                logContainsCommand = true;
            }
        });

        chai.expect(logContainsCommand).to.equal(true);
    });
});
