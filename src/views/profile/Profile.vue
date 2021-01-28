<template>
  <div id="profile">
    <!-- <h2>{{ fn() }}</h2> -->
  </div>
</template>

<script>
export default {
  name: 'Profile',
  setup() {
    console.log('1 :>> ', 1)
  },
  data() {
    return {}
  },
  created() {
    console.log('2 :>> ', 2)
  },
  methods: {
    fn() {
      return 123
    }
  }
}
</script>

<style lang="scss" scoped>
#profile {
  min-height: 100vh;
  width: 100vw;
}
</style>
