<template>
  <div class="container mt-5">
    <appHeader />
    <div class="row">
      <div class="col-md-12">
          <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>

</style>
