import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Home from '../views/Home.vue';
import Counter from '../views/Counter.vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/counter',
		name: 'counter',
		component: Counter,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
