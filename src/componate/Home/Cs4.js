import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "react-bootstrap";
function Cs4() {

  return (
    <>
      <Container>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-2.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-3.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-4.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-5.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-6.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-2.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-3.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-4.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-5.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://bootstrapmade.com/demo/templates/QuickStart/assets/img/clients/client-6.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}

export default Cs4;
