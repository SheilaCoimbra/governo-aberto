<template>
  <div class="number-visualization" :title="visualization ? getValue() : ''">
    <template v-if="visualization">
      {{ visualization.data.label }}: <b>{{ getValue() }}</b> &nbsp; 
      <router-link v-if="visualization.linkAlias" 
        :to="{ name: 'Visualization', params: { state: stateAlias, city: cityAlias, alias: visualization.linkAlias } }"
      >
        <fa icon="search" />
      </router-link>
    </template>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  props: {
    alias: {
      type: String,
      required: true
    },
    cityId: {
      type: Number
    },
    stateAlias: {
      type: String
    },
    cityAlias: {
      type: String
    },
    params: {
      type: Object
    }
  },
  mounted() {
    this.loadVisualization();
  },
  data() {
    return {
      visualization: null
    }
  },
  methods: {
    getValue() {
      if(this.visualization.data.format == 'money') {
        return this.visualization.data.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
      }

      if(this.visualization.data.format == 'number') {
        return this.visualization.data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }

      if(this.visualization.data.format == 'km2') {
        return (this.visualization.data.value.toString()
          .replace(".", ",")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' km²');
      }

      return this.visualization.value;
    },
    async loadVisualization() {
      this.visualization = null;
      this.visualization = await new ApiService().loadVisualizationByAlias(this.alias, { city: this.cityId });
    }
  },
  watch: {
    cityId(newValue, oldValue) {
      if(newValue != oldValue) {
        this.loadVisualization();
      }
    }
  }
}
</script>

<style>
    .number-visualization:empty:before {
        content: 'Carregando...';
    }

    .number-visualization {
      text-overflow: ellipsis;
      white-space: nowrap; 
      overflow: hidden; 
      font-size: .90rem;
    }
</style>