<template>
  <div class="flash-deals py-8 px-4">
    <Swiper
      :pagination="{ el: '.swiperpag', clickable: true }"
      :modules="modules"
      :slides-per-view="3"
      :space-between="35"
      :navigation="{
        prevIcon: '.swiper-prev',
        nextIcon: '.swiper-next',
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
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 30px;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  transform: translateY(-50%) scale(1.1);
}
</style>
