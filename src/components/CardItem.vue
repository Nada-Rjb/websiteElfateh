<template>
  <div
    class="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 py-8"
  >
    <div class="flex flex-co rounded-lg w-96 justify-center items-center">
      <div
        class="img h-80 w-80 overflow-hidden rounded-lg bg-clip-border flex justify-center items-center border border-slate-200 rounded-lg"
      >
        <img
          :src="image"
          alt="card-image"
          class="object-contain rounded-md h-full w-full"
        />
      </div>
    </div>
    <div class="p-4 text-right px-8 py-8" dir="rtl">
      <!-- Title and Price Block -->
      <!-- Title in Arabic -->

      <div class="mb-10 flex justify-between">
        <p class="text-slate-800 text-xl font-semibold">
          {{ title }}
        </p>
        <span
          class="text-cyan-600 text-xl font-semibold text-left border border-slate-200 rounded-lg p-10"
        >
          <span dir="ltr"> {{ rating }} EGP</span>
        </span>
        <!-- Price -->
      </div>
      <!-- Added 'text-right' to make sure the description text flows RTL -->
      <p class="text-slate-600 leading-normal font-light">
        {{ description }}
      </p>
      <!-- Description in Arabic -->
      <div class="flex justify-center items-center">
        <button
          class="rounded-md w-90 mt-6 bg-cyan py-2 order border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Add to Cart
        </button>
      </div>
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
