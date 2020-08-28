import Vue from 'vue';
import Router from 'vue-router';
const fb = require('./firebaseConfig.js');
const db = fb.default.db;
import Home from './views/Home.vue';
import About from './views/About.vue';
import Site from './views/Site.vue';
import Price from './views/Price.vue';
import PriceBuild from './views/PriceBuild.vue';
import Selfie from './views/Selfie.vue';



Vue.use(Router);

let router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/site",
      name: "site",
      component: Site
    },
    {
      path: "/price",
      name: "price",
      component: Price
    },
    {
      path: "/selfie",
      name: "selfie",
      component: Selfie
    },
    {
      path: "/price-build",
      name: "price-build",
      component: PriceBuild
    },
    {
      path: '*',
      redirect: '/home',
    },
  ]
});



export default router;
