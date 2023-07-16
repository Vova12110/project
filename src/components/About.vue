<template>
  <div class="about">
    <h1 class="title">About Us</h1>
    <!-- Ваш контент для страницы "О нас" -->
  </div>
</template>

<script>
export default {
  // Логика компонента About.vue
  mounted() {
    // Код, который будет выполнен после монтирования компонента
    console.log("Компонент About.vue был смонтирован.");
  },
  methods: {
    // Ваши пользовательские методы для компонента About.vue
    exampleMethod() {
      console.log("Вызван пользовательский метод exampleMethod() из компонента About.vue.");
    }
  }
}
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: auto;
}

.title {
  text-align: center;
  margin-right: 20px;
  font-size: 24px;
}
</style>