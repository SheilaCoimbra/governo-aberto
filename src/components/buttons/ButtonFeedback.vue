<template>
  <div style="padding-right: 5px;">
    <button 
      :title="liked ? 'Visualização curtida' : 'Curtir visualização'"
      :class="{ 'text-success' : liked }" 
      class="btn btn-default"
      @click="saveLike()" 
      :disabled="liked">
        <fa class="fa-2x mt-2" icon="thumbs-up"/>
    </button>

    <button class="btn btn-default text-warning" title="Enviar sugestões" @click="showFeedbackModal()">
      <fa class="fa-2x mt-2" icon="lightbulb"/>
    </button>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";
import FeedbackModal from '@/components/modals/FeedbackModal';

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
    showFeedbackModal() {
      this.$modal.show(FeedbackModal, {
        visualization: this.visualizationAlias,
        city: this.city
      }, { name: 'feedback-modal', width: '80%', height: 'auto', 'min-width': 320, 'max-width': 740 });
    },
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