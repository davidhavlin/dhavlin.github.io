<template>
  <div class="navigation-links">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About me</nuxt-link>
    <nuxt-link to="/projects">Projects</nuxt-link>
    <nuxt-link to="/contact">Contact me</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navigation-links {
  display: flex;
  flex-direction: column;
}
</style>
