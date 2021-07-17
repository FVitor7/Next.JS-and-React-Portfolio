import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, {
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import Link from "next/link";
import Image from "next/image";

SwiperCore.use([Controller, Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function SwiperSlideFunction({ menuItem, urlSection }) {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <>
      <div className="swipeContainer">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          //onSlideChange={() => console.log('slide change')}
          //onSwiper={(Swiper) => console.log(Swiper)}
          controller={{ control: controlledSwiper }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          //scrollbar={{ draggable: true }}
        >
          {menuItem.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link href={`${urlSection}/${encodeURIComponent(item.url)}`}>
                  <div className="swipeImages">
                    <div className="swipeImagesDiv1">
                      <div className="divImgSwiper">
                        <Image
                          src={item.image}
                          alt="Photo Swiper"
                          height={390}
                          width={500}
                        />
                        <style jsx global>{`
                          .divImgSwiper {
                            width: 100%;
                            height: 100%;
                            object-fit: fill;
                          }
                        `}</style>
                      </div>

                      <div className="swipeImagesDiv2">
                        <h1>{item.title}</h1>
                        <span>{item.description_min}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperSlideFunction;
