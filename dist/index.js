"use strict";

var _game = require("./game");

var _rules = require("./rules");

var _helpers = require("./helpers");

function takeTurn(game) {
    game.dispatch((0, _helpers.action)('ROLL_DICE', { times: 5 }));

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _rules.GAME_RULES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var rule = _step.value;

            if (rule.matcher.test(game.state.dice)) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = rule.actions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _act = _step2.value;

                        game.dispatch(_act);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return game;
}

function play() {
    var players = [new _game.Game(), new _game.Game(), new _game.Game()];
    players.forEach(function (player) {
        return takeTurn(player);
    });
    return players.map(function (player, i) {
        return {
            player: i + 1,
            game: player
        };
    });
}

console.log(JSON.stringify(play(), null, 2));