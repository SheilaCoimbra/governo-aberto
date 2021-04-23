<template>
  <ShareNetwork
    network="telegram"
    :url="$attrs.url"
    :title="$attrs.title"
    :description="$attrs.description"
    :quote="$attrs.quote"
    :hashtags="$attrs.hashtags"
  >
    <img class="mt-1 mx-1" src="../../assets/icons/telegram.png" width="40" style="border-radius: 10px; "/>
  </ShareNetwork>
</template>

<script>
export default {

}
</script>

<style>

</style>