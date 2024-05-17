
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


document.querySelector('.btn-quick').addEventListener('click', () => {
  const targetY = 855;

  window.scrollTo({
      top: targetY,
      behavior: 'smooth' 
  });
});


/* swiper 정지 / 시작 버튼 

~~ .addEventListener('click', () => {
  swiper.autoplay.stop();
})

~~ .addEventListener('click', () => {
  swiper.autoplay.start();
})
*/

const handleStorage = {
  setStorage(name, value, exp) {
    let date = new Date();
    expireDate = date.setTime(date.getTime() + (exp * 24 * 60 * 60 * 1000));

    const item = {
      value: value, 
      expire: expireDate,
    }

    localStorage.setItem(name, JSON.stringify(item));
  },

  getStorage(name) {
    let currentDate = new Date();
    currentDate = currentDate.setTime(currentDate.getTime());
    return parseInt(localStorage.getItem(name)) > currentDate;
  }
};

const popup = document.querySelector('.popup');
const stopWatchingForToday = document.querySelector('.stop-watching-for-today');
const popupCloseBtn = document.querySelector('.popup-close');

stopWatchingForToday.addEventListener("click", () => {
  handleStorage.setStorage("expiryDate", "", 1);
  popup.classList.add('popup-hidden');
})

popupCloseBtn.addEventListener("click", () => {
  popup.classList.add('popup-hidden');
})


if(handleStorage.getStorage("expiryDate")){
  popup.classList.add('popup-hidden');
}else{
  popup.classList.remove('popup-hidden');
}

// 스토리지 미완