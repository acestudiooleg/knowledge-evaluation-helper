import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Level from '../views/Level.vue';
import Certifications from '../views/Certifications.vue';
import Questions from '../views/Questions.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/level',
    name: 'level',
    component: Level,
  },
  {
    path: '/certifications',
    name: 'certifications',
    component: Certifications,
  },
  {
    path: '/questions',
    name: 'questions',
    component: Questions,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
