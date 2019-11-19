<template>
  <div>
    <h2>ชื่อ-สกุล: {{ $store.getters.fullName }}</h2>
    <h2>ตำแหน่ง: {{ $store.getters.position }}</h2>
  </div>
</template>
<script>
export default {}
</script>
