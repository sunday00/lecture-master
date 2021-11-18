function helloA () {

}

async function helloB () {
  return [1, 2, 3, 4]
}

console.log( helloA(), helloB() )

helloB().then(res => {
  console.log(res)
})

async function login(name, pass) {
  if( !name || !pass ) throw 'Missing Credentials'
  return 'welcome'
}

