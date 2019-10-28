<template>
  <q-page class="text-center">
    <div class="column q-pa-lg">
      <div class="col">
        <b-select v-model="model" :options="options"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import BSelect from 'src/components/selects/BSelect'
export default {
  components: {
    BSelect
  },
  data () {
    return {
      model: 3,
      options: [
        { label: 'admin', value: 1 },
        { label: 'caixa', value: 2 },
        { label: 'estoquista', value: 3 }
      ]
    }
  }
}
</script>
