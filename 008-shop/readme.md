- curl -X POST localhost:4000/login \
  -H 'Content-Type:application/json' \
  -d '{ "username":"KIM" }'

- use mydb
- db.createUser({user:'sunday00', roles: ['dbOwner'], pwd: passwordPrompt()})
