
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Controller, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Link from 'next/link'


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
                    breakpoints={
                        {
                            100: {
                                slidesPerView: 1,
                            },
                            700: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            }
                        }

                    }
                //scrollbar={{ draggable: true }}
                >
                    {

                        menuItem.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Link href={`${urlSection}/${encodeURIComponent(item.url)}`}>
                                        <div className="swipeImages">
                                            <div>
                                                <img src={item.image} />
                                                <div>
                                                    <h1>{item.title}</h1>
                                                    <span>{item.description_min}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </>
    )
}

export default SwiperSlideFunction;