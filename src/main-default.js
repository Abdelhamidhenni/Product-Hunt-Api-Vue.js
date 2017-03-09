// On importe Vue
import Vue from 'vue'

// On importe axios
import axios from 'axios'

// On importe le composant Home
import Home from './components/Home/Home.vue'

// On configure axios
window.token = 'YOUR TOKEN HERE'
axios.defaults.baseURL = 'https://api.producthunt.com/v1/'
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

// On initialise l'application
new Vue({
  el: '#app',
  render: h => h(Home)
})
