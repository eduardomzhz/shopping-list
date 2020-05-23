<template>
  <div class="app">
    <router-view />
    <span class="version">v{{ version }}</span>
  </div>
</template>

<script>
import { version } from '../package.json';

export default {
  name: 'app',
  data () {
    return {
      version
    }
  }
}
</script>

<style>
:root {
  --white: #e5eaee;
  --light-blue: #194969;
  --blue: #003559;
  --dark-blue: #00253e;
  --darker-blue: #001a2c;
  --black: #000a11;
}

body {
  background: var(--blue);
}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding: 2em;
  min-height: 100vh;
}
.version {
  bottom: 0.5em;
  color: var(--white);
  filter: opacity(30%);
  font-size: 0.7em;
  left: 1em;
  position: fixed;
}
</style>
