<template>
  <div class="fixedNav">
    <v-app-bar color="#f0f8ff">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <img
              style="width: 40%"
              src="@/assets/imges/elfateh-Photoroom.png"
              alt="el-fateh"
            />
          </v-col>
          <v-col cols="7" class="mt-10">
            <ul
              class="links d-flex justify-space-between flex-row align-center"
              style="list-style: none; color: #003262"
            >
              <li>Production</li>
              <li>Product</li>
              <li>Shop</li>
              <li>Must Try</li>
              <li>Work With</li>
              <li>Collections</li>
            </ul>
          </v-col>
          <v-col
            cols="3"
            class="d-flex justify-end align-center"
            style="gap: 30px"
          >
            <IconGeneral name="search" style="fill: #003262"></IconGeneral>
            <div
              class="cart-list d-flex flex-column align-center"
              @click="openCart"
              style="cursor: pointer"
            >
              <v-badge
                location="right top"
                content="2"
                color="blue"
                offset-x="-15"
              ></v-badge>
              <img
                style="width: 30px; fill: #003262"
                src="@/assets/imges/cart.webp"
                alt="cart"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
import IconGeneral from "../IconGeneral.vue";
export default {
  components: { IconGeneral },
  inject: ["Emitter"], // Inject the event busF
  methods: {
    openCart() {
      console.log("Emitting opencart event");
      this.Emitter.emit("opencart"); // Emit the 'opencart' event when the button is clicked
    },
  },
};
</script>
