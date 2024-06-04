<template>
    <div class="image-bluesock">
      <img :src="require('../assets/sock-blue.jpg')" alt="Image-blue" width="250px">
      <ul>
        <li v-for="detailBlue in detailsBlue" :key="detailBlue"> {{ detailBlue }} </li>
       </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageBlueSock',
    data: function () {
    return {
      detailsBlue: ['80% hlopok', '20% len', '20% cotton']
    }
  }
}
  </script>
  
