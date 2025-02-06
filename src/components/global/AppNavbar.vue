<template>
  <div class="navbar">
    <v-app-bar color="#f0f8ff" class="pt-3" height="fit-content" absolute>
      <!-- <v-app-bar-nav-icon @click="openCart"> </v-app-bar-nav-icon> -->
      <v-container fluid>
        <v-row>
          <v-col cols="3" class="d-flex justify-center" style="gap: 10px">
            <div class="logo">
              <img
                style="width: 80px"
                src="@/assets/imges/elfateh-Photoroom.png"
                alt="el-fateh"
              />
            </div>
          </v-col>
          <v-col cols="5">
            <div class="position-relative" style="width: 80%">
              <input
                type="search"
                name="Navsearch"
                id="Navsearch"
                style="width: 100%; border-radius: 30px; outline: none"
                class="py-3 px-8 bg-white"
                placeholder="Search in Factory"
              />
              <IconGeneral
                name="search"
                style="
                  position: absolute;
                  right: 10px;
                  top: 50%;
                  transform: translateY(-50%);
                "
              ></IconGeneral>
            </div>
          </v-col>
          <v-col cols="4" class="ps-5">
            <div
              class="parent d-flex justify-space-between align-center bg-[003262]"
              style="color: #003262"
            >
              <div class="text-navbar">
                <span> Available 24/7</span>
                <br />
                <strong> (20)1000-359-970 </strong>
              </div>
              <!-- icons -->
              <div class="whish-list d-flex flex-column align-center">
                <v-icon>mdi-heart</v-icon>
                <span class="mt-2">Wish List</span>
              </div>
              <div class="sign-in d-flex flex-column align-center">
                <img
                  style="width: 30px"
                  src="@/assets/imges/signin.webp"
                  alt="sign in"
                />
                <span class="mt-2">sign in</span>
              </div>
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
                  style="width: 30px"
                  src="@/assets/imges/cart.webp"
                  alt="cart"
                />
                <span class="mt-2">cart</span>
              </div>
            </div>
          </v-col>
          <v-row class="mt-6">
            <v-col cols="5">
              <ul
                class="links d-flex justify-space-between"
                style="list-style: none; color: #003262"
              >
                <li>Production</li>
                <li>Product</li>
                <li>shop</li>
                <li>Must Try</li>
                <li>Work With</li>
                <li>collections</li>
              </ul>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col
              style="color: #003262; gap: 35px"
              cols="5"
              class="d-flex justify-end"
            >
              <div class="help d-flex align-center" style="gap: 5px">
                <img
                  style="width: 20px"
                  src="@/assets/imges/war.webp"
                  alt="watsapp"
                />
                <span>wat-app</span>
              </div>
              <div
                class="lang d-flex align-center"
                style="gap: 5px"
                id="language-btn"
              >
                <v-img
                  :src="selectedLang.icon"
                  class="me-3"
                  style="width: 20px"
                />
                <span>{{ selectedLang.title }}</span>
                <v-icon>mdi-chevron-down</v-icon>
                <v-menu activator="#language-btn">
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in itemsLang"
                      :key="index"
                      @click="selectLang(item)"
                    >
                      <!-- Corrected image component -->
                      <v-list-item-title class="d-flex align-center">
                        <v-img
                          :src="item.icon"
                          class="me-3"
                          style="width: 20px"
                        />
                        <span>{{ item.title }}</span>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import IconGeneral from "../IconGeneral.vue";
export default {
  components: { IconGeneral },
  data: () => ({
    selectedLang: {
      title: "EN/USD",
      icon: require("@/assets/imges/de-lang.svg"),
    },
    //obj
    itemsLang: [
      {
        title: "EN/USD",
        icon: require("@/assets/imges/de-lang.svg"),
      },
      {
        title: "ENb/USD",
        icon: require("@/assets/imges/en.svg"),
      },
    ],
  }),
  inject: ["Emitter"], // Inject the event bus
  methods: {
    openCart() {
      console.log("Emitting opencart event");
      this.Emitter.emit("opencart"); // Emit the 'opencart' event when the button is clicked
    },
    selectLang(item) {
      this.selectedLang = item;
    },
  },
};
</script>
