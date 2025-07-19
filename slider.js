
    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('.dot');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    let index = 0;
    let total = dots.length;
    let autoSlide;

    function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}vw)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

    function nextSlide() {
    index = (index + 1) % total;
    updateSlider();
}

    function prevSlide() {
    index = (index - 1 + total) % total;
    updateSlider();
}

    function goToSlide(i) {
    index = i;
    updateSlider();
}


    function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000); 
}

    function stopAutoSlide() {
    clearInterval(autoSlide);
}


    rightArrow.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

    leftArrow.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

    dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        goToSlide(i);
        stopAutoSlide();
        startAutoSlide();
    });
});
    startAutoSlide();

