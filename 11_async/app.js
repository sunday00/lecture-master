const colors = ['tomato','darkorange','gold',
  'forestgreen','cornflowerblue','navy', 'magenta'];

document.body.style.backgroundColor = 'red'

let pointer = 0;
let speed = 200;

// setTimeout(() => {
//   pointer++;
//   document.body.style.backgroundColor = colors[pointer]
//   setTimeout(() => {
//     pointer++;
//     document.body.style.backgroundColor = colors[pointer]
//     setTimeout(() => {
//       pointer++;
//       document.body.style.backgroundColor = colors[pointer]
//       setTimeout(() => {
//         pointer++;
//         document.body.style.backgroundColor = colors[pointer]
//         setTimeout(() => {
//           pointer++;
//           document.body.style.backgroundColor = colors[pointer]
//           setTimeout(() => {
//             pointer++;
//             document.body.style.backgroundColor = colors[pointer]
//           }, speed);
//         }, speed);
//       }, speed);
//     }, speed);
//   }, speed);
// }, speed);

function changeBodyColor (color, time, next) {
  setTimeout(() => {
    document.body.style.backgroundColor = color
    next && next()
  }, time); 
}

changeBodyColor(colors[pointer], speed, () => {
  pointer++;
  changeBodyColor(colors[pointer], speed, () => {
    pointer++;
    changeBodyColor(colors[pointer], speed, () => {
      pointer++;
      changeBodyColor(colors[pointer], speed, () => {
        pointer++;
        changeBodyColor(colors[pointer], speed, () => {
          changeBodyColor(colors[pointer], speed, () => {
            pointer++;
            changeBodyColor(colors[pointer], speed, () => {
              pointer++;
              changeBodyColor(colors[pointer], speed, () => {
              
              })            
            })
          })
        })
      })
    })
  })
})


function fakeReq (url) {
  return new Promise((resolved, rejected) => {
    const delay = Math.floor(Math.random() * 6000) + 500
    setTimeout(() => {
      if( delay > 5000 ) {
        rejected('Connection Timeout')
      } else {
        resolved({data: {'title': 'apple', 'color': 'red', 'quantity': 100}})
      }
    }, delay);
  })
}

fakeReq("abc")
  .then(res => {
      console.log( res.data ); 
    })



