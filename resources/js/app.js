require('./bootstrap');

import "jdenticon/dist/jdenticon.min";

window.ProgressBar = require('progressbar.js')

window.makeProgressBar = function (container, rating){
    new ProgressBar.Circle(document.querySelector(container), {
        color: 'white',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 3,
        trailColor: '#737574',
        easing: 'easeInOut',
        duration: 1500,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#48BB78', width: 6 },
        to: { color: '#48BB78', width: 6 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('0%');
            } else {
                circle.setText(value + '%');
            }

        }
    }).animate( rating / 100 );
}

window.focusSearch = function (event) {
    // if( event.keyCode === 191 ){
    if( event.key === '/' ){
        event.preventDefault();
        document.querySelector('#search').focus();
    }
}


const playBtn = document.querySelector('.play-trailer');
const src = document.querySelector('#video').getAttribute('src');

playBtn.addEventListener('click', function(event){
    event.preventDefault();
    toggleModal();
});

const overlay = document.querySelector('.modal-overlay');
overlay.addEventListener('click', toggleModal);

const closeModal = document.querySelectorAll('.modal-close');
for( let i=closeModal.length-1;i>=0;i-- ){
    closeModal[i].addEventListener('click', toggleModal);
}

document.onkeydown = function(evt) {
    evt = evt || window.event
    let isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc")
    } else {
        isEscape = (evt.keyCode === 27)
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
        toggleModal();
    }
};

function toggleModal () {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    const video = document.querySelector('#video');

    modal.classList.toggle('opacity-0');
    modal.classList.toggle('pointer-events-none');
    body.classList.toggle('modal-active');

    let currentSrc = body.classList.contains('modal-active') ? src : '';
    video.setAttribute('src', currentSrc);
}
