import axios from "axios";
import { defineStore } from "pinia";

export const useCommentStore = defineStore("comments", () => {
  const state = reactive({
    comments: [],
  });
  async function getAllComments(courseID) {
    try {
      state.comments = await axios.get(
        `https://sinfxona.uz/api/api/v1/comments?course_id=${courseID}`
      );
      console.log( state.comments.data.data);
    } catch (e) {
      console.error(e);
    }
  }
  return {
    state,
    getAllComments,
  };
});
