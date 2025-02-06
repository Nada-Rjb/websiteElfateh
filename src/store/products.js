import { defineStore } from "pinia";
import axios from "axios";
import { API_CREDENTIALS } from "@/config"; // Import credentials

const auth = btoa(`${API_CREDENTIALS.username}:${API_CREDENTIALS.password}`);

export const productModule = defineStore("productModule", {
  state: () => ({
    FlashDeals: [],
  }),

  actions: {
    async getProducts() {
      try {
        const response = await axios.get(
          "https://erp.elfateh.online/api/resource/Website%20Item?fields=%5B%22%2A%22%5D&filters=%5B%5B%22custom_flash_deals%22%2C%20%22%3D%22%2C%20%221%22%5D%5D",
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );

        console.log("API Response:", response.data); // Log the response to check the structure
        this.FlashDeals = response.data.data;
        if (response.data && Array.isArray(response.data.data)) {
          // Safely slice the products array from 'message'
          this.FlashDeals = response.data.data;
          console.log("FlashDeals:", this.FlashDeals);
        } else {
          console.warn("Products not found or response format is incorrect");
          this.FlashDeals = []; // Set to an empty array if no valid products
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
