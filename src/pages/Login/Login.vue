<template>
  <div class="login-page">
    <div>
      <input ref="username-field" v-model="username" />
    </div>
    <div>
      <input ref="password-field" type="password" v-model="password" />
    </div>
    <div>
      <button ref="login-button" @click="login">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export interface LoginEvent {
  username: string;
  password: string;
}

const Login = Vue.extend({
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const { username, password } = this;
      this.$emit('login', { username, password });
    },
  },
});

export default Login;
</script>
