<script>
import { Bar } from 'vue-chartjs'

export default {
  props: ['data'],
  extends: Bar,
  mounted () {
    this.renderChart(this.data)
  }
}
</script>

<style>

</style>