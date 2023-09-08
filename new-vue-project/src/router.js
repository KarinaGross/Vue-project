import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import BlogPage from './components/BlogPage.vue';
import BlogDetails from './components/BlogDetails.vue';

Vue.use(Router);

const routes = [
    { path: '/', component: HomePage },
    { path: '/blog', component: BlogPage },
    { path: '/blogdetails', component: BlogDetails }
];

export default new Router({
    routes
});
