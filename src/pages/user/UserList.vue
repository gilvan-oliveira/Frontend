<template>
  <q-page padding>
    <table class="q-table">
      <tr class="q-tr">
        <th class="q-th" v-for="(item, i) in table.header" :key="i">{{item}}</th>
      </tr>
      <tr v-for="(item, i) in table.data" :key="i">
        <td class="q-td">{{item.nome}}</td>
        <td>{{item.email}}</td>
        <td>{{item.telefone}}</td>
        <td>{{item.endereco}}</td>
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
        header: ['Nome', 'Usuário', 'Perfil', 'Status', 'Gerenciar'],
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
        name: 'user-edit',
        params: { id }
      })
    },
    loadItems () {
      this.$axios.get('/users').then(res => {
        this.table.data = res.data.map(user => ({
          id: user.id,
          nome: user.name,
          email: user.email,
          telefone: user.phone,
          endereco: `${user.address.city}, ${user.address.street}`
        }))
      })
    }
  }
}
</script>
