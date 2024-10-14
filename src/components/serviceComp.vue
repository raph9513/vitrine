<template>
    <div class="services">
      <div class="service" v-for="service in services" :key="service.id">
        <i :class="service.icon"></i>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          { id: 1, icon: 'fas fa-shipping-fast', title: 'Livraison rapide', description: 'Recevez vos commandes en un temps record.' },
          { id: 2, icon: 'fas fa-headset', title: 'Support 24/7', description: 'Nous sommes à votre disposition à tout moment.' },
          { id: 3, icon: 'fas fa-award', title: 'Qualité garantie', description: 'Nos produits sont sélectionnés avec soin.' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .services {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 50px 0;
  }
  .service {
    text-align: center;
  }
  i {
    font-size: 2rem;
    color: #ff9800;
  }
  </style>
  