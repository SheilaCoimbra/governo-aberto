<template>
  <div>
    <loading :loading="loading"></loading>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-5 col-lg-5 text-right" v-if="visualization && visualization.type == 'chart'">
        <label class="visualization_title d-block d-sm-none">{{ visualization.title }}</label>
        <h6 class="visualization_subtitle d-block d-sm-none">{{ city.name + '/' + city.state.initials }}</h6>
        <CardVisualization :city="city" :visualization="visualization" :show-title="false" :show-footer="false"/>

        <label>Compartilhe: </label>

        <btn-share-facebook 
          :url="'https://governoaberto.org' + $route.fullPath" 
          :title="visualization.title + ' - ' + city.name + '/' + city.state.initials" 
          :description="visualization.title" 
          :quote="visualization.title + ' - ' + city.name + '/' + city.state.initials" 
          hashtags="governoaberto"/>

        <btn-share-whatsapp 
          :url="'https://governoaberto.org' + $route.fullPath" 
          :title="visualization.title + ' - ' + city.name + '/' + city.state.initials" 
          :description="visualization.title" />

        <btn-share-linkedin 
          :url="'https://governoaberto.org' + $route.fullPath" 
          :title="visualization.title + ' - ' + city.name + '/' + city.state.initials" 
          :description="visualization.title" />

        <btn-share-telegram 
          :url="'https://governoaberto.org' + $route.fullPath" 
          :title="visualization.title + ' - ' + city.name + '/' + city.state.initials" 
          :description="visualization.title" />
      </div>
      <div class="col-12 col-sm-12 col-md-7 col-lg-7 text-left mt-2" v-if="visualization">
        <label class="visualization_title d-none d-sm-block">{{ visualization.title }}</label>
        <h6 class="visualization_subtitle d-none d-sm-block">{{ city.name + '/' + city.state.initials }}</h6>

        <div v-if="visualization.description">{{ visualization.description }}</div>

        <div class="mt-3">
          <h6 v-if="visualization.source">
            <fa class="fa" icon="file-alt"></fa> 
            Dados Originais: <a target="_blank" :href="visualization.source.link">{{ visualization.source.title }}</a>
          </h6>
          <h6>
            <fa class="fa" icon="table"></fa> 
            Dados brutos: <router-link :to="getDatasetRoute()">{{ visualization.dataset.title }}</router-link>
          </h6>
          <h6 v-if="visualization.period">
            <fa class="fa" icon="clock"></fa>
            Período: {{ visualization.period }}
          </h6>
        </div>

        <hr>

        <div class="mt-3">
          <div class="d-flex justify-content-between align-items-center my-2">
            <h5 style="font-size: 1.15rem;">
              Tabela referente ao gráfico
            </h5>
            <div>
              <btn-download-visualization-csv :alias="$route.params.alias" :city="city.id"></btn-download-visualization-csv>
              <btn-download-visualization-json :alias="$route.params.alias" :city="city.id"></btn-download-visualization-json>
            </div>
          </div>
          <table class="table" v-if="table">
            <thead>
              <tr>
                <th :key="index" v-for="(column, index) in table.data" scope="col"> {{ column.title }} </th>
              </tr>
            </thead>
            <tbody>
              <tr :key="i" v-for="i in getTableRowsNumber()">
                <td :key="index" v-for="(column, index) in table.data">{{ getValue(column.data[i]) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import CardVisualization from '@/components/cards/CardVisualization';
import ApiService from '@/services/ApiService';

export default {
  props: {
    
  },
  data() {
    return {
      visualization: null,
      table: null,
      city: null,
      state: null,
      loading: false
    }
  },
  methods: {
    getValue(value) {
      if(this.visualization.data.type == 'money-pie-chart') {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 });
      }

      return value;
    },
    async loadCityInfo() {
      const cityInfo = await new ApiService().getCityInfo(this.$route.params.state, this.$route.params.city);
      
      this.city = cityInfo.city;
      this.state = cityInfo.state;
    },
    async loadVisualization() {
      this.visualization = null;
      this.visualization = await new ApiService().loadVisualizationByAlias(
        this.$route.params.alias, 
        { city: this.city.id }
      );
    },
    async loadTable() {
      this.table = null;
      this.table = await new ApiService().loadTableByVisualization(
        this.$route.params.alias, 
        { city: this.city.id }
      );
    },
    getDownloadTableRoute(type) {
      return new ApiService().getDownloadTableRoute(this.$route.params.alias, type, this.city.id);
    },
    getTableRowsNumber() {
      const length = this.table.data[0].data.length;

      return [...Array(length).keys()];
    },
    getDatasetRoute() {
      return {
        name: 'Dataset',
        params: {
          state: this.$route.params.state,
          city: this.$route.params.city,
          name: this.visualization.dataset.name
        },
        query: {
          from: this.visualization.alias
        }
      };
    }
  },
  mounted() {
    this.loading = true;

    this.loadCityInfo().then(async () => {
      await this.loadTable();
      await this.loadVisualization();
      this.loading = false;
    });
  },
  watch: {
    $route(){
      this.loadCityInfo().then(() => { 
        this.loadVisualization();
        this.loadTable();
      });
    },
  },
  components: { CardVisualization }
}
</script>

<style scoped lang="scss">
  .visualization_title {
    font-weight: bold;
    line-height: 1.2;
    font-size: 1.25rem;

    @media (min-width: 768px) {  
      font-size: 1.5rem;
    }

    @media (min-width: 1200px) {  
      font-size: 2.0rem;
    }
  }
</style>