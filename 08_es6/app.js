{
// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }
}

const banner = document.getElementById("banner")

let imgs = document.getElementsByTagName('img');

let firstLink = document.querySelector('a')
console.log( firstLink.href ,":" ,  firstLink.getAttribute('href') )

let h1 = document.querySelector('h1')
h1.style.color = 'tomato'
h1.style.fontSize = '3em'

let links = document.querySelectorAll('a');
for (let a of links){
  a.style.color = "#4455BC"
  a.style.textDecorationColor = "#BB5544"
  a.style.textDecorationStyle = "wavy"
}

console.log( window.getComputedStyle(document.body).fontSize )
// style로 직접 지정한 게 없을때는 browser 기본값을 return.
// dynamic 하게 옆에 글자높이랑 맞추고 싶은데, 옆에 dom은 style로 지정한게 없어 null 이 
// 리턴되거나 할 때 이용하면 좋을 듯.

document.querySelector('h2').setAttribute('class', 'border border-green')
document.querySelector('h2').classList.add('purple')
setInterval(() => {
  document.querySelector('h2').classList.toggle('purple')
}, 500);