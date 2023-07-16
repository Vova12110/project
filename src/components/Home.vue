<template>
  <div class="home">
    <h1 class="home-title">Home page!</h1>
    <!-- Ваш контент для домашней страницы -->
  </div>
</template>

<script>
export default {
  // Логика компонента Home.vue
  mounted() {
    // Код, который будет выполнен после монтирования компонента
    console.log("Компонент Home.vue был смонтирован.");
  },
  methods: {
    // Ваши пользовательские методы для компонента Home.vue
    exampleMethod() {
      console.log("Вызван пользовательский метод exampleMethod() из компонента Home.vue.");
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 20px;
}

.home-title {
  font-size: 24px;
}
</style>
