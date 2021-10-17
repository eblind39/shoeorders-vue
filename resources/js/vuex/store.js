import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		authAccessToken: localStorage.getItem('access_token') || null,
		// baseURL: 'http://40.86.88.197:80',
		baseURL: 'http://localhost:3000',
		storageFolderUpload: 'upload',
		// vue-cart
		  cartProducts: [],
		  currentProduct: {},
		  showModal: false,
		  showPopupCart: false,
	},
	getters: {
		esLoggedIn(state) {
			return (state.authAccessToken !== null) && (typeof state.authAccessToken != 'undefined');
		},
		getAuthAccessToken(state) {
			return state.authAccessToken;
		},
		getBaseUrl(state) {
			return state.baseURL;
		},
		getFolderUpload(state) {
			return state.storageFolderUpload;
		},
		getNoCacheCode(_state) {
			return Math.random().toString().replace('.','');
		},
		// vue-cart
		getNotebooks: state => state.notebooks,
		getSmartphones: state => state.smartphones,
		getAllProducts: state => state.notebooks.concat(state.smartphones),
		getProductsInCart: state => state.cartProducts,
		getCurrentProduct: state => state.currentProduct,
		getShowModal: state => state.showModal,
		getPopupCart: state => state.showPopupCart,
	},
	mutations: {
		retrieveToken(state, authAccessToken) {
			state.authAccessToken = authAccessToken;
		},
		// vue-cart
		ADD_PRODUCT: (state, product) => {
			state.cartProducts.push(product);
			// agregar a la tabla de carrito en estado: DRAFT

		},
		REMOVE_PRODUCT: (state, index) => {
			state.cartProducts.splice(index, 1);
		},
		CURRENT_PRODUCT: (state, product) => {
			state.currentProduct = product;
		},
		SHOW_MODAL: (state) => {
			state.showModal = !state.showModal;
		},
		SHOW_POPUP_CART: (state) => {
			state.showPopupCart = !state.showPopupCart;
		},
	},
	actions: {
		retrieveToken(context, credentials) {
			return new Promise((resolve, reject) => {
				axios.defaults.headers.common = {
				  'X-Requested-With': 'XMLHttpRequest',
				  'X-CSRF-TOKEN': window.csrf_token
				};
				axios.defaults.baseURL = context.getters.getBaseUrl;
				axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				axios.post('/api/login', credentials)
					.then(res => {
						if (typeof res.data.access_token != 'undefined') {
							const authAccessToken = res.data.access_token;
							localStorage.setItem('access_token', authAccessToken);
							context.commit('retrieveToken', authAccessToken);
						}
						resolve(res);
					})
					.catch(err => { reject(err); })
			});
		},
		authLogOut(context) {	// context={commit, state, getters, dispatch}
			return new Promise((resolve, reject) => {
				axios.defaults.headers.common = {
				  'X-Requested-With': 'XMLHttpRequest',
				  'X-CSRF-TOKEN': window.csrf_token
				};
				axios.defaults.baseURL = context.getters.getBaseUrl;
				axios.defaults.headers.post['Accept'] = 'application/json';
				axios.defaults.headers.post['Authorization'] = `Bearer ${context.state.authAccessToken}`;
				axios.post('/api/logout')
					.then(res => {
						console.log(res.message);
						if (res.message != 'No logged user') {
							localStorage.removeItem('access_token');
							context.commit('retrieveToken', null);
						}
						resolve(res);
					})
					.catch(err => { reject(err); })
			});
		},
		esLoggedInAct(context) {
			return new Promise((resolve, reject) => {
				if (context.getters.esLoggedIn) {
					resolve(true);
				} else {
					reject(false);
				}
			});
		},
		// vue-cart
		addProduct: (context, product) => {
			context.commit('ADD_PRODUCT', product);
		},
		removeProduct: (context, index) => {
			context.commit('REMOVE_PRODUCT', index);
		},
		currentProduct: (context, product) => {
			context.commit('CURRENT_PRODUCT', product);
		},
		showOrHiddenModal: (context) => {
			context.commit('SHOW_MODAL');
		},
		showOrHiddenPopupCart: (context) => {
			context.commit('SHOW_POPUP_CART');
		},
	}
});
