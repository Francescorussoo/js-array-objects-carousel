const  images = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
let currentIndex = 0;

function populateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    carouselInner.innerHTML = '';
    thumbnailContainer.innerHTML = '';
    
    images.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('carousel-item');
        if (index === 0) slideElement.classList.add('active');
        
        slideElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}">
            <div class="carousel-caption">
                <h3>${slide.title}</h3>
                <p>${slide.text}</p>
            </div>
        `;
        carouselInner.appendChild(slideElement);

        const thumbnailElement = document.createElement('div');
        thumbnailElement.classList.add('thumbnail-item');
        if (index === 0) thumbnailElement.classList.add('active');

        thumbnailElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}">
        `;
        thumbnailElement.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
        thumbnailContainer.appendChild(thumbnailElement);
    });
}

function updateCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const thumbnailItems = document.querySelectorAll('.thumbnail-item');
    carouselItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
    thumbnailItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

populateCarousel();
updateCarousel();