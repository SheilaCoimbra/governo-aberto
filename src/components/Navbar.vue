<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <btn-back></btn-back>
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img style="width: 30px; margin-bottom: 5px;" src="../assets/logo-brazil.png" alt="Logo Governo Aberto" />
      Governo Aberto
      <small class="beta">Beta</small>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-if="$route.params.state && $route.params.city">
          <router-link class="nav-link" :to="getFixedDashboardRoute()">Painel <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }">Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Projects' }">Projetos <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }">Sobre <span class="sr-only">(current)</span></router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 d-none d-sm-none d-md-block">
        <div class="d-flex justify-content-end" style="min-width: 300px;">
          <StateSelect v-model="currentState" class="form-control mr-2" style="height: 35px;"/>
          <CitySelect v-model="currentCity" :state="currentState" class="form-control" />
          <div style="padding-top: 4px;">
            <router-link class="text-white ml-2" :to="getRoute()"><fa class="nav-search-icon" icon="search" /></router-link>
          </div>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>

import StateSelect from '@/components/form/StateSelect';
import CitySelect from '@/components/form/CitySelect';

export default {
  data() {
    return {
      currentState: null,
      currentCity: null,
    }
  },
  created() {
    this.setFields()
  },
  methods: {
    setFields() {
      this.currentState = (this.$route.params.state) ? this.$route.params.state : "";
      this.currentCity = (this.$route.params.city) ? this.$route.params.city : "";
    },
    getRoute() {
      if(this.$route.params.state && this.$route.params.city) {
        const newRoute = this.$route;
        newRoute.params.state = this.currentState;
        newRoute.params.city = this.currentCity;
        return newRoute;
      }
      return { path: '/cidades/' + this.currentState + '/' + this.currentCity };
    },
    getFixedDashboardRoute() {
      return { path: '/cidades/' + this.$route.params.state + '/' + this.$route.params.city };
    },
  },
  watch: {
    $route(newRoute){
      this.currentState = (newRoute.params.state) ? newRoute.params.state : "";
      this.currentCity = (newRoute.params.city) ? newRoute.params.city : "";
    }
  },
  components: { StateSelect, CitySelect }
}
</script>

<style scoped lang="scss">
  .navbar {
    @media screen and (min-width: 992px){
      padding: .0rem 1rem;
    }
  }
  .nav-search-icon {
    font-size: 1.5em;
    cursor: pointer;
  }
  .navbar .beta {
    font-size: 0.5em;
  }
</style>