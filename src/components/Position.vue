<template>
  <div>
    <h2>ตำแหน่ง</h2>
    <input type="text" @input="changePosition" />
  </div>
</template>
<script>
export default {
  methods: {
    changePosition: event => {
      this.$store.commit("setPosition", event.tartget.value)
    }
  }
}
</script>
