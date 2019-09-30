<template>
  <q-page padding>
    <q-card>
      <q-toolbar class="text-center">
        <q-toolbar-title>Cadastro de Usuário</q-toolbar-title>
      </q-toolbar>

      <q-separator></q-separator>
      <q-card-section>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col-12">
            <q-input square outlined v-model="model.name" label="Nome*" />
          </div>
          <div class="col-12">
            <q-input square outlined v-model="model.lastname" label="Sobrenome" />
          </div>
        </div>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col">
            <q-input square outlined v-model="model.login" label="Usuário*" />
          </div>
          <div class="col">
            <q-input square outlined v-model="model.password" label="Senha*" />
          </div>
        </div>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col">
            <q-input square outlined v-model="model.role" label="Perfil" />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="negative" label="Cancelar"/>
        <q-btn color="primary" label="Salvar" @click="saveData()"/>
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
        name: ''
      }
    }
  },
  beforeMount () {
    this.loadItems(this.$route.params)
  },
  methods: {
    saveData () {
      console.log('salvar dados, ', this.model)
    },
    loadItems ({ id }) {
      this.$axios.get(`users/${id}`).then(res => {
        let user = res.data

        this.model.name = user.name
        this.model.login = user.username
      })
    }
  }
}
</script>
