import Vue from 'vue'
import axios from 'axios'

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

Vue.prototype.$axios = http
