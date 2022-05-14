import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/doge.png";
import AVTR2 from "../../assets/doge.png";
import AVTR3 from "../../assets/doge.png";
import AVTR4 from "../../assets/doge.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi atque eius nulla voluptatibus saepe qui ut reprehenderit perspiciatis debitis tempore!",
  },
  {
    avatar: AVTR2,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi atque eius nulla voluptatibus saepe qui ut reprehenderit perspiciatis debitis tempore!",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi atque eius nulla voluptatibus saepe qui ut reprehenderit perspiciatis debitis tempore!",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi atque eius nulla voluptatibus saepe qui ut reprehenderit perspiciatis debitis tempore!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            /*items in the map needs to have a key attribute and we are using the index of the array*/
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
