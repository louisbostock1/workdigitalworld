// Progress bar
(function () {
    const progressBar = document.getElementById('progress-bar');

    function updateProgressBar() {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        if (progressBar) progressBar.style.width = pct + '%';
    }

    window.addEventListener('scroll', updateProgressBar, { passive: true });
    updateProgressBar();
})();


// Lightbox — enlarging images
(function () {
    const lightboxHTML = `
        <div id="lightbox" role="dialog" aria-modal="true" aria-label="Expanded image">
            <button id="lightbox-close" aria-label="Close">&times;</button>
            <img id="lightbox-img" src="" alt="">
        </div>`;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    }

    document.querySelectorAll('.image-row img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });

    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    lightboxClose.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
})();


// cookie cursor

document.addEventListener('DOMContentLoaded', () => {
  const cookie = document.getElementById('cookie-cursor');

  document.addEventListener('mousemove', e => {
    cookie.style.display = 'block';
    cookie.style.left = e.clientX + 'px';
    cookie.style.top  = e.clientY  + 'px';
  });
});