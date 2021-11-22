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

const colors = ['crimson', 'darkorange', 'gold', 'springgreen', 'dodgerblue', 'midnightblue', 'indigo']
function changeBodyColor(i) {
  return new Promise((s, _) => {
    if(i > colors.length - 1) s(-1)
    else {
      setTimeout(() => {
        let color = colors[i]
        document.body.style.backgroundColor = color
  
        s(i)
      }, 500)
    }
  })
}

async function rainbow_body () {
  let i = 0
  for(c in colors){
    await changeBodyColor(i)
    i++
  }
}

rainbow_body()