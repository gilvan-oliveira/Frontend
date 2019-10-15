<template>
  <q-page padding>
    <table class="q-table">
      <tr class="q-tr">
        <th class="q-th" v-for="(item, i) in table.header" :key="i">{{item}}</th>
      </tr>
      <tr v-for="(item, i) in table.data" :key="i">
        <td class="q-td">{{item.id}}</td>
        <td class="q-td">{{item.title}}</td>
        <td class="q-td">
          <q-btn :color="item.color" round :icon="item.icon"></q-btn>
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
        header: ['Titulo', 'Completo'],
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
      this.$axios.get('/todos').then(res => {
        this.table.data = res.data.map(user => ({
          id: user.id,
          title: user.title,
          icon: user.completed ? 'done' : 'clear',
          color: user.completed ? 'positive' : 'negative'
        }))
      })
    }
  }
}
</script>
