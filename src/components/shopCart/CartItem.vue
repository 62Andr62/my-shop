<template>
    <div>
      <div class="v_cart_item">
        <button
        @click="closeItemCart"
        class="btnCloseIteminCart">
        X
      </button>
        <p> {{ cart_data_item.name }} </p>
        <b> {{ cart_data_item.price }} </b>
        <p class="incrDecr">
          <span
          @click="decrement"
          class="counter_btn">
          -
        </span>
          {{ cart_data_item.quantity }}
          <span
          class="counter_btn"
          @click="increment">
          +
        </span>
           </p>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'V_cart_item',
  components: {
  },
  data: function () {
    return {
    }
  },
  props: {
    cart_data_item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    closeItemCart () {
      this.$emit('closeItemCart')
    },
    increment () {
      this.$emit('increment')
    },
    decrement () {
      this.$emit('decrement')
    }
  }
}
</script>
