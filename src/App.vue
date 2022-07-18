<script>
import UpvoteGroup from './components/UpvoteGroup.vue'

export default {
  components: {
    UpvoteGroup
  },
  computed: {
    getGroups() {
      return this.$store.state.groups
    }
  }
}
</script>

<template>
  <div>
    <h1>Vue 3 JS Technical Project v1</h1>
    <h4>Yuliana Shin</h4>
  </div>
  <UpvoteGroup v-for="group in getGroups" :key="group.id" v-bind="group" />
</template>