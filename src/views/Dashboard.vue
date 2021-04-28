<template>
  <div>
    <div class="alert alert-info small text-justify alert-dismissible fade show" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <p style="margin-bottom: .1rem;">Esse projeto faz parte do TCC de <a href="https://www.linkedin.com/in/jefferson-cardoso/" target="_blank">Jefferson Cardoso</a>, aluno de Ciência da Computação na <a target="_blank" href="https://www.feevale.br/">Universidade Feevale/RS</a>.</p>
      <p class="mb-0">Explore as cidades que desejar e depois preencha a <a target="_blank" href="https://forms.gle/GCEbWsMw2QiGXiPy8">pesquisa</a> para ajudar no trabalho :)</p>
    </div>
    <CityHeader :city="city" :state="state"/>
    
    <form class="my-3" v-if="city" @submit.prevent="loadVisualizations()">
      <div class="d-flex justify-content-between align-items-center">
        <btn-search @search="titleSearch = $event; loadVisualizations()"></btn-search>
        <select-category v-model="categorySelected"></select-category>
      </div>
    </form>
    <loading :loading="loading"></loading>
    <div class="row row-eq-height">
      <div v-bind:key="visualization.id" v-for="visualization in visualizations" class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-1 mb-3">
        <CardVisualization :city="city" :visualization="visualization" />
      </div>

      <div class="col-12" v-if="!loading && visualizations.length == 0">
        <div class="alert alert-info text-center" role="alert">
          Nenhuma visualização encontrada com esses filtros
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      loading: true
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
      this.$gtag.event('Painel', { event_category: this.categorySelected.label, event_label: this.$route.params.city + "/" + this.$route.params.state })

      this.loading = false;
    }
  },
  async mounted() {
    let api = new ApiService();
    this.categories = await api.getCategories();
    this.loadCityInfo().then(() => this.loadVisualizations());

    if(this.$route.query.category) {
      const categorySelected = this.categories.find(category => category.label == this.$route.query.category);
      if(categorySelected) {
        this.categorySelected = categorySelected;
      }
    }
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
