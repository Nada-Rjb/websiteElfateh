<template>
  <div class="feature">
    <v-container>
      <v-row>
        <!-- First Column -->
        <v-col>
          <div class="parent d-flex align-center justify-center">
            <IconGeneral
              name="FastShipping"
              style="width: 30px"
              class="mr-5"
            ></IconGeneral>
            <span>Free Shipping & Return</span>
          </div>
        </v-col>

        <!-- Middle Column -->
        <v-col>
          <div class="parentMiddel d-flex align-center justify-center">
            <IconGeneral
              name="Grantee"
              style="width: 25px"
              class="mr-5"
            ></IconGeneral>
            <span>Product Guarantee</span>
          </div>
        </v-col>

        <!-- Third Column -->
        <v-col>
          <div class="parent d-flex align-center justify-center">
            <IconGeneral
              name="trophy"
              style="width: 30px"
              class="mr-5"
            ></IconGeneral>
            <span>Top Quality</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import IconGeneral from "../IconGeneral.vue";

export default {
  components: { IconGeneral },
};
</script>

<style lang="scss" scoped>
.feature {
  .parentMiddel {
    position: relative;

    /* Left Separator */
    &::before {
      content: "|";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
      font-size: 1.5rem;
    }

    &::after {
      content: "|";
      position: absolute;
      right: -15px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
      font-size: 1.5rem;
    }
  }
}
</style>
