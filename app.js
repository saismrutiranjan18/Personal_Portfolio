document.getElementById('downloadCvBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'sai basic resume.pdf';  // Path to my CV file
    link.download = 'sai basic resume.pdf';  // Name the downloaded file
    link.click();
});

/*
document.getElementById('homeBtn').addEventListener('click', function() {
    window.location.href = 'index.html';  // URL of my home page
});
*/

document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('#typed', {
        strings: ["I'm into Web Development", "Currently, I'm learning Java"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});

// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const skillCircles = document.querySelectorAll('.skill-circle');

    skillCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            // Remove the animation class if it's already present to reset the animation
            circle.classList.remove('animate');
            
            // Force reflow to restart the animation
            void circle.offsetWidth;

            // Add the animation class to trigger the animation
            circle.classList.add('animate');
        });
    });
});


