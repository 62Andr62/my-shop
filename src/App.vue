<template>
  <div id="app"> 
    <V_header></V_header>
    <V_footer></V_footer>
    <V_cart
    v-if="CART.length"
    :cart_data="CART"
    ></V_cart>
    <router-view/>
  </div>
</template>
<script>
/*Изменить пагинацию
  изменить хедер*/
import V_header from './components/verstka/V_header'
import V_footer from './components/verstka/V_footer'
import V_cart from './components/V_cart.vue'
import { mapGetters } from 'vuex';
export default {
  components: {
    V_header,
    V_footer,
    V_cart
  },
  data: function() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
  },
}
</script>

<style>

@import url('../styles.css');

</style>
