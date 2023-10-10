import axios from "axios";
import { defineStore } from "pinia";

const token = process.client ? localStorage.getItem("access_token") : null;



export const useCardStore = defineStore("card", () => {
  const state = reactive({
    cards: [],
  });

  async function getMycard() {
    try {
      state.cards = await axios.get(`https://sinfxona.uz/api/api/v1/customer-cards/my-cards`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(state.cards);
    } catch (e) {
      console.error(e);
    }
  }

  return {
    state,
    getMycard
  };
});
