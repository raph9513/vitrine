<template>
    <div class="cart">
      <h2>Panier</h2>
      <div v-if="cartItems.length">
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
            {{ item.title }} - {{ item.price }} Euros
            <button @click="removeFromCart(index)">Retirer</button>
          </li>
        </ul>
        <p>Total: {{ cartTotal }} Euros</p>
        <p>Nombres d'articles dans votre panier : {{ cartCount }}</p>
      </div>
      <div v-else>
        <p>Votre panier est vide.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['cartItems']),  // Récupère les articles du panier depuis Vuex
      ...mapGetters(['cartTotal']), // Récupère le total du panier depuis Vuex
      ...mapGetters(['cartCount']),
    },
    methods: {
      ...mapActions(['removeFromCart'])  // Méthode pour retirer un article du panier
    }
  };
  </script>
  
  <style scoped>
  .cart {
    margin-top: 20px;
    border-top: 2px solid #000;
    padding-top: 10px;
  };
  .cart-container {
  padding: 20px;
}

ul {
  list-style-type: none; /* Enlève les puces */
  padding: 0;  /* Enlève le padding par défaut */
}

li {
  margin-bottom: 10px; /* Ajoute un peu d'espace entre chaque article */
}
  </style>
  