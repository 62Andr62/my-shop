<template>
<div class="product_data">
    <p class="product_data_name"> {{ product_data.name }} </p>
    <b class="product_data_price"> {{ product_data.price + "₽" }} </b>
    <p class="product_data_avialable"> Наличие товара: {{ product_data.avialable }} </p>
    <p v-if="product_data.avialable > 10">В НАЛИЧИИ</p>
      <p v-else-if="product_data.avialable <= 10 && product_data.avialable > 0">ПОЧТИ закончилось</p>
      <p :class="{'paraNN' : product_data.avialable < 1}" v-else>Все распродано((</p>
    <button   :disabled="product_data.avialable < 1"
              @mouseover="hoverEffect()"
              @mouseout="returnEffect()"
              @click="addToCart"
              :class="{'disabledBtn': product_data.avialable < 1}"
              class="addCart"
              >
              <span v-show="!buttonText">Добавить в корзину</span>
              <span v-show="buttonText" class="icon">🛒</span>
            </button>
</div>
</template>



<script>
export default {
  name: 'IphoneCase',
  components: {
  },
  data: function() {
    return {
      buttonText: false,
    }
  },
  props: {
    product_data: {
      type: Object,
    }
  },
  methods: {
    hoverEffect() {
      this.buttonText = true
    },
    returnEffect() {
      this.buttonText = false
    },
    addToCart() {
      this.$emit('addCart', this.product_data)
    }
  }
}
</script>