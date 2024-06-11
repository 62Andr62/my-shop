<template>
    <div>
      <div
      class="cart_wrapper" >
      </div>
        <div class="cart_window"> 
          <div class="headerCart">
            <h3>Корзина</h3>
            <button 
            class="btnCloseCart"
            @click="CLOSE_WINDOW_CART"
            >Close</button>
          </div>
          <p 
          class="empty_cart"
          v-if="cart_data.length < 1">Корзина пуста..</p>
          <V_cart_item
          v-for="(item, index) in cart_data"
          :key="item.id"
          :v_element="item"
          @closeItemCart="closeItemCart(index)"
          >
          </V_cart_item>
          <div class="footerCart">
            <b>Подытог:</b>
            <div class="total">
              <b> {{ totalPrice }} ₽</b>
            </div>
          </div>
            <button 
            class="placing_an_order"
            :disabled="cart_data.length < 1"
            :class="{'disabledBtn' : cart_data.length < 1}">
              Оформление заказа
            </button>
        </div>
    </div>
  </template>
  
  <script>
  import V_cart_item from './V_cart_item.vue'
  import { mapActions, mapMutations, mapGetters } from 'vuex'
  export default {
    name: 'v-cart',
    components: {
      V_cart_item,
    },
    data: function () {
    return {
    }
  },
  props: {
    cart_data: {
      type: Array,
      required: true
    },
  },
  methods: {
    closeItemCart(index) {
      this.DELETE_FROM_CART(index)
    },
    ...mapMutations([
      'CLOSE_WINDOW_CART',
      'OPEN_WINDOW_CART'
    ]),
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
  },
  computed: {
    ...mapGetters([
      'CART_CLOSE'
    ]),
    totalPrice() {
      let result = []
      console.log(this.cart_data)
      for ( let item of this.cart_data) {
        result.push(item.price*item.quantity)
      }
        result = result.reduce((sum, unit) => {
          return sum + unit;
        })
        return result;
      }
      },
  }
  </script>
  