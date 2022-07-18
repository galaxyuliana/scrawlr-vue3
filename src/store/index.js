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
  },
  mutations: {
    addUpvote(state, selectedGroupId) {
      state.groups.find(function(e) {
        return e.id == selectedGroupId;
      }).upvotes++;
    },
    updateState(state, selectedGroupId) {
      var selectedGroup = state.groups.find(function(e) {
        return e.id == selectedGroupId;
      });
      selectedGroup.selected = !selectedGroup.selected;
    }
  }
});