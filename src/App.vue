<template>
  <div id="app">
    <Login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from './pages/Login/index.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Login,
  },
});
</script>
