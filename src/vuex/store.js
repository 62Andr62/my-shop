import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store( {
    state: {
        cart: [],
        closeCart: false
    },
    mutations: {
        SET_PRODUCT: (state, product) => {
            if(state.cart.length) {

                let isProduct = false;
                let qty = state.cart.map(function(item) {
                    if (item.id === product.id) {
                        isProduct = true;
                        item.quantity++
                        return qty;
                    }
                })
                if (!isProduct) {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        CLOSE_WINDOW_CART: (state) => {
            state.closeCart = false
        },
        OPEN_WINDOW_CART: (state) => {
            state.closeCart = true
        }
    },
    actions: {
        ADD_TO_CART({commit}, product) {
            commit('SET_PRODUCT', product)
        },
        DELETE_FROM_CART({commit} , index) {
            commit('REMOVE_FROM_CART', index)
        },
    },
    getters: {
        CART(state) {
            return state.cart;
        },
        CART_CLOSE(state) {
            return state.closeCart
        }
    }
});

export default store;