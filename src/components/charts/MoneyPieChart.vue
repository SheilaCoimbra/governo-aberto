<script>
import { Doughnut } from 'vue-chartjs'

export default {
  props: ['data'],
  extends: Doughnut,
  mounted () {
    this.renderChart(this.data, {
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            const label = data.labels[tooltipItem.index];
            const labelValue = data.datasets[0].data[tooltipItem.index];
            return label + ": " +
              labelValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 });
          }
        }
      }
    });
  }
}
</script>

<style>

</style>