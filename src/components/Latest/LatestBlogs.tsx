// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div>
            <div>
                <img src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog2.jpg" alt="" />
            </div>
            <div>
                <div>
                    <a href="#">Fashion</a>
                </div>
                <h4>This is Secound Post For XipBlog</h4>
                <div>
                    <p>	
                        Posted by<span>Demo Posthemes</span>
                    </p>
                    <p>
						May 06TH, 2020
					</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <div>
                <img src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog2.jpg" alt="" />
            </div>
            <div>
                <div>
                    <a href="#">Fashion</a>
                </div>
                <h4>This is Secound Post For XipBlog</h4>
                <div>
                    <p>	
                        Posted by<span>Demo Posthemes</span>
                    </p>
                    <p>
						May 06TH, 2020
					</p>
                </div>
            </div>
        </div>
      </SwiperSlide> <SwiperSlide>
        <div>
            <div>
                <img src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog2.jpg" alt="" />
            </div>
            <div>
                <div>
                    <a href="#">Fashion</a>
                </div>
                <h4>This is Secound Post For XipBlog</h4>
                <div>
                    <p>	
                        Posted by<span>Demo Posthemes</span>
                    </p>
                    <p>
						May 06TH, 2020
					</p>
                </div>
            </div>
        </div>
      </SwiperSlide> <SwiperSlide>
        <div>
            <div>
                <img src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog2.jpg" alt="" />
            </div>
            <div>
                <div>
                    <a href="#">Fashion</a>
                </div>
                <h4>This is Secound Post For XipBlog</h4>
                <div>
                    <p>	
                        Posted by<span>Demo Posthemes</span>
                    </p>
                    <p>
						May 06TH, 2020
					</p>
                </div>
            </div>
        </div>
      </SwiperSlide> <SwiperSlide>
        <div>
            <div>
                <img src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog2.jpg" alt="" />
            </div>
            <div>
                <div>
                    <a href="#">Fashion</a>
                </div>
                <h4>This is Secound Post For XipBlog</h4>
                <div>
                    <p>	
                        Posted by<span>Demo Posthemes</span>
                    </p>
                    <p>
						May 06TH, 2020
					</p>
                </div>
            </div>
        </div>
      </SwiperSlide> <SwiperSlide>
        <div>
            <div>
                <img src="https://demo2.posthemes.com/pos_junno/modules/xipblog/img/home_default-blog2.jpg" alt="" />
            </div>
            <div>
                <div>
                    <a href="#">Fashion</a>
                </div>
                <h4>This is Secound Post For XipBlog</h4>
                <div>
                    <p>	
                        Posted by<span>Demo Posthemes</span>
                    </p>
                    <p>
						May 06TH, 2020
					</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};