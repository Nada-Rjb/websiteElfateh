<template>
  <h1 class="font-bold bg-red">Hello world!</h1>
  <div class="flash-deals">
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }"
    >
      <SwiperSlide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pl-0 bg-black" style="height: 300px">
          <img
            :src="
              item.thumbnail.startsWith('http')
                ? item.thumbnail
                : 'https://erp.elfateh.online' + item.thumbnail
            "
            class="w-100"
            height="200px"
            alt="flash sale"
          />
          <v-card-text class="pl-0 pt0" dir="rtl">{{
            item.item_name.split(" ").length < 3
              ? item.item_name
              : item.item_name.split(" ").slice(0, 9).join(" ") + " "
          }}</v-card-text>
        </v-card>
      </SwiperSlide>
      <!-- to be at the and of page  -->
      <div class="swiper-button-prev swiper-prev"></div>
      <div class="swiper-button-next swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
  <!-- {{ item.item_group }}
          Render product name 
          {{ item.last_purchase_rate }} -->
  <!-- Render product price -->
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation } from "swiper";
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
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped lang="scss">
.flash-deals {
  .v-card-text {
    font-family: Cairo;
    font-weight: 600;
    font-size: 20px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    background-color: rgb(116, 185, 116);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-weight: 900;
    color: white;

    &::after {
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
