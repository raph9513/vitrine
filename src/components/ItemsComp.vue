<template>
<!-- Message de confirmation -->
    <div v-if="showMessage" class="confirmation-message">
      {{ message }}
    </div>
<h2>Nos articles</h2>
  <div class="container">
    
    

    <div class="cart">
      <div v-if="items.length">
        <div v-for="item in items" :key="item.id" class="item">
          <h3>{{ item.title }}</h3>
          <img :src="'data:image/jpeg;base64,' + item.image" alt="Image" style="max-width: 200px;" />
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
.item {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
}

.cart {
  display: flex;
  justify-content: center;
}

/* Style du message de confirmation */
.confirmation-message {
  background-color: #dff0d8;
  color: #3c763d;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #d6e9c6;
}
</style>
