import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// import * as Cookies from 'js-cookie';
import Cookies from 'js-cookie';
// import SecureStorage from "secure-web-storage";
// import * as CryptoJS from "crypto-js";

import user from './user';

Vue.use(Vuex);

// const SECRET_KEY = "somesecretkey";
// const option = {
//   hash: function hash(key) {
//     key = CryptoJS.SHA256(key, SECRET_KEY);
//     return key;
//   },
//   encrypt: function encrypt(data) {
//     data = CryptoJS.AES.encrypt(data, SECRET_KEY);
//     data = data.toString();
//     return data;
//   },
//   decrypt: function decrypt(data) {
//     data = CryptoJS.AES.decrypt(data, SECRET_KEY);
//     data = data.toString(CryptoJS.enc.Utf8);
//     return data;
//   }
// };

// const ls = new SecureStorage(localStorage, option);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'userLs',
      paths: ['user'],
      storage: window.localStorage
    }),
    createPersistedState({
      key: 'userSs',
      paths: ['user'],
      storage: window.sessionStorage
    }),
    createPersistedState({
      key: 'userCs',
      paths: ['user'],
      storage: {
        getItem: key => Cookies.get(key),
        //new Date(new Date().getTime() + 60 * 1000 * 1) 十秒后失效
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: new Date(new Date().getTime() + 10 * 1000 * 1), secure: false }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ],
  modules: {
    user
  }
});
