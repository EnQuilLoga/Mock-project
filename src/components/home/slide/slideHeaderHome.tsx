// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectFlip, EffectCreative } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';

export default () => {
  return (
    <div className='mx-6'>

        <Swiper
      // install Swiper modules
      
      modules={[Navigation, Pagination, Scrollbar,EffectFade,EffectCreative, A11y, Autoplay]}
      effect={"fade, creative"}   
      slidesPerView={1} 
    //   loop={true}      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    //   autoplay={{
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   }}
    
    >                
      <SwiperSlide>
       
        <div className="relative w-full h-slide bg-[url('./assets/sample-1.jpg')]">
            <div className='absolute'>
                <p>NIKE RUNNING SHOES</p>
                <h2>Sport Shoes</h2>
                <h2>Sale 40% Off</h2>
                <button className='bg-white border rounded px-2 py-2'>SHOP NOW</button> 
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide><img src="https://demo2.posthemes.com/pos_junno/modules/posslideshows/images/sample-2.jpg" alt="" /></SwiperSlide>
      
      
      
    </Swiper>
    </div>
  );
};