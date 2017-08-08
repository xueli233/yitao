<template lang="html">
    <div class="navList">
      <ul>
        <li v-for="item in navList">{{ item.cat_name }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  computed: {
    navList () {
      console.log(this.$store)
      return this.$store.state.navList
    }
  },
  created () {
    this.$store.dispatch('getNavData')
  }
}
</script>
