import axios from "axios";
import { defineStore } from "pinia";

const token = process.client ? localStorage.getItem("access_token") : null;



export const useCommentStore = defineStore("comments", () => {
  const state = reactive({
    comments: [],
  });
  async function getAllComments(courseID) {
    try {
      state.comments = await axios.get(
        `https://sinfxona.uz/api/api/v1/comments?course_id=${courseID}`
      );
      console.log(state.comments.data.data);
    } catch (e) {
      console.error(e);
    }
  }

  async function postComment(option) {
    try {
      let response = await axios.post(
        `https://sinfxona.uz/api/api/v1/comments`,
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
    getAllComments,
    postComment
  };
});
