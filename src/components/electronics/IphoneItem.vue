<template>
    <div>
      <div class="get_api">
        <IphoneCase
        v-for="product in paginateUsers"
      :key="product.id"
      :product_data="product"
      @addCart="addCart"
      >
    </IphoneCase>
      </div>
      <div class="pagination">
        <div class="page"
        v-for="page in pages"
        :key="page"
        @click="pickPage(page)"
        :class="{'hoverEffect' : page === pageNumber}"
        > {{ page }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import IphoneCase from './IphoneCase'
  import  axios  from 'axios';
  import { mapActions } from 'vuex';
  export default {
    components: {
        IphoneCase
    },
    data() {
      return {
        usersPerPages: 12,
        pageNumber: 1,
        dataFromServer: ''
      }
    },
    computed: {
pages() {
  return Math.ceil(this.dataFromServer.length / 12)
},
paginateUsers() {
  let from = (this.pageNumber - 1) * this.usersPerPages
  let to = from + this.usersPerPages
  return this.dataFromServer.slice(from, to)
}
  },
  methods: {
pickPage(page) {
  this.pageNumber = page
},
get_products_from_api() {
            axios.get('http://localhost:3000/products')
            .then((products) => {
              this.dataFromServer = products.data;
            })
            .catch((error) => {
                console.log(error, 'ошибка')
                return error;
            })
        },
        addCart(data) {
          this.ADD_TO_CART(data)
        },
        ...mapActions([
          'ADD_TO_CART'
        ]) 
  },
  
  created() {
    this.get_products_from_api();
  },
  };
  </script>