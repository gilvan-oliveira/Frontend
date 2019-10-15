<template>
  <q-layout view="LHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          <q-toolbar-title>
            Controle de Estoque
          </q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <df-drawer />
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-page-sticky v-if="$route.meta.add" position="bottom-right" :offset="[18, 18]">
      <q-btn icon="add" round color="primary" @click="goToAdd()"/>
    </q-page-sticky>
  </q-layout>
</template>

<script>
import { dfDrawer } from 'components'
import { QPageSticky, QBtn } from 'quasar'
export default {
  name: 'MyLayout',
  components: {
    QPageSticky,
    QBtn,
    dfDrawer
  },
  data () {
    return {}
  },
  methods: {
    goToAdd () {
      this.$router.push({ name: this.$route.meta.add })
    }
  }
}
</script>
