<template>
  <div class="home">
    <div class="m-2">
      <h1 class="welcome-title">Bem-vindo(a) ao Governo Aberto</h1>
      <h5 class="welcome-subtitle">Informações sobre a sua cidade</h5>
    </div>

    <div style="max-width: 350px; margin:auto; margin-top: 10px; margin-bottom: 10px; padding-right: 20px;">
      <BrazilMap @selected="currentState = $event.alias" :states="states" :selected-state="currentState" />
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
import ApiService from '@/services/ApiService';

export default {
  name: 'Home',
  data() {
    return {
      currentState: "",
      currentCity: "",
      states: []
    }
  },
  methods: {
    async detectCity() {
      try {
        const result = await new ApiService().detectCity();
        if(result.state && result.city && !this.currentState) {
          this.currentState = result.state.alias;
          this.$nextTick(() => { 
            this.currentCity = result.city.alias;
          });
        }

      } catch (error) {
        console.log("Cannot detect your city");
      }
    },
  },
  created() {
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