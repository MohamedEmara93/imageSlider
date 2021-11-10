const images = Array.from(document.querySelectorAll('img'))
const lightBox = document.querySelector('.lightBox')
const layOut = document.querySelector('.lay-out')

const next = document.getElementById('next')
const prev = document.getElementById('prev')
const exit = document.getElementById('exit')

let currentIndex = 0;

////// display lightbox
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (e) {
        let imgSrc = e.target.getAttribute('src');

        if (imgSrc) {
            lightBox.classList.remove('d-none');
            lightBox.classList.add('d-flex');
            layOut.classList.remove('d-none')

            lightBox.style.background = 'url(' + imgSrc + ')';
            currentIndex = images.indexOf(e.target)
        }

    })
}

/////// display next Image
function nextSlide() {
    currentIndex++;
    if (currentIndex == images.length) {
        currentIndex = 0
    }
    let imgSrc = images[currentIndex].getAttribute('src')
    lightBox.style.background = 'url(' + imgSrc + ')';
}
next.addEventListener('click', nextSlide)

document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowRight') {
        nextSlide()
    }
})

/////// display prev Image
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1
    }
    let imgSrc = images[currentIndex].getAttribute('src')
    lightBox.style.background = 'url(' + imgSrc + ')';
}
prev.addEventListener('click', prevSlide)

document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowLeft') {
        prevSlide()
    }
})
/////// Close LightBox
function closeSlide() {
    lightBox.classList.add('d-none');
    lightBox.classList.remove('d-flex');
    layOut.classList.add('d-none')
}
exit.addEventListener('click', closeSlide)

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {
        closeSlide()
    }
})

layOut.addEventListener('click', closeSlide)