<template>
  <div class="home">
    <div class="m-2">
      <h1 class="welcome-title">Bem-vindo(a) ao Governo Aberto</h1>
      <h5 class="welcome-subtitle">Informações sobre a sua cidade</h5>
    </div>

    <div style="max-width: 350px; margin:auto; margin-top: 10px; margin-bottom: 10px; padding-right: 20px;">
      <BrazilMap @selected="currentState = $event.alias" :selected-state="currentState" />
    </div>

    <div class="d-flex justify-content-center" style="margin:auto; max-width: 500px;">
      <StateSelect v-model="currentState" class="form-control form-control-lg mr-2" style="width: 87px"/>
      <CitySelect :disabled="!currentState" v-model="currentCity" :state="currentState" style="font-size:1.15rem"/>
    </div>

    <div class="m-1">Clique no estado ou selecione na lista</div>
    
    <div class="mt-3">
      <router-link
        style="min-width: 150px; min-height: 50px;" 
        :class="[!currentState || !currentCity ? 'btn-secondary' : 'btn-success', { 'disabled' : !currentState || !currentCity }]"
        class="btn btn-lg" 
        :to="{ path: '/cidades/' + currentState + '/' + currentCity }">
          {{ currentState && currentCity ? 'Acessar' : 'Selecione' }}
      </router-link>
    </div>
    

  </div>
</template>

<script>

import StateSelect from '@/components/form/StateSelect';
import CitySelect from '@/components/form/CitySelect';
import BrazilMap from '@/components/BrazilMap';
import axios from 'axios';
import ApiService from '@/services/ApiService';

export default {
  name: 'Home',
  data() {
    return {
      currentState: "",
      currentCity: ""
    }
  },
  methods: {
    async detectCity() {
      const instance = axios.create({ baseURL: "https://ipinfo.io/" });
      const response = await instance.get("/json", { params: { token: "c06c6b70576982" } });
      
      const regionDetected = String(response.data.region).toUpperCase();
      const cityDetected = String(response.data.city).toUpperCase();

      const states = await new ApiService().getStates();
      
      const state = states.find(state => state.name.toUpperCase() == regionDetected);
      if(!state) return;

      this.currentState = state.alias;
      const cities = await new ApiService().getCities(state.alias);
      const city = cities.find(city => city.name.toUpperCase() == cityDetected);

      if(!city) return;
      
      this.currentCity = city.alias;
    },
  },
  mounted() {
    this.detectCity();
  },
  components: { StateSelect, CitySelect, BrazilMap },
  watch: {
    currentState() {
      this.currentCity = "";
    }
  }
}
</script>

<style scoped lang="scss">
  .welcome-title {
    font-size: 1.75rem;

    @media screen and (max-width: 480px) {
      font-size: 1.25rem;
    }
  }

  .welcome-subtitle {
    @media screen and (max-width: 480px) {
      font-size: 1.00rem;
    }
  }
</style>