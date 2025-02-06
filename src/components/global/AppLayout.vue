<template>
  <div class="layout">
    <v-layout class="position-relative">
      <AppDrawer />

      <v-main style="padding-top: 180px">
        <slot></slot>
      </v-main>
      <AppNavbar />
      <FixedNavbar />
      <AppFooter />
    </v-layout>
  </div>
</template>
<script>
import AppNavbar from "./AppNavbar.vue";
import FixedNavbar from "./FixedNavbar.vue";
import AppFooter from "./AppFooter.vue";
import AppDrawer from "./AppDrawer.vue";
export default {
  data: () => ({
    drawer: false,
  }),
  components: { AppNavbar, AppFooter, AppDrawer, FixedNavbar },
};
</script>
