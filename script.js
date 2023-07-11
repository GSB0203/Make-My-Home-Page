let slider = document.querySelector('.slider');
let slideIndex = 0;
let slideCount = slider.children.length; // 슬라이드 개수

function nextSlide() {
  slideIndex = (slideIndex + 1) % slideCount; // 다음 슬라이드 인덱스 계산
  slider.style.transform = `translateX(-${slideIndex * (100)}%)`; // 슬라이드 사이 간격 고려
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount; // 이전 슬라이드 인덱스 계산
  slider.style.transform = `translateX(-${slideIndex * (100)}%)`; // 슬라이드 사이 간격 고려
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 88; // 네비게이션 바의 높이

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});


let blogSliderContainer = document.querySelector('#blog .slider-container');
let blogSlider = blogSliderContainer.querySelector('.slider');
let blogSlideIndex = 0;
let blogSlideCount = blogSlider.children.length; // 슬라이드 개수

function blogNextSlide() {
  blogSlideIndex = (blogSlideIndex + 1) % blogSlideCount; // 다음 슬라이드 인덱스 계산
  blogSlider.style.transform = `translateX(-${blogSlideIndex * (100)}%)`; // 슬라이드 사이 간격 고려
}

function blogPrevSlide() {
  blogSlideIndex = (blogSlideIndex - 1 + blogSlideCount) % blogSlideCount; // 이전 슬라이드 인덱스 계산
  blogSlider.style.transform = `translateX(-${blogSlideIndex * (100)}%)`; // 슬라이드 사이 간격 고려
}

document.querySelector('#blog .next-btn').addEventListener('click', blogNextSlide);
document.querySelector('#blog .prev-btn').addEventListener('click', blogPrevSlide);
