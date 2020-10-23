import createPersistedState from 'vuex-persistedstate';
// import SecureStorage from "secure-web-storage";
// import * as CryptoJS from "crypto-js";
import Vuex from 'vuex';
import Vue from 'vue';
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
      key: 'userObj1',
      paths: ["user"],
      storage: window.localStorage
    }),
    createPersistedState({
      key: "userObj2",
      paths: ["user"],
      storage: window.sessionStorage
    })
  ],
  modules: {
    user
  }
});
