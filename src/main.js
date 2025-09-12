import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

// import DataTable from 'primevue/datatable'
// import Column from 'primevue/column'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

// app.component('DataTable', DataTable)
// app.component('Column', Column)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCLPanEdcgKAJGJerD9Bs8PRWm_oNjdh0U',
  authDomain: 'week7-qixiang-wang.firebaseapp.com',
  projectId: 'week7-qixiang-wang',
  storageBucket: 'week7-qixiang-wang.firebasestorage.app',
  messagingSenderId: '639379896871',
  appId: '1:639379896871:web:2fb5ca10bb9c9634272c02',
}

// Initialize Firebase
initializeApp(firebaseConfig)

app.use(router)
app.mount('#app')
