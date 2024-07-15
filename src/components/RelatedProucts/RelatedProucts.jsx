import React from "react";
import "./RelatedProucts.css";
import data_product from "../../../public/all_product.json";
import Item from "../Item/Item";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data_product.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Item
                id={item.id}
                name={item.name}
                image={`../../../public/${item.image}`}
                new_price={item.new_price}
                old_price={item.old_price}
                description={item.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
