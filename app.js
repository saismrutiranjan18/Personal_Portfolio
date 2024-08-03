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
