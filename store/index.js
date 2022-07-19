// export const getters = {
//     isAuthenticated(state) {
//         return state.auth.loggedIn
//     },

//     loggedInUser(state) {
//         return state.auth.loginAdmin
//     }
// }

import Vue from "vue";
import Vuex from "vuex";

import admin from "./admin";

Vue.use(Vuex);

export default () => new Vuex.Store({
    modules: {
        admin: {
            namespaced: true,
            ...admin,
        }
    }
})