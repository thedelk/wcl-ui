<template>
  <div class="home">
    <buttons />
    <report />
  </div>
</template>

<script setup>
import buttons from '@/components/buttons.vue'
import report  from '@/components/report.vue'
</script>

<style>
.home {
  margin: 0;
  padding: 0;
  border: 3px solid #eceff1;
}
</style>