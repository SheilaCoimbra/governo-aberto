<template>
  <div v-if="loading" class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .spinner-border {
    width: 5em; 
    height: 5em;
  }
</style>