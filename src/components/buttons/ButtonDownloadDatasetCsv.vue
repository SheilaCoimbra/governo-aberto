<template>
  <btn-download-csv :url="url"></btn-download-csv>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    city: {
      type: Number,
      required: true
    }
  },
  computed: {
    url() {
      return new ApiService().getDownloadDatasetRoute(this.name, 'csv', this.city);
    }
  }
}
</script>

<style>

</style>