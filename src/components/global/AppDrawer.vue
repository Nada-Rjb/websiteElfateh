<template>
  <div class="drawer">
    <v-navigation-drawer v-model="drawer" temporary location="right">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet,
        eligendi quos porro magni tempore, accusamus nulla nam repudiandae
        reiciendis sint ex possimus dolor, ad eaque illum accusantium animi
        deserunt.
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"], // Inject the event bus
  data: () => ({
    drawer: false, // The state for the drawer
  }),
  mounted() {
    this.Emitter.on("opencart", () => {
      console.log("opencart event received");
      this.drawer = !this.drawer; // Open the drawer when the event is received from nav bar
    });
  },
};
</script>
