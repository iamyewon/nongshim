const swiper = document.querySelector('swiper-container')
    
const params = {
  injectStyles: [`
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    opacity: 1;
    background: white;
  }

  .swiper-pagination-bullet-active {
    background: transparent;
    border: 2px solid white;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination{
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet{
    margin: 0 20px !important;
  }

  `],
}

Object.assign(swiper, params); 
// swiper에 params 속성 복사 (객체의 속성을 추가하거나 덮어쓰기)
swiper.initialize();

// slide-prev
// slide-active
// slide-next

