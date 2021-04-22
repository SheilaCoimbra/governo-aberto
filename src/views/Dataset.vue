<template>
  <div>
    <loading :loading="loading"></loading>
    <h1 v-if="dataset">{{ dataset.title }}</h1>
    <h6 v-if="dataset">{{ city.name }} / {{ state.initials }} </h6>
    <!-- <div class="text-left">
    <h6>
      <fa class="fa" icon="file-alt"></fa> Dados Originais: <a target="_blank" href="https://receita.economia.gov.br/orientacao/tributaria/cadastros/cadastro-nacional-de-pessoas-juridicas-cnpj/dados-publicos-cnpj">Receita Federal</a>
    </h6>
    <h6>
      <fa class="fa" icon="file-code"></fa> Código utilizado no tratamento dos dados: <a target="_blank" href="https://github.com/GovernoAberto/dataset-transparencia-repasses">Github</a>
    </h6>
    </div> -->
    <DatasetTable v-if="dataset" :dataset-name="$route.params.name" />
  </div>
</template>

<script>
import DatasetTable from '@/components/tables/DatasetTable';
import ApiService from '@/services/ApiService';

export default {
  mounted() {
    this.loading = true;
    this.loadCityInfo().then(() => { this.loadDataset().then(() => { this.loading = false; }); });
  },
  data() {
    return {
      loading: false,
      state: null,
      city: null,
      dataset: null
    }
  },
  methods: {
    async loadCityInfo() {
      const cityInfo = await new ApiService().getCityInfo(this.$route.params.state, this.$route.params.city);
      
      this.city = cityInfo.city;
      this.state = cityInfo.state;
    },
    async loadDataset() {
      this.dataset = [];
      this.dataset = await new ApiService().loadDataset(
        this.$route.params.name, { city: this.city.id }
      );
    },
  },
  components: {
    DatasetTable
  },
  $route(){
    this.loading = true;
    this.loadCityInfo().then(() => { this.loadDataset().then(() => { this.loading = false; }); });
  },
}
</script>
