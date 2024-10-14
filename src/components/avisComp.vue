<template>
    <div class="testimonials">
      <h2>Ce que disent nos clients</h2>
      <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
        <p>"{{ testimonial.message }}"</p>
        <h4>- {{ testimonial.name }}</h4>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          { id: 1, name: 'Jean Dupont', message: 'Super service, très satisfait de ma commande !' },
          { id: 2, name: 'Marie Martin', message: 'Livraison rapide et produits de qualité.' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .testimonials {
    padding: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .testimonial {
    margin: 20px 0;
    border: 1px black solid;
  }
  </style>
  