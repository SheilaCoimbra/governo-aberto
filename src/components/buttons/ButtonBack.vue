<template>
  <router-link v-if="showButton && previousPath" class="btn text-light" :to="previousPath">
    <fa icon="arrow-left"></fa>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
      previousPath: null
    }
  },
  mounted() {
    this.loadPreviousRoute()
  },
  methods: {
    loadPreviousRoute() {
      if(this.$route.name == 'Dashboard') {
        this.previousPath = {
          name: 'Home'
        }
        this.showButton = true;

      } else if(this.$route.name == 'Visualization') {
        this.previousPath = {
          name: 'Dashboard',
          params: { state: this.$route.params.state, city: this.$route.params.city }
        }
        this.showButton = true;

      } else if(this.$route.name == 'Dataset') {
        this.previousPath = {
          name: 'Visualization',
          params: { state: this.$route.params.state, city: this.$route.params.city, alias: this.$route.query.from },
        }
        this.showButton = true;

      } else {
        this.previousPath = null;
        this.showButton = false;
      }
    }
  },
  watch: {
    $route() {
      this.loadPreviousRoute()
    },
  }
}
</script>

<style>

</style>