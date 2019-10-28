<template>
  <q-page padding>
    <table class="q-table">
      <tr class="q-tr">
        <th class="q-th" v-for="(item, i) in table.header" :key="i">{{item}}</th>
      </tr>
      <tr v-for="(item, i) in table.data" :key="i">
        <td class="q-td">{{item.code}}</td>
        <td>{{item.name}}</td>
        <td>{{item.buy}}</td>
        <td>{{item.sale}}</td>
        <td>{{item.stockQuantity}}</td>
        <td>{{item.minimumQuantity}}</td>
        <td class="row">
          <q-btn icon="edit" round color="primary" @click="editItem(item)"/>&nbsp;&nbsp;&nbsp;
          <q-btn icon="remove" round color="negative" @click="removeItem(item)"/>
        </td>
      </tr>
    </table>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      table: {
        header: ['Código', 'Nome', 'Preço de compra', 'Preço de Venda', 'Quantidade estoque', 'Quantidade Mínima', 'Gerenciar'],
        data: []
      }
    }
  },
  beforeMount () {
    this.loadItems()
  },
  methods: {
    removeItem ({ id } = {}) {
      if (id) {
        this.table.data = this.table.data.filter(item => item.id !== id)
      }
    },
    editItem ({ id } = {}) {
      this.$router.push({
        name: 'product-edit',
        params: { id }
      })
    },
    loadItems () {
      this.$axios.get('/users').then(res => {
        this.table.data = res.data.map(user => ({
          id: user.id,
          code: user.id,
          name: user.name,
          buy: '12,50',
          sale: '15,50',
          stockQuantity: '50',
          minimumQuantity: '10'
        }))
      })
    }
  }
}
</script>
