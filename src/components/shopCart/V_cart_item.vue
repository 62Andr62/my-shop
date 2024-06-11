<template>
    <div>
      <div class="v_cart_item">
        <button 
        @click="closeItemCart"
        class="btnCloseIteminCart">
        X
      </button>
        <p> {{ v_element.name }} </p>
        <b> {{ v_element.price }} </b>
        <p> Кол-во: {{ v_element.quantity }} </p>
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
    v_element: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    closeItemCart() {
      this.$emit('closeItemCart', this.v_element)
    }
  },
  mounted() {
    this.$set(this.v_element , 'quantity' , 1)
  }
}
  </script>