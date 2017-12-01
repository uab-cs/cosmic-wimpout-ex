import {Game} from "./game";
import {GAME_RULES} from "./rules";
import {action} from "./helpers";

function takeTurn(game) {
    game.dispatch(action('ROLL_DICE', { times: 5 }));

    for (let rule of GAME_RULES)
        if (rule.matcher.test(game.state.dice))
            for (let act of rule.actions)
                game.dispatch(act)

    return game;
}

function play() {
    let players = [ new Game(), new Game(), new Game() ];
    players.forEach( player => takeTurn(player) );
    return players.map( (player, i) => {
        return {
            player: i + 1,
            game: player
        }
    })
}

console.log(JSON.stringify(play(), null, 2));