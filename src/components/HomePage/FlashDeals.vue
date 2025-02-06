<template>
  <div>
    <h1 class="font-bold bg-red">Hello world!</h1>
  </div>
  <div class="flashDeal">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in products" :key="item.id">
        <CardItem
          :image="'https://erp.elfateh.online' + item.thumbnail"
          :title="item.item_code"
          :rating="item.price_list_rate"
          :description="item.description"
        />
      </div>
    </div>
    <!-- {{ item.item_group }}
          Render product name 
          {{ item.last_purchase_rate }} -->
    <!-- Render product price -->
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
<style scoped lang="scss">
.flash-deals {
  .v-card-text {
    font-family: Cairo;
    font-weight: 600;
    font-size: 20px;
  }
}
</style>
