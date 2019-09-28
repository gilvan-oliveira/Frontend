<template>
  <q-page padding>
    <q-card>
      <q-toolbar class="text-center">
        <q-toolbar-title>Cadastro de Produto</q-toolbar-title>
      </q-toolbar>

      <q-separator></q-separator>
      <q-card-section>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col">
            <q-input square outlined v-model="model.name" label="Nome*" />
          </div>
        </div>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col">
            <q-input square outlined v-model="model.cost" label="Preço de compra*" />
          </div>
          <div class="col">
            <q-input square outlined v-model="model.price" label="Preço de venda*" />
          </div>
          <div class="col">
            <q-input square outlined v-model="profit" readonly label="Lucro" />
          </div>
        </div>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col">
            <q-input square outlined v-model="model.description" label="Descrição" />
          </div>
        </div>
        <div class="row q-pb-md q-col-gutter-md">
          <div class="col-4">
            <q-input square outlined v-model="model.description" label="Quantidade" />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="negative" label="Cancelar"/>
        <q-btn color="primary" label="Salvar"/>
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
