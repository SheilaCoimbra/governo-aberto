<script>
import { Doughnut } from 'vue-chartjs'

export default {
  props: ['data'],
  extends: Doughnut,
  mounted () {
    this.renderChart(this.data)
  }
}
</script>

<style>

</style>