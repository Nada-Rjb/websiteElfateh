<template>
  <div class="flex justify-around items-center flex-wrap flash-deals py-8 px-4">
    <Swiper
      :pagination="{ el: '.swiperpag', clickable: true }"
      :modules="modules"
      :slides-per-view="3"
      :space-between="35"
      class="pb-6"
      :navigation="{
        prevIcon: '.swiper-prev',
        nextIcon: '.swiper-next',
      }"
      :breakpoints="{
        0: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 35 },
      }"
    >
      <swiper-slide lazy="true" v-for="item in products" :key="item.id">
        <CardItem
          :image="'https://erp.elfateh.online' + item.thumbnail"
          :title="item.item_code"
          :rating="item.price_list_rate"
          :description="item.description"
        />
      </swiper-slide>
    </Swiper>
    <div class="swiperpag m-8 flex justify-center items-center"></div>
    <div class="swiper-next"></div>
    <div class="swiper-prev"></div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation } from "swiper";

import CardItem from "../CardItem.vue";
export default {
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    CardItem,
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang="scss">
.flash-deals {
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #008ba3;
    font-size: 12rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    z-index: 10;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 15px;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background-color: #008ba3; /* Darker cyan on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }
}
</style>
