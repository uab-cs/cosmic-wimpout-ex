"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.roll = roll;
exports.rollAll = rollAll;
exports.rule = rule;
exports.action = action;
function roll(special) {
    var num = Math.floor(Math.random() * (6 - 1) + 1);
    if (special && num === 3) return "?";
    return num + "";
}

function rollAll(num) {
    var dice = [roll(true)];
    for (var i = 1; i < num; i++) {
        dice.push(roll() + "");
    }
    return dice.sort().join('');
}

function rule(matcher, actions) {
    actions.forEach(function (a) {
        return a.matcher = matcher;
    });
    return {
        matcher: matcher,
        actions: actions
    };
}

function action(type, payload) {
    return { type: type, payload: payload };
}