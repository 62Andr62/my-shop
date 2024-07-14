<template>
    <div>
      <select v-model="sortMax" class="selected" @change="sortProducts" >
        <option>Все</option>
        <option value="По возрастанию цены">По возрастанию цены</option>
        <option value="По убыванию цены">По убыванию цены</option>
      </select>
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
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  components: {
    IphoneCase
  },
  beforeMount () {
    this.get_products_from_api()
  },
  data: function () {
    return {
      usersPerPages: 12,
      pageNumber: 1,
      dataFromServer: '',
      ALL: 'Все',
      sortMax: 'По возрастанию цены',
      sortMin: 'По убыванию цены'
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.dataFromServer.length / 12)
    },
    paginateUsers () {
      const from = (this.pageNumber - 1) * this.usersPerPages
      const to = from + this.usersPerPages
      return this.dataFromServer.slice(from, to)
    }
  },
  methods: {
    pickPage (page) {
      this.pageNumber = page
    },
    get_products_from_api () {
      axios.get('http://localhost:3000/' + this.getApi())
        .then((products) => {
          this.dataFromServer = products.data.map(el => {
            el.quantity = 0
            return el
          })
        })
        .catch((error) => {
          console.log(error, 'ошибка')
          return error
        })
    },
    getApi () {
      return 'products'
    },
    addCart (data) {
      this.ADD_TO_CART(data)
    },
    ...mapActions([
      'ADD_TO_CART'
    ]),
    sortProducts () {
      console.log(this.paginateUsers)
      if (this.sortMax === 'По возрастанию цены') {
        this.paginateUsers.sort((a, b) => {
          return a.price - b.price
        })
      } else if (this.sortMin === 'По убыванию цены') {
        this.paginateUsers.sort((a, b) => {
          return b.price - a.price
        })
      } else {
        return this.ALL
      }
    }
  }
}
</script>
