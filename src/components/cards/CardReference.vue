<template>
  <div class="card p-2 mb-3" style="width: 100%;">
    <div class="row no-gutters">
      <div class="col-md-4 text-center">
        <slot name="img"></slot>
      </div>
      <div class="col-md-8">
        <div class="card-body text-justify">
          <slot name="text"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>