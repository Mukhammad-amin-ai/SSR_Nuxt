import axios from "axios";

import { defineStore } from "pinia";

const token = process.client ? localStorage.getItem("access_token") : null;

export const useCourseStore = defineStore("course", () => {
  const state = reactive({
    courses: [],
    coursesByid: [],
    myCourses: [],
    videoById: [],
    successOfvideo: false,
    notSuccess: false,
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
    // console.log(state.coursesByid.data.data);
  }

  async function getVideoByid(courseId) {
    try {
      state.videoById = await axios.get(
        `https://sinfxona.uz/api/api/v1/courses/tizervideo/${courseId}`
      );
      // console.log(state.videoById.status);
      if (state.videoById.status == 200) {
        state.notSuccess = true;
      } else {
        state.successOfvideo = true;
      }
    } catch (e) {
      console.error(e.response.data);
      // if (e.response.data.success === false) {
      //   state.successOfvideo = true;
      // }
    }
  }

  async function myCourse() {
    try {
      state.courses = await axios.get(
        `https://sinfxona.uz/api/api/v1/courses/customer-courses`,
        { headers: { Authorization: "Bearer " + token } }
      );
      // console.log(state.courses);
    } catch (e) {
      console.error(e);
    }
  }

  async function VideoByid(tokenn) {
    try {
      state.videoById = await axios.get(
        `https://sinfxona.uz/api/api/v1/get-lesson/video/155?token=${tokenn}`
      );
      console.log(state.videoById);
    } catch (e) {
      console.error(e);
    }
  }

  return {
    state,
    getCourseById,
    getAllCourses,
    getVideoByid,
    myCourse,
    VideoByid,
  };
});
