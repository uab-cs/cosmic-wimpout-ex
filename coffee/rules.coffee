import {rule, action} from "./helpers";

GAME_RULES = [
  rule(/11111/, [
    action("win"),
    action("quit")
  ]),
  rule(/66666/, [
    action('lost'),
    action('quit')
  ]),
  rule(/22222/, [
    action('points', { amount: 200 }),
    action('quit')
  ]),
  rule(/33333/, [
    action('points', { amount: 300 }),
    action('quit')
  ]),
  rule(/44444/, [
    action('points', { amount: 400 }),
    action('quit')
  ]),
  rule(/11(1|.*\?)/, [
    action('flash'),
    action('points', { amount: 100 }),
    action('quit')
  ]),
  rule(/22(2|.*\?)/, [
    action('flash'),
    action('points', { amount: 20 }),
    action('quit')
  ]),
  rule(/33(3|.*\?)/, [
    action('flash'),
    action('points', { amount: 30 })
  ]),
  rule(/44(4|.*\?)/, [
    action('flash'),
    action('points', { amount: 40 })
  ]),
  rule(/55(5|.*\?)/, [
    action('flash'),
    action('points', { amount: 50 }),
    action('quit')
  ]),
  rule(/66(6|.*\?)/, [
    action('flash'),
    action('points', { amount: 60 })
  ]),
  rule(/[15?]/, [
    action('sum remaining')
  ])
]

export {GAME_RULES}