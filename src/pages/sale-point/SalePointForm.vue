<template>
  <q-page padding>
    <q-card class="q-mt-md">
      <q-toolbar class="text-center">
        <q-toolbar-title>Ponto de venda</q-toolbar-title>
      </q-toolbar>

      <q-separator></q-separator>
      <div class="text-white bg-red">
          <b v-if="errors.length">Por favor, corrija o(s) seguinte(s) erro(s):</b>
          <ul class="text-white bg-red">
            <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
          </ul>
        </div>
      <q-card-section>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col-12">
            <q-input square outlined v-model="model.name" label="Nome*" />
          </div>
          <div class="col-12">
            <q-input square outlined v-model="model.description" label="Descrição" />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="negative" label="Cancelar" @click="$router.back()"/>
        <q-btn color="primary" label="Salvar" @click="salveItem()"/>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import {
  QCard,
  QInput,
  QSeparator,
  QCardActions,
  QCardSection,
  QToolbar,
  QToolbarTitle
} from 'quasar'
export default {
  components: {
    QCard,
    QInput,
    QSeparator,
    QCardActions,
    QCardSection,
    QToolbar,
    QToolbarTitle
  },
  // name: 'PageName',
  data () {
    return {
      model: {
        name: '',
        description: ''
      },
      errors: []
    }
  },
  beforeMount () {
    this.loadItems(this.$route.params)
  },
  methods: {
    salveItem () {
      this.errors = []
      if (!this.model.name) {
        this.errors.push('Nome é obrigatório')
      }
    },
    loadItems ({ id }) {
      this.$axios.get(`users/${id}`).then(res => {
        let user = res.data

        this.model.name = user.name
        this.model.description = user.email
      })
    }
  }
}
</script>
