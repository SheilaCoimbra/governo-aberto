<template>
  <a :href="url" class="btn btn-success mr-1" style="padding:.25rem .75rem">
    <fa style="font-size:1.5em" class="fa fa-2x" icon="file-csv"></fa>
  </a>
</template>
<script>

export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>