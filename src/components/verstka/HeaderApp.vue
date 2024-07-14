<template>
    <div>
        <nav class="header">
            <ul class="headers">
              <li>
                <router-link to="/">
                  <img src="@/assets/logo js.png" width="35px" class="logotaip" alt="logo" title="Домашняя страница">
                </router-link>
              </li>
              <router-link v-for="nav in navigat" :key="nav.id" :to="`/${nav.path}`" class="src_iphone">
                   {{ nav.name }}
              </router-link>
            </ul>
        </nav>
        <div >
          <button
          title="Корзина"
          @click="openModalCart"
          class='v-cart'>🛒</button>
        </div>
    </div>
    </template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      navigat: [
        { id: 1, name: 'Iphone', path: 'Iphone' },
        { id: 2, name: 'Ipad', path: 'ipad' },
        { id: 3, name: 'Macbook', path: 'macbook' },
        { id: 4, name: 'Vision Pro', path: 'visionPro' }
      ]
    }
  },
  props: {
  },
  methods: {
    ...mapMutations([
      'OPEN_WINDOW_CART'
    ]),
    openModalCart () {
      this.OPEN_WINDOW_CART()
    }
  },
  computed: {
    ...mapGetters([
      'CART_CLOSE'
    ])

  }
}
</script>
