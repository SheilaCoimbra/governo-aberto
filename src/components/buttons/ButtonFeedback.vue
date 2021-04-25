<template>
  <div style="padding-right: 5px;">
    <button 
      :class="{ 'text-success' : liked }" 
      class="btn btn-default"
      @click="saveLike()" 
      :disabled="liked">
        <fa class="fa-2x mt-2" icon="thumbs-up"/>
    </button>
    <!-- <button class="btn btn-default text-warning"><fa class="fa-2x mt-2" icon="lightbulb"/></button> -->
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";

export default {
  props: {
    visualizationAlias: {
      type: String
    },
    city: {
      type: Number
    }
  },
  data() {
    return {
      liked: false
    }
  },
  created() {
    new ApiService().hasLike(this.visualizationAlias).then(hasLike => {
      this.liked = hasLike;
    });
  },
  methods: {
    saveLike() {
      if(this.liked) return;

      new ApiService().saveLike(this.visualizationAlias, this.city);
      this.liked = true;
    },
  }
}
</script>

<style>

</style>