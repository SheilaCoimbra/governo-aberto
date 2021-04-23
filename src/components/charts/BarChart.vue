<script>
import { Bar } from 'vue-chartjs'

export default {
  props: ['data'],
  extends: Bar,
  mounted () {
    this.renderChart(this.data, {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    })
  }
}
</script>

<style>

</style>