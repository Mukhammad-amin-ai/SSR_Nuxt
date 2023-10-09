import axios from "axios";

import { defineStore } from "pinia";

const token = process.client ? localStorage.getItem("access_token") : null;

export const useLoginStore = defineStore("login", () => {
  const state = reactive({
    login: [],
    logined: true,
    notLogined: false,
  });

  async function logIn(number, password) {
    let data = {
      username: number,
      password: password,
    };
    try {
      state.login = await axios.post(
        "https://sinfxona.uz/api/api/v1/auth/login",
        data
      );
      // console.log(state.login);
      if (state.login.data) {
        localStorage.setItem(
          "access_token",
          state.login.data.data.access_token
        );
        window.location.href = "/";
        check();
      }
    } catch (e) {
      console.error(e);
    }
  }

  function check() {
    if (token) {
      state.logined = true;
      state.notLogined = false;
    }
  }

  return {
    state,
    logIn,
    check,
  };
});
