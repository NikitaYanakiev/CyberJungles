const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const blockID = anchor.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }

window.addEventListener('scroll', function() {
    const pageup = document.querySelector('.pageup');
    if (window.pageYOffset > 1600) {
        pageup.style.opacity = '1';
        pageup.style.visibility = 'visible';
    } else {
        pageup.style.opacity = '0';
        pageup.style.visibility = 'hidden';
    }
});