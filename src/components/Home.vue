<template>
  <div class="menu">
    <router-link :to="'/'">CREAR LISTA</router-link>
    <router-link :to="'/'">MIS LISTAS</router-link>
    <router-link :to="'/'">CONFIGURACIÓN</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return { }
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  min-height: 50vh;
}
.menu a {
  background: var(--dark-blue);
  border: 1px solid var(--darker-blue);
  border-radius: 2px;
  color: #e7edee;
  padding: 0.8em 0;
  text-align: center;
  text-decoration: none;
  width: 60%;
}
</style>