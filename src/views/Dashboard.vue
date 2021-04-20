<template>
  <div>
    <CityHeader :city="city" :state="state"/>
    
    <form class="mb-2" v-if="city" @submit.prevent="loadVisualizations()">
      <div class="d-flex justify-content-between align-items-center">
        <btn-search @search="titleSearch = $event; loadVisualizations()"></btn-search>
        <select-category @selected="categorySelected = $event"></select-category>
      </div>
    </form>
    <loading :loading="loading"></loading>
    <div class="row row-eq-height">
      <div v-bind:key="visualization.id" v-for="visualization in visualizations" class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-1 mb-3">
        <CardVisualization :city="city" :visualization="visualization" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import BarChart from '@/components/charts/BarChart';
import CardVisualization from '@/components/cards/CardVisualization';
import CityHeader from '@/components/CityHeader';
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      categorySelected: "",
      titleSearch: "",
      categories: [],
      visualizations: [],
      city: null,
      state: null,
      loading: false
    }
  },
  methods: {
    async loadCityInfo() {
      const cityInfo = await new ApiService().getCityInfo(this.$route.params.state, this.$route.params.city);
      this.state = cityInfo.state;
      this.city = cityInfo.city;
    },
    async loadVisualizations() {
      this.visualizations = [];
      this.loading = true;

      const filters = {
        state: this.$route.params.state,
        city: this.$route.params.city,
        category: this.categorySelected.label,
        title: this.titleSearch
      };

      if(filters.category == 'Todas categorias') filters.category = "";
      
      this.visualizations = await new ApiService().getVisualizations(filters);

      this.loading = false;
    }
  },
  async mounted() {
    let api = new ApiService();
    this.categories = await api.getCategories();
    this.loadCityInfo().then(() => this.loadVisualizations());
    this.$gtag.event('dashboard', { event_category: 'Municipio', event_label: this.$route.params.state + '/' + this.$route.params.city })
  },
  components: {
    CardVisualization, CityHeader
  },
  watch: {
    $route(){
      this.loadCityInfo().then(() => this.loadVisualizations());
    },
    categorySelected(){
      this.loadVisualizations();
    }
  }
}
</script>
