<template>
  <div class="banner">
    <div class="content-container">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="text-content">
              <h1 class="headline">
                Factory Fresh, <span>Right to Your Home</span>
              </h1>
              <p class="highlight">Save up to 70% on selected items!</p>
            </div>
          </v-col>
          <v-col
            cols="6"
            class="background-button d-flex justify-center align-center"
          >
            <v-btn
              variants="outline"
              rounded="xl"
              color="indigo-darken-3"
              class="cta-btn py-4 px-10"
              size="x-large"
              style="text-transform: none"
            >
              Shop Now</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  height: 500px;
  background-image: url(../../assets/imges/many.jpg);
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  .content-container {
    background: rgba(255, 255, 255, 0.85);
    padding: 2rem;
    border-radius: 2xl;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    .text-content {
      color: #333;
      max-width: 400px;

      h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 1.2;

        span {
          color: #ff6347; // vibrant accent color for emphasis
        }
      }

      .highlight {
        font-size: 1.2rem;
        font-weight: 500;
        color: #00796b;
      }
    }
  }
}
</style>
