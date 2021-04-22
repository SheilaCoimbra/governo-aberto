<template>
  <div id="app">
    <Navbar/>
    <div class="container-fluid mt-2 mb-5">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <a class="btn btn-primary btn-survery">Pesquisa :)</a>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar
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

.btn-survery {
  position: fixed;
  right: 10px;
  bottom: 10px;
}
</style>
