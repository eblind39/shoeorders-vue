// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify, {VApp, VToolbar, VToolbarTitle, VDivider, VCard, VDataTable, VCardTitle, VSpacer, VTextField} from 'vuetify/lib'
// import {VCard, VDataTable} from 'vuetify';
//import "vuetify/src/stylus/main.sass";

Vue.use(Vuetify, {
    components: {
        VApp,
        VToolbar, 
        VToolbarTitle, 
        VDivider,
        VCard,
        VDataTable,
        VCardTitle, 
        VSpacer, 
        VTextField,
    },
    /* theme option */
});

const opts = {}

export default new Vuetify(opts)