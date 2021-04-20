<template>
  <div class="input-group">
    <input v-model="query" class="form-control py-2 border-right-0 border" type="search" placeholder="Buscar visualizações">
    <div class="input-group-append">
      <div class="input-group-text" style="cursor:pointer;" @click="$emit('search', query)"><fa icon="search"></fa></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    }
  }
}
</script>

<style>

</style>