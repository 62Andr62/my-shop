<template>
    <div class="image-sock">
      <img :src="require('../assets/socks.png')" alt="Image" width="250px">
      <ul>
        <li v-for="detail in details" :key="detail">{{ detail }}</li>
       </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageSocks',
    data: function () {
    return {
      details: ['80% cotton', '20% polyester', 'Gender-neutral']
    }
  }
}
  </script>
  