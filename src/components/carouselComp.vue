<template>
    <div class="carousel-container">
      <Carousel :perPage="1">
        <Slide v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" class="carousel-image">
        </Slide>
      </Carousel>
    </div>
  </template>
  
  <script>
  import { Carousel, Slide } from 'vue-carousel';
  
  export default {
    components: {
      Carousel,
      Slide
    },
    data() {
      return {
        images: [
          { src: 'image1.jpg', alt: 'Promo 1' },
          { src: 'image2.jpg', alt: 'Promo 2' },
          { src: 'image3.jpg', alt: 'Promo 3' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .carousel-container {
    max-width: 100%;
    overflow: hidden;
  }
  .carousel-image {
    width: 100%;
    height: auto;
  }
  </style>
  