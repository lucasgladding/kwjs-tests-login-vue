import { mount } from '@vue/test-utils';

import Login from '@/pages/Login/Login.vue';

describe('Login', () => {
  it('sends the login event with the form data', () => {
    const data = {
      username: 'lucas',
      password: 'password',
    };
    const wrapper = mount(Login);
    wrapper.findComponent({ ref: 'username-field' }).setValue(data.username);
    wrapper.findComponent({ ref: 'password-field' }).setValue(data.password);
    wrapper.findComponent({ ref: 'login-button' }).trigger('click');
    expect(wrapper.emitted('login')![0][0]).toEqual(data);
  });
});
