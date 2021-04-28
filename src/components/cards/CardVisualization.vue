<template>
    <div class="card">
        <div v-if="showTitle" class="card-header text-left d-flex justify-content-between align-items-center" style="padding: .35rem .35rem;">
            <label 
              :title="visualization.title"
              class="card-title mb-0 font-weight-bold" 
              style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden; font-size: .90rem">
              {{ visualization.title }}
            </label>
            <router-link class="btn btn-sm text-primary" :to="{ path: getExploreRoute(visualization) }" :title="'Ver detalhes (' + visualization.title + ')'">
              <fa class="fa-2x" icon="search" />
            </router-link>
        </div>
        <div class="card-body">
          <div v-if="visualization.data">
            <Chart :responsive="true" :type="visualization.data.type" :data="visualization.data.result" />
          </div>
          <div class="text-left">
            <span class="badge badge-pill badge-primary mr-1">{{ visualization.category }}</span>
          </div>
          <div v-if="!visualization">
            Carregando...
          </div>
        </div>
        <div v-if="showFooter" class="card-footer text-left" style="padding: .30rem .30rem; min-height: 30px;">
          <div>
            <div :key="index" v-for="(note,index) in visualization.notes" class="small" style="font-size: 75%">
              <span class="font-weight-bold" style="font-size:80%">{{ index + 1 }}</span>
              {{ note }}
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Chart from '@/components/charts/Chart';

export default {
  props: {
    city: {
      type: Object,
      required: true
    },
    visualization: {
      type: Object,
      required: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  mounted() {

  },
  data() {
    return {
      visualizationData: null
    }
  },
  methods: {
    getExploreRoute() {
      return '/cidades/' + 
              this.$route.params.state + '/' + 
              this.$route.params.city + '/visao/' + 
              this.visualization.alias;
    }
  },
  components: {
    Chart
  }
}
</script>

<style scoped>
    .card-body {
        padding: 0.50rem
    }
</style>