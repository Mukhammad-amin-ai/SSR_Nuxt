import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", () => {
  const state = reactive({
    login: [],
  });

  async function logIn(number, password) {
    let data = {
      username: number,
      password: password,
    };
    console.log(data);
    try {
      state.login = await fetch("https://sinfxona.uz/api/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        // console.log();
      });
    } catch (e) {
      console.error(e);
    }
    console.log(state.login);
  }
  return {
    state,
    logIn,
  };
});
