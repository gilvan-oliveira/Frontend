import axios from 'axios'

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default {
  create: (route) => ({
    galAll: async () => (await http.get(route)).data
  })
}
