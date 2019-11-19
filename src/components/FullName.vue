<template lang="html">
  <div>
    <h2>ชื่อ-สกุล</h2>
    <input type="text" @input="changeFullName" />
  </div>
</template>

<script>
export default {
  methods: {
    changeFullName: event => {
      this.$store.commit("setFullName", event.target.value)
    }
  }
}
</script>
