<template>
    <div>
        <nav class="header">
            <ul class="headers">
              <li class="logo">
                <router-link to="/">
                  <img src="@/assets/icity.png" width="35px" class="logotaip" alt="logo">
                </router-link>
              </li>
              <router-link v-for="nav in navigat" :key="nav.id" :to="`/${nav.path}`" class="src_iphone">
                   {{ nav.name }}
              </router-link>
            </ul>
        </nav>
        <div >
          <button
          @click="openModalCart"
          class='v-cart'>🛒</button>
        </div>
    </div>
    </template>

    <script>
    import { mapMutations , mapGetters } from 'vuex';
/*Изменить пагинацию
  изменить хедер*/

export default {
  data: function() {
    return {
      navigat: [
        { id: 1 , name: 'Iphone', path: 'Iphone'},
        { id: 2 ,name: 'Ipad', path: 'Ipad/IpadPro'},
        { id: 3 ,name: 'Macbook', path: 'Macbook/Pro'},
        { id: 4 ,name: 'Vision Pro', path: 'VisionPro'},
        ]
    }
  },
props: {
},
methods: {
  ...mapMutations([
    'OPEN_WINDOW_CART'
  ]),
  openModalCart() {
    this.OPEN_WINDOW_CART()
  }
},
computed: {
  ...mapGetters([
    'CART_CLOSE'
  ]),

}
}
</script>