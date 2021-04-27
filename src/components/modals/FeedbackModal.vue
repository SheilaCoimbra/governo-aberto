<template>
  <div class="row m-2">
    <div class="col-12">
      <div class="form-group">
        <label for="feedback_comment">Traga ideias, sugestões ou críticas</label>
        <textarea name="feedback_comment" class="form-control" v-model="comment" rows="5" cols="33"></textarea>
      </div>
      <div class="form-group">
        <label for="feedback_contact">Deixe seu nome e contato (opcional)</label>
        <input name="feedback_contact" type="text" class="form-control" v-model="contact">
      </div>

      <div class="mt-3 text-right">
        <button class="btn btn-default" @click="hide()">Fechar</button>
        <button class="btn btn-primary" @click="saveFeedback()">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>

import ApiService from '@/services/ApiService';

export default {
  name: 'FeedbackModal',
  props: ['visualization', 'city'],
  data() {
    return {
      comment: "",
      contact: ""
    }
  },
  methods: {
    saveFeedback() {
      this.$modal.hide('feedback-modal');
      const service = new ApiService();
      service.saveFeedback(this.visualization, this.city, this.comment, this.contact);
    },
    hide() {
      this.$modal.hide('feedback-modal');
    }
  }
}
</script>