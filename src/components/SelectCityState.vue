<template>
  <span>
    <h5 class="mb-0" v-if="!edit">
      <span class="city_name">{{ city.name }}/{{ state.initials }}</span>
      <button class="btn btn-light d-sm-none" v-if="!edit" @click="onEdit()"><fa icon="edit"></fa></button>
    </h5>
    <div class="d-flex justify-content-between align-items-center mb-2">
      <div class="d-flex" v-if="edit">
        <StateSelect v-model="currentState" class="form-control mr-2" style="width: 87px"/>
        <CitySelect :disabled="!currentState" v-model="currentCity" :state="currentState" class="form-control mr-2" style="max-width:250px" />
      </div>
      <button class="btn btn-light" v-if="edit" @click="onSearch()"><fa icon="search"></fa></button>
    </div>
  </span>
</template>

<script>

import StateSelect from '@/components/form/StateSelect';
import CitySelect from '@/components/form/CitySelect';

export default {
  props: {
    city : {
      type: Object
    },
    state: {
      type: Object
    }
  },
  data() {
    return {
      edit: false,
      currentState: this.state.alias,
      currentCity: this.city.alias
    }
  },
  methods: {
    onEdit() {
      this.edit = true;
    },
    onSearch() {
      this.edit = false;
      this.$emit('search', {
        state: String(this.currentState),
        city: String(this.currentCity)
      });
    }
  },
  components: {
    StateSelect, CitySelect
  }
}
</script>

<style scoped lang="scss">
  .city_name {
    @media screen and(min-width:800px) {
      font-size: 1.75rem;
    }
  }
</style>