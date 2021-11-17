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
