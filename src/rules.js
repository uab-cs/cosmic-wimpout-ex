import {rule, action} from "./helpers";

export const GAME_RULES = [
    rule(/11111/, [
        action("WIN"),
        action("QUIT")
    ]),
    rule(/66666/, [
        action('LOST'),
        action('QUIT')
    ]),
    rule(/22222/, [
        action('POINTS', { amount: 200 }),
        action('QUIT')
    ]),
    rule(/33333/, [
        action('POINTS', { amount: 300 }),
        action('QUIT')
    ]),
    rule(/44444/, [
        action('POINTS', { amount: 400 }),
        action('QUIT')
    ]),
    rule(/11(1|.*\?)/, [
        action('FLASH'),
        action('POINTS', { amount: 100 }),
        action('QUIT')
    ]),
    rule(/22(2|.*\?)/, [
        action('FLASH'),
        action('POINTS', { amount: 20 }),
        action('QUIT')
    ]),
    rule(/33(3|.*\?)/, [
        action('FLASH'),
        action('POINTS', { amount: 30 })
    ]),
    rule(/44(4|.*\?)/, [
        action('FLASH'),
        action('POINTS', { amount: 40 })
    ]),
    rule(/55(5|.*\?)/, [
        action('FLASH'),
        action('POINTS', { amount: 50 }),
        action('QUIT')
    ]),
    rule(/66(6|.*\?)/, [
        action('FLASH'),
        action('POINTS', { amount: 60 })
    ]),
    rule(/.*/, [
        action('SUM_REMAINING')
    ])
];