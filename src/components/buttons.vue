<template>
  <DxButton type='default' styling-mode='outlined' @click='getTokenBnet'>Get New Bnet Token</DxButton>
  <pre>Bnet token: {{ tokenBnet }}</pre>

  <DxButton type='default' styling-mode='outlined' @click='getTokenWcl'>Get New WCL Token</DxButton>
  <pre>WCL token: {{ tokenWcl }}</pre>
</template>

<script setup>
import DxButton          from 'devextreme-vue/button'
import { computed, ref } from 'vue'
import { useStore }      from 'vuex'

const store = useStore()

const getTokenBnet = () => store.dispatch(`auth/getTokenBnet`)
const getTokenWcl = () => store.dispatch(`auth/getTokenWcl`)

const tokenWcl = computed(() => store.state.auth.tokenWcl)
const tokenBnet = computed(() => store.state.auth.tokenBnet)
</script>
 