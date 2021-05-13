<template>
  <div id="loader" class="inner-loader">
    <div id="loader">
      <img src="/loader.svg" alt="">
    </div>
    <p>Kindly wait while we automatically activate your App</p>
  </div>
</template>
<script>
export default {
  created () {
    setTimeout(() => this.$router.push({ path: '/confirmation' }), 5000)
  }
}
</script>
