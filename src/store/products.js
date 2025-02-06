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
          "https://erp.elfateh.online/api/method/general_customization.general_customiztion.api.test",
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );

        console.log("API ggResponse:", response.data); // Log the response to check the structure
        this.FlashDeals = response.data.message;
        console.log("FlashDeals:", this.FlashDeals);
        if (response.data && Array.isArray(response.data.message)) {
          // Safely slice the products array from 'message'
          this.FlashDeals = response.data.message;
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
