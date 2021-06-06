// DEV:
const noticeUl = document.querySelector('.notice ul');
const noticeLi = document.querySelector('.notice li');

for(let i=0; i<30; i++){
    let li = noticeLi.cloneNode(true);
    noticeUl.append(li);
}


