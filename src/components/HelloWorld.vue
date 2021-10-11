<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>

  <DxButton type='default' styling-mode='outlined' @click='onClickButton'>Click me</DxButton>
</template>

<script setup>
import { ref }  from 'vue'
import DxButton from 'devextreme-vue/button'
import notify   from 'devextreme/ui/notify'

defineProps({
  msg: String
})

const onClickButton = () => notify(`The birds work for the bourgeoisie.`)

const count = ref(0)
</script>
 