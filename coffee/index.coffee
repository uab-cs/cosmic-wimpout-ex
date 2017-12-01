import {takeTurn} from "./players"
import {Game} from "./game"

console.log(JSON.stringify(takeTurn(new Game()), null, 2))