const pageHeader = document.getElementById('page-header');

pageHeader.style.display = 'flex';

window.addEventListener('scroll', () => {
    pageHeader.style.opacity = '1';
});


