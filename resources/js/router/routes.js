import HTTPNotFoundPage from "../pages/HTTPNotFoundPage.vue";			// 404 NotFound
import HTTPNotAuthorizedPage from "../pages/HTTPNotAuthorizedPage.vue";	// 401 NotAuthorized
const WelcomePage = () => import("../pages/WelcomePage.vue");	// Home

const routes = [
	{ path: "/", component: WelcomePage, name: 'welcome' },
	{ path: "/notauthorized", component: HTTPNotAuthorizedPage, name: 'notauthorized' },
	{ path: "*", component: HTTPNotFoundPage },
];

export default routes;