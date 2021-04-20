<template>
  <component :is="component" :data="data" :responsive="true"></component>
</template>

<script>
import BarChart from '@/components/charts/BarChart';
import LineChart from '@/components/charts/LineChart';
import PieChart from '@/components/charts/PieChart';

export default {
  props: ['data', 'type'],
  computed: {
    component() {
      if(this.type == 'bar-chart') {
        return "BarChart";
      }
      if(this.type == 'line-chart') {
        return "LineChart";
      }
      if(this.type == 'pie-chart') {
        return "PieChart";
      }

      return false;
    }
  },
  components: {
    BarChart, LineChart, PieChart
  }
}
</script>

<style>

</style>