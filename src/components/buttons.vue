<template>
  <div>
    <h4>Bnet token</h4>
    <div>
      <DxButton type='default' styling-mode='outlined' @click='getTokenBnet'>Get New Bnet Token</DxButton>
    </div>
    <code>{{ tokenBnet }}</code>
  </div>

  <div>
    <h4>WCL token</h4>
    <div>
      <DxButton type='default' styling-mode='outlined' @click='getTokenWcl'>Get New WCL Token</DxButton>
    </div>
    <code>{{ tokenWcl }}</code>
  </div>
</template>

<script setup>
import DxButton     from 'devextreme-vue/button'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const getTokenBnet = () => store.dispatch(`auth/getTokenBnet`)
const getTokenWcl = () => store.dispatch(`auth/getTokenWcl`)

const tokenWcl = computed(() => store.state.auth.tokenWcl)
const tokenBnet = computed(() => store.state.auth.tokenBnet)
</script>

<style>
code {
  word-break: break-all;
}
</style>
