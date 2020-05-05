import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from 'firebase/app';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDsabTKKuCQBInmJ0kqUCmQUef7U8XXLAY",
    authDomain: "vue-firebase-ef768.firebaseapp.com",
    databaseURL: "https://vue-firebase-ef768.firebaseio.com",
    projectId: "vue-firebase-ef768",
    storageBucket: "vue-firebase-ef768.appspot.com",
    messagingSenderId: "1043068005954",
    appId: "1:1043068005954:web:a099f72774ab362760c7db",
    measurementId: "G-14KXEZ1Z0K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  let app;

  firebase.auth().onAuthStateChanged(user => {
    console.log(user);
    if (!app) {
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount("#app");
    }
  })
  
  // app = new Vue({
  //   router,
  //   store,
  //   render: h => h(App)
  // }).$mount("#app");