<template>
    <select v-bind="$attrs" @input="$emit('input', $event.target.value)">
        <option value="">UF</option>
        <option 
            :key="state.alias" 
            v-for="state in states" 
            :value="state.alias"
            :selected="value == state.alias"
        >{{ state.initials }}</option>
    </select>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  props: {
    value: String
  },
  created() {
    this.loadStates();
  },
  data() {
    return {
      states: []
    }
  },
  methods: {
    async loadStates() {
      let api = new ApiService();
      this.states = await api.getStates();
    }
  }
}
</script>

<style>

</style>