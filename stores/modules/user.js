import axios from "axios";
import { defineStore } from "pinia";

const token = process.client ? localStorage.getItem("access_token") : null;

export const useUserStore = defineStore("user", () => {
  const state = reactive({
    nameUser: [],
  });

  async function editName(option) {
    try {
      state.nameUser = await axios.post(
        `https://sinfxona.uz/api/api/v1/users/change-fullname`,
        option,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(state.nameUser);
    } catch (e) {
      console.error(e);
    }
  }

  async function getInfo(option) {
    try {
      let response = await axios.gost(
        `https://sinfxona.uz/api/api/v1/auth/get-info`,
        option,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  async function changePassword(option) {
    try {
      let response = await axios.gost(
        `https://sinfxona.uz/api/api/v1/users/change-password`,
        option,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }


  return {
    state,
    editName,
    getInfo,
    changePassword
  };
});
