<template>
  <div id="app">
    <Navbar/>
    <div class="container-fluid mt-2 mb-5">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <a v-if="$route.name != 'Home'" href="https://forms.gle/GCEbWsMw2QiGXiPy8" target="_blank" class="btn btn-primary btn-survey">Pesquisa do TCC 😄</a>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  methods: {
    openSurvey() {
      this.$gtag.event('Pesquisa');
      window.open("https://forms.gle/GCEbWsMw2QiGXiPy8", "_blank");
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.btn-survey {
  position: fixed;
  right: 10px;
  bottom: 10px;
}
</style>
