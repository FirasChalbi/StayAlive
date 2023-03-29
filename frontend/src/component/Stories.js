import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import './Stories.css'

SwiperCore.use([Navigation, Pagination]);

const stories = [
  {
    id: 1,
    storie: "I came to learn that the storyline in my head … was holding me back.",
    name: "Peter",
    location: "Belgium",
    comment: "on what he learned when sitting with himself"
  },
  {
    id: 2,
    storie: "Traveling alone forced me out of my comfort zone and allowed me to discover parts of myself I never knew existed.",
    name: "Sarah",
    location: "USA",
    comment: "on how traveling alone changed her"
  },
  {
    id: 3,
    storie: "I always thought success meant working hard and achieving my goals, but I realized that true success is finding balance and living a fulfilling life.",
    name: "David",
    location: "Canada",
    comment: "on his realization about success"
  },
  {
    id: 4,
    storie: "Learning a new skill or hobby can be intimidating, but taking the first step and committing to it can be incredibly rewarding.",
    name: "Jessica",
    location: "Australia",
    comment: "on the benefits of learning new things"
  }
];



const CardSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3.3}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
    >
      {stories.map((stories) => (
        <SwiperSlide key={stories.id}>
          <div className="card">
      <div className="card__content">
        <div className="card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg">
            <path fill="currentColor" fillRule="evenodd" d="M4.49 7.529a5.3 5.3 0 011.174-.131c3.128 0 5.663 2.716 5.663 6.065 0 3.35-2.535 6.066-5.663 6.066S0 16.814 0 13.463c0-.098.002-.197.007-.295H0C0 8.113 3.84 4 8.56 4v2.036c-1.531 0-2.943.558-4.07 1.493zm12.674 0c.378-.086.77-.131 1.172-.131 3.128 0 5.664 2.716 5.664 6.065 0 3.35-2.536 6.066-5.664 6.066-3.128 0-5.663-2.715-5.663-6.066 0-.098.002-.197.007-.295h-.007c0-5.055 3.84-9.168 8.56-9.168v2.036c-1.532 0-2.943.558-4.07 1.493z" clipRule="evenodd"></path>
          </svg>
          <div className="card__quote">
            <p>{stories.storie}</p>
          </div>
        </div>
        <div className="card__author">
          <p className="card-name">{stories.name}</p>
          <p className="card-description">{stories.comment}</p>
        </div>
      </div>
    </div>
        </SwiperSlide>
      ))}
    </Swiper> 
  );
}

export default CardSlider;

/*
<Swiper
      spaceBetween={10}
      slidesPerView={3.1}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={stories.id}>
          <div className="card">
      <div className="card__content">
        <div className="card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon-svg">
            <path fill="currentColor" fillRule="evenodd" d="M4.49 7.529a5.3 5.3 0 011.174-.131c3.128 0 5.663 2.716 5.663 6.065 0 3.35-2.535 6.066-5.663 6.066S0 16.814 0 13.463c0-.098.002-.197.007-.295H0C0 8.113 3.84 4 8.56 4v2.036c-1.531 0-2.943.558-4.07 1.493zm12.674 0c.378-.086.77-.131 1.172-.131 3.128 0 5.664 2.716 5.664 6.065 0 3.35-2.536 6.066-5.664 6.066-3.128 0-5.663-2.715-5.663-6.066 0-.098.002-.197.007-.295h-.007c0-5.055 3.84-9.168 8.56-9.168v2.036c-1.532 0-2.943.558-4.07 1.493z" clipRule="evenodd"></path>
          </svg>
          <div className="card__quote">
            <p>{stories[0].storie}</p>
          </div>
        </div>
        <div className="card__author">
          <p className="card-name">{stories[0].name}</p>
          <p className="card-description">{stories[0].comment}</p>
        </div>
      </div>
    </div>
        </SwiperSlide>
      ))}
    </Swiper> 
*/

