rand = (min, max) -> Math.floor(Math.random()*(max-min)+min)

roll = (isSpecial = false) ->
  num = rand(1, 6)
  if isSpecial and num == 3 then '?'
  else num

rollMany = (n) -> (roll(true if i == n)+'' for i in [1..n]).sort().join('')

rule = (matcher, actions) ->
  for a in actions
    a.matcher = matcher
  { matcher, actions }

action = (type, payload) -> "type": type, "payload": payload



export { rollMany, rule, action }