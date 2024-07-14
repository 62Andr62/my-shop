export default {
  ADD_TO_CART ({ commit }, product) {
    commit('SET_PRODUCT', product)
  },
  DELETE_FROM_CART ({ commit }, cardId) {
    commit('REMOVE_FROM_CART', cardId)
  },
  INCREMENT_CART ({ commit }, index) {
    commit('INCREMENT_TO_CART', index)
  },
  DECREMENT_CART ({ commit }, index) {
    commit('DECREMENT_TO_CART', index)
  }
}
