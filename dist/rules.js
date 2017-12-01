"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GAME_RULES = undefined;

var _helpers = require("./helpers");

var GAME_RULES = exports.GAME_RULES = [(0, _helpers.rule)(/11111/, [(0, _helpers.action)("WIN"), (0, _helpers.action)("QUIT")]), (0, _helpers.rule)(/66666/, [(0, _helpers.action)('LOST'), (0, _helpers.action)('QUIT')]), (0, _helpers.rule)(/22222/, [(0, _helpers.action)('POINTS', { amount: 200 }), (0, _helpers.action)('QUIT')]), (0, _helpers.rule)(/33333/, [(0, _helpers.action)('POINTS', { amount: 300 }), (0, _helpers.action)('QUIT')]), (0, _helpers.rule)(/44444/, [(0, _helpers.action)('POINTS', { amount: 400 }), (0, _helpers.action)('QUIT')]), (0, _helpers.rule)(/11(1|.*\?)/, [(0, _helpers.action)('FLASH'), (0, _helpers.action)('POINTS', { amount: 100 }), (0, _helpers.action)('QUIT')]), (0, _helpers.rule)(/22(2|.*\?)/, [(0, _helpers.action)('FLASH'), (0, _helpers.action)('POINTS', { amount: 20 }), (0, _helpers.action)('QUIT')]), (0, _helpers.rule)(/33(3|.*\?)/, [(0, _helpers.action)('FLASH'), (0, _helpers.action)('POINTS', { amount: 30 })]), (0, _helpers.rule)(/44(4|.*\?)/, [(0, _helpers.action)('FLASH'), (0, _helpers.action)('POINTS', { amount: 40 })]), (0, _helpers.rule)(/55(5|.*\?)/, [(0, _helpers.action)('FLASH'), (0, _helpers.action)('POINTS', { amount: 50 }), (0, _helpers.action)('QUIT')]), (0, _helpers.rule)(/66(6|.*\?)/, [(0, _helpers.action)('FLASH'), (0, _helpers.action)('POINTS', { amount: 60 })]), (0, _helpers.rule)(/.*/, [(0, _helpers.action)('SUM_REMAINING')])];