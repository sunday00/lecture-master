function fakeReq (url){
  return new Promise((success, fail) => {
    setTimeout(() => {
      success()
    }, 1000)
  })
}

const r = fakeReq('')
  .then(r => {
    console.log("!")
  })

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

changeBodyColor(0).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
}).then((res) => {
  return changeBodyColor(res + 1)
})