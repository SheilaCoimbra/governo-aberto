<script>
import { Line } from 'vue-chartjs'

export default {
  props: ['data'],
  extends: Line,
  mounted () {
    this.renderChart(this.data)
  }
} 
</script>

<style>

</style>