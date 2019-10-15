<template>
  <q-drawer
    elevated
    content-class="bg-drawer"
    show-if-above
  >
    <q-scroll-area class="text-secondary" style="height: calc(100%); border-right: 1px solid #ddd">
      <q-list padding>
        <q-item @click="$router.push({name: 'home'})" :active="isHomePage"  clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fa fa-home" ></q-icon>
          </q-item-section>

          <q-item-section>
            Inicio
          </q-item-section>
        </q-item>

        <q-item :to="{name: 'product'}" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fa fa-box-open" ></q-icon>
          </q-item-section>

          <q-item-section>
            Produtos
          </q-item-section>
        </q-item>

        <q-item :to="{name: 'sale-point'}" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fa fa-cash-register" ></q-icon>
          </q-item-section>

          <q-item-section>
            Ponto de venda
          </q-item-section>
        </q-item>

        <q-item :to="{name: 'user'}" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fa fa-user" ></q-icon>
          </q-item-section>

          <q-item-section>
            Usuário
          </q-item-section>
        </q-item>

        <q-item :to="{name: 'role'}" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fa fa-user-tag" ></q-icon>
          </q-item-section>

          <q-item-section>
            Perfil de Usuário
          </q-item-section>
        </q-item>

        <q-item :to="{name: 'balance'}" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fa fa-chart-pie" ></q-icon>
          </q-item-section>

          <q-item-section>
            Balanço
          </q-item-section>
        </q-item>

        <q-item :to="{name: 'setting'}" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="fa fa-cogs" ></q-icon>
          </q-item-section>

          <q-item-section>
            Configuração
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import {
  QScrollArea
} from 'quasar'
export default {
  name: 'dfDrawer',
  components: {
    QScrollArea
  },
  data () {
    return {}
  },
  computed: {
    isHomePage () {
      return this.$route.fullPath === '/'
    }
  }
}
</script>
<style lang="scss">
  .bg-drawer {
    background: lighten($primary, 40%);
  }
</style>
