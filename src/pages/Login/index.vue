<template>
  <login @login="login" />
</template>

<script lang="ts">
import Vue from 'vue';

import Authentication from '@/services/Authentication';
import Login, { LoginEvent } from '@/pages/Login/Login.vue';

const LoginContainer = Vue.extend({
  components: { Login },
  props: {
    authentication: {
      type: Object,
      default() {
        return new Authentication();
      },
    },
  },
  methods: {
    login(data: LoginEvent) {
      this.authentication.authenticate(data);
    },
  },
});

export default LoginContainer;
</script>
