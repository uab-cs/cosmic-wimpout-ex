import {rollAll} from "./helpers";

export class Game {
    constructor() {
        this.state = {
            dice: "#",
            points: 0,
            win: false,
            lose: false
        };
        this.history = [];
    }

    dispatch(action) {
        let newState = reduce(this.state, action);
        this.history.push([ action.type, newState ]);
        this.state = newState;
    }
}

function reduce(state, action) {
    switch (action.type) {
        case "WIN": return Object.assign({}, state, {win: true});
        case "LOSE": return Object.assign({}, state, {lose: true});
        case "FLASH": return Object.assign({}, state, {dice: state.dice.replace(action.matcher, '')});
        case "SUM_REMAINING":
            let newState = Object.assign({}, state);
            newState.points += (state.dice.match(/5/g) || []).length * 5;
            newState.points += (state.dice.match(/1/g) || []).length * 10;
            newState.points += (state.dice.match(/\?/g) || []).length * 10;
            newState.dice = newState.dice.replace(/[15?]/g, '');
            return newState;
        case "QUIT": return Object.assign({}, state, {dice: "#"});
        case "POINTS": return Object.assign({}, state, {points: state.points + action.payload.amount});
        case "ROLL_DICE": return Object.assign({}, state, {dice: rollAll(action.payload.times)});
    }
}
