<template>
  <ShareNetwork
    network="facebook"
    :url="$attrs.url"
    :title="$attrs.title"
    :description="$attrs.description"
    :quote="$attrs.quote"
    :hashtags="$attrs.hashtags"
  >
    <img class="mt-1 mx-1" src="../../assets/icons/facebook.svg" width="40" alt="Compartilhar no Facebook"/>
  </ShareNetwork>
</template>

<script>
export default {

}
</script>

<style>

</style>