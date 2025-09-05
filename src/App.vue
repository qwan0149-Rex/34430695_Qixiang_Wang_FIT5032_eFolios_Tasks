<script setup>
// import JSONLab from './components/JSONLab.vue'
import BHeader from './components/BHeader.vue'
// import RegistrationForm from './components/RegistrationForm.vue'
</script>

<template>
  <nav class="bg-white border-bottom">
    <div class="main-container">
      <header>
        <BHeader />
      </header>
    </div>
  </nav>

  <main class="app-shell">
    <div class="container py-4">
      <!-- <LibraryRegistrationForm /> -->
      <!-- <JSONLab /> -->
      <router-view></router-view>
    </div>
  </main>
</template>

<style>
html,
body,
#app {
  min-height: 100%;
}
.app-shell {
  min-height: calc(100vh - 72px);
  background: #ffffff;
}

.nav-pills .nav-link.router-link-active {
  color: #fff;
  background-color: var(--bs-primary);
}

h1,
h2 {
  margin-bottom: 1rem;
}
</style>
