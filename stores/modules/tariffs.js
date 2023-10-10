import axios from "axios";
import { defineStore } from "pinia";


const token = process.client ? localStorage.getItem("access_token") : null;



export const useTarifstore = defineStore("tariffs", () => {
  const state = reactive({
    tariffs: [],
  });

  async function getAllTriff() {
    try {
      state.tariffs = await axios.get(`https://sinfxona.uz/api/api/v1/tariff`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(state.tariffs);
    } catch (e) {
      console.error(e);
    }
  }

  return {
    state,
    getAllTriff
  };
});
