import axios from "axios";

import { defineStore } from "pinia";

export const useCourseStore = defineStore("course", () => {
  const state = reactive({
    courses: [],
    coursesByid:[],
    myCourses:[]
  });

  async function getAllCourses() {
    state.courses = await $fetch(
      `https://sinfxona.uz/api/api/v1/courses`
    ).catch((error) => error.data);

  }
  async function getCourseById(courseId) {
    try {
      state.coursesByid = await axios.get(
        `https://sinfxona.uz/api/api/v1/courses/${courseId}`
      );
    } catch (e) {
      console.error(e);
    }
    console.log(state.coursesByid.data.data);
  }
  



  return {
    state,
    getCourseById,
    getAllCourses,
  };
});
