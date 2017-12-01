import {rollMany, action} from "./helpers"

class Game
  constructor: ->
    @state = {
      dice: '',
      points: 0,
      win: false,
      lose: false
    }
    @history = []

  dispatch: (action) ->
    state = reduce(@state, action)
    @history.push([action.type, state])
    @state = state

reduce = (state, action) ->
  update = (obj) => return Object.assign({}, state, obj)
  switch action.type
    when 'win'
      return update({win: true})
    when 'lose'
      return update({lose: true})
    when 'flash'
      return update({dice: state.dice.replace(action.matcher, '')})
    when 'quit'
      return update({dice: ''})
    when 'points'
      return update({points: state.points + action.payload.amount})
    when 'roll dice'
      return update({dice: rollMany(action.payload.times)});
    when 'sum remaining'
      points = 0
      points += state.dice.match(/5/g)?.length * 5 ? 0
      points += state.dice.match(/1/g)?.length * 10 ? 0
      points += state.dice.match(/\?/g)?.length * 10 ? 0
      return update({ points: points, dice: state.dice.replace(/[15?]/g, '')})

export {Game}