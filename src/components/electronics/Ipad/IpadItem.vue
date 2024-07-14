<template>
  <div>
    <select v-model="sortMax" class="selected" @change="sortProducts" >
      <option>Все</option>
      <option value="По возрастанию цены">По возрастанию цены</option>
      <option value="По убыванию цены">По убыванию цены</option>
    </select>
    <div class="get_api">
      <IpadCase
      v-for="product in paginateUsers"
    :key="product.id"
    :product_data="product"
    @addCart="addCart"
    >
  </IpadCase>
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
import IpadCase from './IpadCase.vue'
import IphoneItem from '../Iphone/IphoneItem.vue'
export default {
  extends: IphoneItem,
  components: {
    IpadCase
  },
  methods: {
    getApi () {
      return 'ipad'
    }
  }
}
</script>
