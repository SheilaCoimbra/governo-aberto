<template>
  <select v-bind="$attrs" @input="$emit('input', $event.target.value)">
    <option v-if="loading">Carregando...</option>
    <option value="">Cidade</option>
    <option v-if="!state">Selecione o estado</option>
    <option 
        :key="city.alias" 
        v-for="city in cities" 
        :value="city.alias"
        :selected="value == city.alias">{{ city.name }}</option>
  </select>
  <!-- <v-select
    :value="getValue()"
    @input="setValue($event)"
    :options="cities"
    :searchable="true"
    :close-on-select="true"
    :show-labels="false"
    label="name"
    placeholder="Cidade"
    track-by="alias"
  ></v-select> -->
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  props: { 
    state: {
      type: String,
      required: true
    },
    value: String
  },
  mounted() {
    this.loadCities(this.state);
  },
  data() {
    return {
      cities: [],
      loading: false,
    }
  },
  methods: {
    async loadCities(state) {
      this.cities = [];
      if(!state) return;
            
      this.loading = true;
      this.cities = await new ApiService().getCities(state);
      this.loading = false;
    },
    getValue() {
      if(!this.value) return;
      return this.cities.find(city => city.alias == this.value);
    },
    setValue(city) {
      this.$emit('input', city.alias)
    }
  },
  watch: {
    state(newState) {
      this.loadCities(newState);
    }
  }
}
</script>

<style>

</style>