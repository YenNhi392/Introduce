
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.view-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(btn => btn.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            e.target.classList.add('active');

            const targetId = e.target.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.querySelector('h1').setAttribute('tabindex', '-1');
                targetSection.querySelector('h1').focus();
            }
        });
    });

    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    const openLightbox = (src, alt) => {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.classList.add('active');
        closeBtn.focus();
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
    };

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            openLightbox(item.src, item.alt);
        });
        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                openLightbox(item.src, item.alt);
            }
        });
    });

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});
