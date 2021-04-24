<template>
  <model-select 
    :options="citiesSelect" 
    @input="$emit('input', $event)" 
    :value="value" 
    :placeholder="loading ? 'Carregando...' : 'CIDADE'"
  ></model-select>
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
  computed: {
    citiesSelect() {
      return this.cities.map(city => {
        return {
          value: city.alias,
          text: city.name
        };
      });
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