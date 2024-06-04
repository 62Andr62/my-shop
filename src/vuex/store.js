import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store( {
    state: {
        cart: []
    },
    mutations: {
        SET_PRODUCT: (state, product) => {
            state.cart.push(product)
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        }
    },
    actions: {
        ADD_TO_CART({commit}, product) {
            commit('SET_PRODUCT', product)
        },
        DELETE_FROM_CART({commit} , index) {
            commit('REMOVE_FROM_CART', index)
        }
    },
    getters: {
        CART(state) {
            return state.cart;
        },
    }
});

export default store;