<template>
    <div class="text-left mb-2 p-2" style="border: 1px solid #CCC; min-height: 100px;" v-if="city">
        <div class="d-flex justify-content-between align-items-center">
          <SelectCityState :state="state" :city="city" @search="$router.push('/cidades/' + $event.state + '/' + $event.city)"/>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6 col-md-6 col-sm-6">
              <NumberVisualization :city-id="city.id" :state-alias="state.alias" :city-alias="city.alias" alias="gentilico" />
            </div>
            <div class="col-12 col-lg-6 col-md-6 col-sm-6">
              <NumberVisualization :city-id="city.id" :state-alias="state.alias" :city-alias="city.alias" alias="prefeito" />
            </div>
            <div class="col-12 col-lg-6 col-md-6 col-sm-6">
              <NumberVisualization :city-id="city.id" :state-alias="state.alias" :city-alias="city.alias" alias="populacao" />
            </div>
            <div class="col-12 col-lg-6 col-md-6 col-sm-6">
              <NumberVisualization :city-id="city.id" :state-alias="state.alias" :city-alias="city.alias" alias="area-territorial" />
            </div>
        </div>
    </div>
</template>

<script>
import NumberVisualization from '@/components/cards/NumberVisualization';
import SelectCityState from '@/components/SelectCityState';

export default {
  props: [
    'city', 'state'
  ],
  data() {
    return {
      currentState: "",
      currentCity: ""
    }
  },
  components: {
    NumberVisualization, SelectCityState
  }
}
</script>

<style>

</style>