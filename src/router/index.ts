import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
//import Home from '../views/Home.vue';
//import Counter from '../views/Counter.vue';
import {defineAsyncComponent} from 'vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: defineAsyncComponent(() => import('../views/Home.vue')),
	},
	{
		path: '/counter',
		name: 'counter',
		component: defineAsyncComponent(() => import('../views/Counter.vue')),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
