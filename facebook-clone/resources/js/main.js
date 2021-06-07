// DEV:
const noticeUl = document.querySelector('.notice ul');
const noticeLi = document.querySelector('.notice li');

for(let i=0; i<30; i++){
    let li = noticeLi.cloneNode(true);
    noticeUl.append(li);
}

const commentContainer = document.querySelector('#contents-container .comment-section');
const comment = document.querySelector('#contents-container .comment-section .id');
const commentLengths = [
    Math.ceil(Math.random() * 3),
]

for(let i=0; i<commentLengths; i++){
    let cm = comment.cloneNode(true);
    commentContainer.append(cm);
}
