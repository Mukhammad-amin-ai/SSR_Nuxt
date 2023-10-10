import axios from "axios";

import { defineStore } from "pinia";

let token = process.client ? localStorage.getItem("access_token") : null;

export const useLoginStore = defineStore("login", () => {
  const state = reactive({
    login: [],
    logined: false,
    notLogined: true,
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

  function logOut() {
    try {
      let response = axios.post(`https://sinfxona.uz/api/api/v1/auth/logout`, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response);
      // localStorage.removeItem("access_token");
      // state.login = !state.login;
      // state.notLogined = !state.notLogined;
      // window.location.reload();
    } catch (e) {
      console.error(e);
    }
  }

  async function register(option) {
    try {
      let response = await axios.post(
        `https://sinfxona.uz/api/api/v1/applications`,
        option,
        { header: { Autorization: "Bearer " + token } }
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  async function cardCreate(option) {
    try {
      let response = await axios.post(
        `https://sinfxona.uz/api/api/v1/applications/card-create`,
        option,
        { header: { Autorization: "Bearer " + token } }
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  async function cardVerify(option) {
    try {
      let response = await axios.post(
        `https://sinfxona.uz/api/api/v1/applications/card-verify`,
        option,
        { header: { Autorization: "Bearer " + token } }
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  return {
    state,
    logIn,
    check,
    logOut,
    register,
    cardCreate,
    cardVerify,
  };
});
