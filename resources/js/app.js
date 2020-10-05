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
