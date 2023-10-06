import { defineStore } from "pinia";

export const useCourseStore = defineStore("course", () => {
  const state = reactive({
    courses: [],
  });

  async function getAllCourses() {
    state.courses = await $fetch(
      `https://sinfxona.uz/api/api/v1/courses`
    ).catch((error) => error.data);
  }
  return {
    state,
    getAllCourses,
  };
});
