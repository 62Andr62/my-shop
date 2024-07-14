<template>
  <div id="app">
    <router-view>
    </router-view>
    <HeaderApp></HeaderApp>
    <FooterApp></FooterApp>
    <MyCart
        v-show="CART_CLOSE"
        :cart_data="CART"
        ></MyCart>
  </div>

</template>
<script>
import HeaderApp from './components/verstka/HeaderApp'
import FooterApp from './components/verstka/FooterApp'
import MyCart from './components/shopCart/MyCart.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    MyCart,
    HeaderApp,
    FooterApp
  },
  data: function () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'CART',
      'CART_CLOSE',
      'SHOW_ORDER'
    ])
  },
  methods: {
  }
}
</script>

<style>

@import url('../styles.css');

</style>
