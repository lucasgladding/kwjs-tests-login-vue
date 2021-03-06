import { mount } from '@vue/test-utils';

import Login from '@/pages/Login/Login.vue';
import LoginContainer from '@/pages/Login/index.vue';

describe('Login container', () => {
  it('submits the authentication request', () => {
    const authentication = {
      authenticate: jest.fn(),
    };
    const data = {
      username: 'lucas',
      password: 'password',
    };
    const wrapper = mount(LoginContainer, {
      propsData: { authentication },
    });
    wrapper.findComponent(Login).vm.$emit('login', data);
    expect(authentication.authenticate).toHaveBeenCalledWith(data);
    expect(wrapper.emitted('login')).toHaveLength(1);
  });
});
