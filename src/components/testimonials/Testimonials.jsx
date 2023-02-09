import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"   modules={[Navigation, Pagination,A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
            
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione adipisci laborum cumque ipsam fuga, tenetur laudantium placeat quas quibusdam. Quam autem eaque magnam repellat hic amet vitae voluptate aliquam odio?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="" />
            
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione adipisci laborum cumque ipsam fuga, tenetur laudantium placeat quas quibusdam. Quam autem eaque magnam repellat hic amet vitae voluptate aliquam odio?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="" />
            
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione adipisci laborum cumque ipsam fuga, tenetur laudantium placeat quas quibusdam. Quam autem eaque magnam repellat hic amet vitae voluptate aliquam odio?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="" />
           
          </div>
           <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione adipisci laborum cumque ipsam fuga, tenetur laudantium placeat quas quibusdam. Quam autem eaque magnam repellat hic amet vitae voluptate aliquam odio?
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials