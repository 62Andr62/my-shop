<template>
    <div class="product_data" >
        <div class="product_data_card">
               <img class="product_data_image" :src="require('../../../assets/imageMacbook/' + product_data.image)" width="180px" alt="Iphone">
              <p class="product_data_name"> {{ product_data.name }} </p>
              <b class="product_data_price"> {{ product_data.price + " ₽" }} </b>
              <p class="product_data_avialable" v-if="product_data.avialable > 10">В НАЛИЧИИ</p>
              <p class="product_data_almost_end"  v-else-if="product_data.avialable <= 10 && product_data.avialable > 0">ПОЧТИ закончилось</p>
              <p class="product_data_end" :class="{'paraNN' : product_data.avialable < 1}" v-else>Все распродано((</p>
            <button   :disabled="product_data.avialable < 1"
                      @click="addToCart(); OPEN_WINDOW()"
                      :class="{'disabledBtn': product_data.avialable < 1}"
                      class="addCart"
                      >
                      Добавить в корзину
                    </button>
        </div>
    </div>
    </template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'IpadCase',
  components: {
  },
  data: function () {
    return {
    }
  },
  props: {
    product_data: {
      type: Object
    }
  },
  methods: {
    ...mapMutations([
      'OPEN_WINDOW_CART'
    ]),
    OPEN_WINDOW () {
      this.OPEN_WINDOW_CART()
    },
    addToCart () {
      this.$emit('addCart', this.product_data)
    }
  },
  computed: {
    ...mapGetters([
      'CART_CLOSE'
    ])
  }
}
</script>
