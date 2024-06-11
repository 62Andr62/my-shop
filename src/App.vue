<template>
  <div id="app"> 
    <router-view>
    </router-view>
    <V_header></V_header>
    <V_footer></V_footer>
    <V_cart
        v-if="CART_CLOSE"     
        :cart_data="CART"
        ></V_cart>
  </div>
  
</template>
<script>
import V_header from './components/verstka/V_header'
import V_footer from './components/verstka/V_footer'
import V_cart from './components/shopCart/V_cart.vue'
import { mapGetters} from 'vuex';
/*Изменить пагинацию
  изменить хедер*/

export default {
  components: {
    V_cart,
    V_header,
    V_footer
  },
  data: function() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'CART',
      'CART_CLOSE'
    ]),
  },
  methods: {
  }
}
</script>

<style>

@import url('../styles.css');

</style>
