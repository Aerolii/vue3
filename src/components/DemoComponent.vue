<template>
  <div ref="demo">
    <p>demo</p>
  </div>
</template>

<script>
export default {
  computed: {
    dw() {
      return this.$refs.demo
    }
  },
  created() {},
  mounted() {}
}
</script>

<style></style>
