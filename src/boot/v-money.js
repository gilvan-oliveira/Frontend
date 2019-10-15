// import something here
import money from 'v-money'

import Vue from 'vue'
Vue.use(money, {
  decimal: ',',
  thousands: '.',
  prefix: 'R$ ',
  precision: 2,
  masked: false
})
