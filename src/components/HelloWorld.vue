<template>
  <div>
    <!-- <div class="changeColor">
      <button @click="selectedImage('ImageSocks') " class="btn-green"></button>
      <button @click="selectedImage('ImageBlueSock') " class="btn-blue"></button>
      <component :is="currentComponent" />
    </div>
            <div 
             v-for="(variant) in variants"
              :key="variant.variantId" 
              class="border-box"
              :style="{backgroundColor:variant.variantColor}"
              @mouseover="updateProduct(variant.variantImage)"
              
              >
     Цвет
            </div>
    <div>
      <button v-if="showButton" @click="test" class="generation">Сгенерировать смс код</button>
    </div> -->
  </div>
</template>

<script>
// import ImageSocks from './ImageSocks.vue';
// import ImageBlueSock from './ImageBlueSock.vue';

// export default {
//   components: {
//     ImageSocks,
//     ImageBlueSock
//   },
//   data: function () {
//     return {
//       showButton: true,
//       code: '',
//       currentComponent: ImageBlueSock,
//       variants: [
//           {
//             variantId: 2234,
//             variantColor: 'green',
//             variantImage: 'ImageSocks',
//           },
//           {
//             variantId: 2235,
//             variantColor: 'blue',
//             variantImage: 'ImageBlueSock' ,
//           }
//         ],
//     }
//   },
//   methods: {
//     test () {
//       this.showButton = false
//       this.test1()
//     },
//     test1 () {
//       const url = 'http://localhost:3000/sms/create'
//       fetch(url)
//         .then(response => response.json())
//         .then(json => {
//           this.code = json
//           this.$router.push({ path: '/sms/create', query: { code: this.code } })
//           alert(this.code)
//         })
//         .catch(error => console.log(error.message))
//     },
//     selectedImage(component) {
//       if (component === 'ImageSocks') {
//         this.currentComponent = ImageSocks;
//       } else if (component === 'ImageBlueSock') {
//         this.currentComponent = ImageBlueSock;
//       }
//     },
//     updateProduct(variantImage) {
//         this.currentComponent = variantImage
//     }
//     },
//   computed: {
//   }
// }

</script>