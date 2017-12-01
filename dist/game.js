"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = require("./helpers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.state = {
            dice: "#",
            points: 0,
            win: false,
            lose: false
        };
        this.history = [];
    }

    _createClass(Game, [{
        key: "dispatch",
        value: function dispatch(action) {
            var newState = reduce(this.state, action);
            this.history.push([action.type, newState]);
            this.state = newState;
        }
    }]);

    return Game;
}();

function reduce(state, action) {
    switch (action.type) {
        case "WIN":
            return Object.assign({}, state, { win: true });
        case "LOSE":
            return Object.assign({}, state, { lose: true });
        case "FLASH":
            return Object.assign({}, state, { dice: state.dice.replace(action.matcher, '') });
        case "SUM_REMAINING":
            var newState = Object.assign({}, state);
            newState.points += (state.dice.match(/5/g) || []).length * 5;
            newState.points += (state.dice.match(/1/g) || []).length * 10;
            newState.points += (state.dice.match(/\?/g) || []).length * 10;
            newState.dice = newState.dice.replace(/[15?]/g, '');
            return newState;
        case "QUIT":
            return Object.assign({}, state, { dice: "#" });
        case "POINTS":
            return Object.assign({}, state, { points: state.points + action.payload.amount });
        case "ROLL_DICE":
            return Object.assign({}, state, { dice: (0, _helpers.rollAll)(action.payload.times) });
    }
}