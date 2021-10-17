import VueRouter from "vue-router";
import routes from "./routes.js";
import store from "../vuex/store";

// configure router
const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior: (to) => {
		if (to.hash) {
			return {selector: to.hash}
		} else {
			return { x: 0, y: 0 }
		}
	},
	rutasActualizadas: false
});

router.beforeEach((to, from, next) => {
	if (!store.getters.esLoggedIn && to.path !== '/') {
		next('/notauthorized');
	} else {
		next();
	}
});

export default router;