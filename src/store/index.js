import { createStore } from "vuex";

export default createStore({
  state: {
    groups: [
      {
        id: 1,
        upvotes: 3,
        selected: false
      },
      {
        id: 2,
        upvotes: 2,
        selected: false
      },
      {
        id: 3,
        upvotes: 5,
        selected: false
      }
    ]
  }
});