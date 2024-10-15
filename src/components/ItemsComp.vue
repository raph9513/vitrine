<template>
<!-- Message de confirmation -->
    <div v-if="showMessage" class="confirmation-message">
      {{ message }}
    </div>
<h2>Nos articles</h2>
  <div class="container">
    
    

    <div class="cart">
      <div v-if="items.length" class="grid-container">
        <div v-for="item in items" :key="item.id" class="item">
          <h3>{{ item.title }}</h3>
          <img :src="'data:image/jpeg;base64,' + item.image" alt="Image" class="imgstyle"/>
          <p class="descrip">{{ item.description }}</p>
          <p class="price">{{ item.price }}<strong> Euros</strong></p>
          
          <button @click="handleAddToCart(item)">Ajouter au panier</button>
        </div>
      </div>
    
      <div v-else>
        <p>Aucun item disponible.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      items: [],
      message: 'Article ajouté au panier !',
      showMessage: false,
    };
  },
  async mounted() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get('http://localhost:3000/api/items');
        this.items = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des items', error);
      }
    },
    ...mapActions(['addToCart']),
    
    handleAddToCart(item) {
      // Ajouter l'article au panier via Vuex
      this.addToCart(item);

      // Afficher le message de confirmation
      this.message = `${item.title} a été ajouté au panier !`;
      this.showMessage = true;

      // Masquer le message après 3 secondes
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Affiche plusieurs colonnes */
  gap: 20px; /* Espace entre les items */
}

.grid-item {
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.imgstyle {
  overflow: hidden; /* Empêche l'image d'aller au-delà de ses limites */
  width: 200px;
  height: 200px;
  margin-bottom: 15px;
  object-fit: cover;
  transition: transform 0.5s ease; /* Animation de la transformation (zoom) */
}
a:hover {
  scale: 1.5;
}

.imgstyle:hover {
  overflow: hidden;
  transform: scale(1.5); /* Applique un zoom de 1.5x au survol */
  width: 300px;
  height: 300px;
}

.price {
  font-weight: bold;
  color: #333;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
