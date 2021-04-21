<template>
  <div>
    <div class="my-2">
      <button class="btn btn-light btn-sm" @click="page--; loadDataset()" :disabled="page == 1">Anterior</button>
      {{ page }}
      <button class="btn btn-light btn-sm" @click="page++; loadDataset()" :disabled="table.length == 0">Próximo</button>
    </div>
    <div v-if="table.length > 0">
      <div class="m-2 text-right">
        <btn-download-dataset-csv :name="$route.params.name" :city="city.id"></btn-download-dataset-csv>
        <btn-download-dataset-json :name="$route.params.name" :city="city.id"></btn-download-dataset-json>
      </div>
    
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th :key="index" v-for="(column, index) in table" scope="col"> {{ column.title }} </th>
            </tr>
          </thead>
          <tbody>
            <tr :key="i" v-for="i in getTableRowsNumber()">
              <td :key="index" v-for="(column, index) in table">{{ column.data[i] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  props: {
    datasetName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      state: null,
      city: null,
      table: [],
      page: 1
    }
  },
  mounted() {
    this.loadCityInfo().then(() => {
      this.loadDataset();
    });
  },
  methods: {
    async loadCityInfo() {
      const cityInfo = await new ApiService().getCityInfo(this.$route.params.state, this.$route.params.city);
      
      this.city = cityInfo.city;
      this.state = cityInfo.state;
    },
    async loadDataset() {
      this.table = [];
      this.table = await new ApiService().loadDatasetTable(
        this.$route.params.name, 
        { city: this.city.id, page: this.page, perPage: 10 }
      );
    },
    getTableRowsNumber() {
      const length = this.table[0].data.length;

      return [...Array(length).keys()];
    },
    getDownloadDatasetRoute(type) {
      return new ApiService().getDownloadDatasetRoute(this.$route.params.name, type, this.city.id);
    }
  },
  watch: {
    $route(){
      this.loadCityInfo().then(() => { this.loadDataset(); });
    },
  },
}
</script>

<style>

</style>