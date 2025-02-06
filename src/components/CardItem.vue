<template>
  <div
    class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
  >
    <div
      class="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border items-center"
    >
      <img :src="image" alt="card-image" class="object-cover rounded-md" />
    </div>
    <div class="p-4 text-right">
      <div class="mb-2 flex items-center justify-between text-right">
        <!-- Added class 'text-right' for right-to-left (RTL) alignment -->
        <p class="text-slate-800 text-xl font-semibold text-right">
          {{ title }}
        </p>
        <!-- Title in Arabic -->
        <p class="text-cyan-600 text-xl font-semibold text-right">
          {{ rating }}
        </p>
        <!-- Price -->
      </div>
      <!-- Added 'text-right' to make sure the description text flows RTL -->
      <p class="text-slate-600 leading-normal font-light text-right">
        {{ description }}
      </p>
      <!-- Description in Arabic -->
      <button
        class="rounded-md w-full mt-6 bg-cyan py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number, // Price should be a number
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Optional: You can use a font that supports Arabic text */
body {
  font-family: "Cairo", sans-serif; /* You can use other fonts that support Arabic */
}
</style>
