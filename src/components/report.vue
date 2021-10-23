<template>
  <input v-model='character' placeholder='Character name' />
  <dx-button @click='getZones' type='default'>Get zones</dx-button>
  <hr />
  <div>
    <code>
      {{ zones }}
    </code>
  </div>
  <dx-button @click='getClasses' type='default'>Get classes</dx-button>
  <hr />
  <div>
    <code>
      {{ classes }}
    </code>
  </div>
</template>

<script setup>
import { ref }  from 'vue'
import DxButton from 'devextreme-vue/button'
import api      from '@/api/wcl'

const character = ref(``)
const zones = ref({})
const classes = ref({})

const getZones = async () => {
  zones.value = await api.getZones()
}

const getClasses = async () => {
  classes.value = await api.getClasses()
}
</script>
