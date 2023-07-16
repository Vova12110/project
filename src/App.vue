<script setup>
import Home from './components/Home.vue'
import About from './components/About.vue'
</script>

<template>
  <div>
    <header>
      <div class="logo">
        <h1 class="home-title">
          Home!
        </h1>
      </div>
      <nav class="nav-links">
        <router-link to="/about">About</router-link>
      </nav>
    </header>

    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.logo, .nav-links {
  margin-right: auto;
  margin-left: auto;
}

.home-title {
  font-size: 24px;
}

.nav-links {
  margin-top: 20px;
}

.nav-links router-link {
  margin: 0 10px;
}
</style>
