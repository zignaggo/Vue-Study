import { createRouter, createWebHistory } from "vue-router"
import Sign from "@/views/sign/Sign.vue"
import Home from "@/views/home/Home.vue"
const routes = [
	{ path: "/sign", component: Sign },
	{
		path: "/",
		component: Home,
		meta: {
			requiresAuth: true,
		},
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
const isAuthenticated = false
router.beforeEach((to, _, next) => {
	if (to.meta.requiresAuth) {
		if (!isAuthenticated) {
			console.log("não autenticado")
			return next("/sign")
		}
		next()
	} else {
		console.log("autenticado")
		next()
	}
})
