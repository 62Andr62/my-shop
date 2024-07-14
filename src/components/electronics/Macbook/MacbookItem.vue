<template>
  <div>
    <select v-model="sortMax" class="selected" @change="sortProducts" >
      <option>Все</option>
      <option value="По возрастанию цены">По возрастанию цены</option>
      <option value="По убыванию цены">По убыванию цены</option>
    </select>
    <div class="get_api">
      <MacbookCase
      v-for="product in paginateUsers"
    :key="product.id"
    :product_data="product"
    @addCart="addCart"
    >
      </MacbookCase>
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
import MacbookCase from '@/components/electronics/Macbook/MacbookCase.vue'
import IphoneItem from '@/components/electronics/Iphone/IphoneItem'
export default {
  extends: IphoneItem,
  components: {
    MacbookCase
  },
  methods: {
    getApi () {
      return 'macbook'
    }
  }
}
</script>
