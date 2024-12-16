let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Переход к последнему слайду
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Переход к первому слайду
    }

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

let videoIndex = 0;

function changeVideoSlide(direction) {
    const videoSlides = document.querySelector('.video-slides');
    const totalSlides = document.querySelectorAll('.video-slide').length;

    videoIndex = (videoIndex + direction + totalSlides) % totalSlides; // Обновление индекса слайда
    const offset = -videoIndex * 100; // Вычисление смещения
    videoSlides.style.transform = `translateX(${offset}%)`; // Применение смещения
}
