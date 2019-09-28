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
            <q-input square outlined v-model="model.description" label="Descrição" />
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card class="q-mt-md">
      <q-toolbar class="text-center">
        <q-toolbar-title>Permissões</q-toolbar-title>
      </q-toolbar>

      <q-separator></q-separator>
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
  }
}
</script>
