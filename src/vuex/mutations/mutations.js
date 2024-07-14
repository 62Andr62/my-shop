export default {
  SET_PRODUCT: (state, product) => {
    if (state.cart.some(el => el.id === product.id)) {
      const qty = state.cart.find(el => el.id === product.id)
      qty.quantity++
    } else {
      state.cart.push(product)
      product.quantity = 1
    }
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  REMOVE_FROM_CART: (state, cardId) => {
    const delEl = state.cart.find(el => el.id === cardId.id)
    delEl.quantity = 0
    state.cart = state.cart.filter(el => el.id !== cardId.id)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  CLOSE_WINDOW_CART: (state) => {
    state.closeCart = false
  },
  OPEN_WINDOW_CART: (state) => {
    state.closeCart = true
  },
  INCREMENT_TO_CART: (state, index) => {
    state.cart[index].quantity += 1
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  DECREMENT_TO_CART: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--
    } else {
      state.cart[index].quantity = 1
    }
  },
  SHOW_TO_ORDER: (state) => {
    state.showOrder = true
  }
}
