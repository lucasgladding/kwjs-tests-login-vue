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
    wrapper.findComponent(Login).findComponent({ ref: 'username-field' }).setValue(data.username);
    wrapper.findComponent(Login).findComponent({ ref: 'password-field' }).setValue(data.password);
    wrapper.findComponent(Login).findComponent({ ref: 'login-button' }).trigger('click');
    expect(authentication.authenticate).toHaveBeenCalledWith(data.username, data.password);
  });
});
