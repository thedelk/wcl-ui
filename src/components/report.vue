<template>
  <input v-model='character' placeholder='Character name' />
</template>

<script setup>
import { ref }   from 'vue'
import DxTextBox from 'devextreme-vue/text-box'

const character = ref(``)
</script>
