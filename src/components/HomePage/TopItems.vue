<template>
  <div class="MainItem bg-grey-lighten-4 pt-10">
    <v-container fluid>
      <v-row class="card-row">
        <v-col cols="4" class="pr-6">
          <div class="product-card">
            <img src="@/assets/imges/cheese.jpg" alt="ChesseMabshour" />
          </div>
        </v-col>
        <v-col cols="4">
          <div class="product-card">
            <img src="@/assets/imges/Butter.jpg" alt="Butter" />
          </div>
        </v-col>
        <v-col cols="4">
          <div class="product-card">
            <img src="@/assets/imges/WhitCheese.png" alt="WhitCheese" />
          </div>
        </v-col>
      </v-row>

      <v-row class="card-row pt-6 py-0">
        <v-col cols="6" class="pr-6">
          <div class="product-card">
            <img src="@/assets/imges/kiri.jpg" alt="WhitCheese " />
          </div>
        </v-col>
        <v-col cols="6" class="pl-6">
          <div class="product-card">
            <img src="@/assets/imges/pastrma.jpg" alt="WhitCheese" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.MainItem {
  .card-row {
    display: flex;
    justify-content: center;
  }
  .product-card {
    transition: transform 0.5s ease-in-out;
    overflow: hidden;
    border-radius: 15px;
    height: 100%;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
  }
  .product-card:hover {
    transform: scale(1.05);
  }
  @media (max-width: 1024px) {
    .product-card {
      height: 250px; /* Adjust this to suit the desired height */
    }
  }

  /* Additional adjustments for mobile screens */
  @media (max-width: 600px) {
    .card-row {
      justify-content: space-evenly; /* Center and balance items */
    }
    .product-card {
      height: 200px; /* Adjust this as necessary */
    }
  }
}
</style>
