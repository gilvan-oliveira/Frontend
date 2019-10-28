<template>
  <q-page padding>
    <q-card>
      <q-toolbar class="text-center">
        <q-toolbar-title>Cadastro de Usuário</q-toolbar-title>
      </q-toolbar>

      <q-separator></q-separator>
      <q-card-section>
        <div class="text-white bg-red">
          <b v-if="errors.length">Por favor, corrija o(s) seguinte(s) erro(s):</b>
          <ul class="text-white bg-red">
            <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
          </ul>
        </div>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col-12">
            <q-input square outlined v-model="model.name" label="Nome*" />
          </div>
        </div>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col">
            <q-input square outlined v-model="model.login" label="Usuário*" />
          </div>
          <div class="col">
            <q-input type="password" square outlined v-model="model.password" label="Senha*" />
          </div>
        </div>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col">
            <b-select square outlined v-model="model.role" :options="selectPerfil" label="Perfil" />
          </div>
          <div class="col">
            <b-select square outlined v-model="model.status" :options="selectStatus" label="Status" />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="negative" label="Cancelar" @click="$router.back()"/>
        <q-btn color="primary" label="Salvar" @click="saveData()"/>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import BSelect from 'src/components/selects/BSelect'
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
    QToolbarTitle,
    BSelect
  },
  // name: 'PageName',
  data () {
    return {
      model: {
        name: '',
        login: '',
        password: '',
        role: '',
        status: ''
      },
      selectPerfil: [
        { label: 'Administrador', value: 1 },
        { label: 'Caixa', value: 2 },
        { label: 'Estoquista', value: 3 }
      ],
      selectStatus: [
        { label: 'Ativo', value: 1 },
        { label: 'Inativo', value: 2 }
      ],
      errors: []
    }
  },
  beforeMount () {
    this.loadItems(this.$route.params)
  },
  methods: {
    saveData () {
      this.errors = []
      if (!this.model.name) {
        this.errors.push('O nome é obrigatório')
      }
      if (!this.model.login) {
        this.errors.push('O usuário é obrigatório')
      }
      if (!this.model.password) {
        this.errors.push('A senha é obrigatório')
      }
      if (!this.model.role) {
        this.errors.push('O perfil é obrigatório')
      }
      if (!this.model.status) {
        this.errors.push('O status é obrigatório')
      }
    },
    loadItems ({ id }) {
      if (id) {
        this.$axios.get(`users/${id}`).then(res => {
          let user = res.data

          this.model.name = user.name
          this.model.login = user.username
          this.model.password = 123456
          this.model.role = user.id
          this.model.status = user.id
        })
      }
    }
  }
}
</script>
