<template>
    <div>
      <div
      class="cart_wrapper" ref="cart.wrapper">
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
          v-if="cart_data.length < 1">
          <img class="imgCart" src="../../assets/cart.png" width="100px"  alt="Корзина">
          Корзина пуста..</p>
          <CartItem
          v-for="(item, index) in cart_data"
          :key="item.id"
          :cart_data_item="item"
          @closeItemCart="closeItemCart(item)"
          @increment="increment(index)"
          @decrement="decrement(index)"
          >
          </CartItem>
          <div class="footerCart">
            <b>Подытог:</b>
            <div class="total">
              <b> {{ totalPrice }} ₽</b>
            </div>
          </div>
          <router-link to="/placingAnOrder">
            <button
            @click="CLOSE_WINDOW_CART()"
            class="placing_an_order"
            :disabled="cart_data.length < 1"
            :class="{'disabledBtn' : cart_data.length < 1}">
              Оформление заказа
            </button>
          </router-link>
          </div>
    </div>
  </template>
<script>
import CartItem from './CartItem.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'v-cart',
  components: {
    CartItem
  },
  mounted () {
    const vm = this
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['cart.wrapper']) {
        vm.CLOSE_WINDOW_CART()
      }
    })
  },
  data: function () {
    return {
    }
  },
  props: {
    cart_data: {
      type: Array,
      required: true
    }
  },
  methods: {
    closeItemCart (item) {
      this.DELETE_FROM_CART(item)
    },
    ...mapMutations([
      'CLOSE_WINDOW_CART',
      'OPEN_WINDOW_CART',
      'SHOW_TO_ORDER'
    ]),
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART',
      'DECREMENT_CART'
    ]),
    increment (index) {
      this.INCREMENT_CART(index)
    },
    decrement (index) {
      this.DECREMENT_CART(index)
    }
  },
  computed: {
    ...mapGetters([
      'CART_CLOSE',
      'SHOW_ORDER'
    ]),
    totalPrice () {
      return this.cart_data.reduce((startValue, curValue) => {
        return startValue + Math.round((curValue.price * curValue.quantity) * 1000)
      }, 0)
    }
  }
}
</script>
