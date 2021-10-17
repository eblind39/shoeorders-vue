/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./init/bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
// Apollo-Vue
	import VueApollo from 'vue-apollo';
  import { ApolloClient } from 'apollo-client';
  import { createHttpLink, Observable } from 'apollo-link-http';
  import { setContext } from 'apollo-link-context';
	import { InMemoryCache } from 'apollo-cache-inmemory';
// Apollo-Vue
// Font-Awesome
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faSpinner } from '@fortawesome/free-solid-svg-icons';
	import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { dom } from '@fortawesome/fontawesome-svg-core'
//Font-Awesome
import LiquorTree from 'liquor-tree';
import responsive from 'vue-responsive';
import BootstrapVue from 'bootstrap-vue';
import router from './router/index';
import store from "./vuex/store";
import App from './App.vue';
import vuetify from './src/plugins/vuetify'; // path to vuetify export
import VueSimpleAlert from "vue-simple-alert";

dom.watch()
library.add(fas);
library.add(faUserSecret);
library.add(faSpinner);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('access_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
      accept: 'application/json',
    }
  }
});

Vue.use(VueRouter);
Vue.use(VueApollo);
Vue.use(BootstrapVue);
Vue.use(responsive);
Vue.use(LiquorTree);
Vue.use(VueSimpleAlert, { reverseButtons: true });

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here.
  // uri: 'http://40.86.88.197:80/graphql',
  uri: 'http://localhost:3000/graphql',
})

// Cache implementation
const cache = new InMemoryCache()
// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

var globapp = new Vue({
    router,
    store,
    apolloProvider,
    vuetify,
    render: h => h(App)
  }).$mount("#app");

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);
