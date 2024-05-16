
const jumbotronSwiper = new Swiper(".jumbotron-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const newsSwiper = new Swiper(".news-swiper", {
  loop: true,
  slidesPerView: 15,
  spaceBetween: 30,
  initialSlide: 10,
  centeredSlides: true,
  slideToClickedSlide: true,
});



// loop="true" slides-per-view="15" 
//spaceBetween="30" initialSlide="10" centeredSlides="true" slideToClickedSlide="true" 


document.querySelector('.btn-quick').addEventListener('click', () => {
  const targetY = 855;

  window.scrollTo({
      top: targetY,
      behavior: 'smooth' 
  });
});

/**
 * $('.swiper').hover(function() {    swiper.autoplay.stop();}, function(){    swiper.autoplay.start();});
 */