<template>
  <div id="app">
    <router-view @login="login"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  methods: {
    login() {
      this.$router.push('welcome');
    },
  },
});
</script>
