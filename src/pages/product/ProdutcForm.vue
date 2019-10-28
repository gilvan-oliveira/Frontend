<template>
  <q-page padding>
    <q-card>
      <q-toolbar class="text-center">
        <q-toolbar-title class="text-primary">{{$route.meta.title}}</q-toolbar-title>
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
          <div class="col">
            <q-input square outlined v-model="model.code" label="Código de Barras*" />
          </div>
          <div class="col">
            <q-input square outlined v-model="model.minimumQuantity" label="Quantidade Mínima" />
          </div>
        </div>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col">
            <q-input square outlined v-model="model.name" label="Nome*" />
          </div>
        </div>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col">
            <q-input square outlined v-model.lazy="model.cost" v-money="model.cost" label="Preço de compra*" />
          </div>
          <div class="col">
            <q-input square outlined v-model="model.price" label="Preço de venda*" />
          </div>
          <div class="col">
            <q-input square outlined v-model="profit" readonly label="Lucro" />
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
        id: '',
        code: '',
        name: '',
        cost: '',
        price: '',
        minimumQuantity: ''
      },
      errors: []
    }
  },

  beforeMount () {
    this.loadItems(this.$route.params)
  },

  methods: {
    loadItems ({ id }) {
      this.$axios.get(`users/${id}`).then(res => {
        let item = res.data

        this.model.id = item.id
        this.model.code = item.id
        this.model.name = item.name
        this.model.cost = 10
        this.model.price = 2000
        this.model.minimumQuantity = 10
      })
    },
    salveItem () {
      this.errors = []
      if (!this.model.name) {
        this.errors.push('Nome é Obrigatório')
      }
      if (!this.model.cot) {
        this.errors.push('Preço de Compra é Obrigatório')
      }
      if (!this.model.price) {
        this.errors.push('Preço de venda é Obrigatório')
      }
      if (!this.model.minimumQuantity) {
        this.errors.push('Quantidade Mínima é Obrigatório')
      }
    }
  },

  computed: {
    profit: {
      get () {
        let ret = 0
        if (this.model.price && this.model.price) {
          ret = parseFloat(this.model.price) - parseFloat(this.model.cost)
        }
        return ret
      }
    }
  }
}
</script>
