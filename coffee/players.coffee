import {Game} from "./game"
import {GAME_RULES} from "./rules"
import {action, rule as makeRule} from "./helpers"

takeTurn = (game) ->
  game.dispatch(action('roll dice', {times: 5}))
  for rule in GAME_RULES
    if rule.matcher.test(game.state.dice)
      for act in rule.actions
        game.dispatch(act)
  game

export {takeTurn}