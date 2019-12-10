<template>
  <div id="app">
    <router-view :key="key"/>
  </div>
</template>

<script>
export default {
  computed: {
    key() {
      return Date.now()
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>

