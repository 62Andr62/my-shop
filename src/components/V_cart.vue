<template>
    <div 
    v-if="closeCart">
      <div
      class="cart_wrapper" >
      </div>
        <div class="cart_window"> 
          <div class="headerCart">
            <h3>Корзина</h3>
            <button 
            class="btnCloseCart"
            @click="closeCart = !closeCart"
            >Close</button>
          </div>
          <V_cart_item
          v-for="(item, index) in cart_data"
          :key="item.id"
          :v_element="item"
          @closeItemCart="closeItemCart(index)"
          >
          </V_cart_item>
          <div class="footerCart">
            <b>Подытог:</b>
          </div>
            <button class="placing_an_order">
              Оформление заказа
            </button>
        </div>
    </div>
  </template>
  
  <script>
  import V_cart_item from './V_cart_item.vue'
  import { mapActions } from 'vuex'
  export default {
    name: 'v-cart',
    components: {
      V_cart_item,
    },
    data: function () {
    return {
      closeCart: true
    }
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    closeItemCart(index) {
      this.DELETE_FROM_CART(index)
    },
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    
  },
}
  </script>
  