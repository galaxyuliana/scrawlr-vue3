<script>
import Upvote from './Upvote.vue'

export default {
  components: {
    Upvote
  },
  props: ['id', 'upvotes', 'selected'],
  methods: {
    addUpvote() {
      this.$store.commit('addUpvote', this.id);
    }
  },
}
</script>

<template>
  <div class="group-container">
    <div class="upvote-container">
      <Upvote v-for="(upvote, index) in upvotes" :key="index" :selected="selected" :id="id"/>
    </div>
    <div class="button-container">
      <button class="btn btn-add" @click="addUpvote">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.group-container {
  display: grid;
  grid-template-columns: 6fr 1fr;
  margin: 25px;
  column-gap: 20px;
}

.upvote-container {
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.button-container {
  display: flex;
  align-items: center;
}
</style>
