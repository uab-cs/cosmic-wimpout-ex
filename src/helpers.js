export function roll(special) {
    const num = Math.floor(Math.random() * (6 - 1) + 1);
    if (special && num === 3) return "?";
    return num + "";
}

export function rollAll(num) {
    let dice = [roll(true)];
    for (let i = 1; i < num; i++) {
        dice.push(roll() + "");
    }
    return dice.sort().join('');
}

export function rule(matcher, actions) {
    actions.forEach( a => a.matcher = matcher );
    return {
        matcher: matcher,
        actions: actions
    }
}

export function action(type, payload) {
    return {type: type, payload: payload}
}