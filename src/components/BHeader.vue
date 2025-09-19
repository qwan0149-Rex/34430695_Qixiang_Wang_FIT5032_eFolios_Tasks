<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <header class="d-flex justify-content-between py-3">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link to="/" class="nav-link" active-class="active" aria-current="page"
          >Home (Week 5)</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link" active-class="active">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Firelogin" class="nav-link" active-class="active"
          >Firebase Login</router-link
        >
      </li>
      <li class="nav-item" v-if="!currentUser">
        <RouterLink to="/FireRegister" class="nav-link" active-class="active"
          >Firebase Register</RouterLink
        >
      </li>
    </ul>
    <div class="d-flex align-items-center">
      <span v-if="currentUser" class="me-2 text-muted small">{{ currentUser.email }}</span>
      <button v-if="currentUser" class="btn btn-outline-secondary btn-sm" @click="logout">
        Logout
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const router = useRouter()
const auth = getAuth()
const currentUser = ref(null)

let stopWatch = null
onMounted(() => {
  stopWatch = onAuthStateChanged(auth, (u) => {
    currentUser.value = u
    console.log('header current user:', u)
  })
})
onBeforeUnmount(() => {
  if (stopWatch) stopWatch()
})

const logout = async () => {
  try {
    await signOut(auth)
    router.push('/FireLogin')
  } catch (e) {
    console.error(e)
    alert(e.code)
  }
}
</script>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
