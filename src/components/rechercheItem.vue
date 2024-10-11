<template>
  <div class="search-container">
    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="Rechercher un produit..." 
    />

    <!-- On affiche les articles uniquement si la recherche est effectuée -->
    <div v-if="searchQuery && filteredItems.length">
      <div v-for="item in filteredItems" :key="item.id" class="item">
        <h3>{{ item.title }}</h3>
        <img :src="'data:image/jpeg;base64,' + item.image" alt="Image" style="max-width: 150px;" />
        <p>{{ item.price }} Euros</p>
      </div>
    </div>

    <!-- Message si aucun article trouvé -->
    <div v-else-if="searchQuery">
      <p>Aucun article trouvé.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'rechercheItem',
  data() {
    return {
      items: [],
      searchQuery: '' // Requête de recherche
    };
  },
  async mounted() {
    this.getItems(); // Charger les items dès le montage
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get('http://localhost:3000/api/items');
        this.items = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des articles', error);
      }
    }
  },
  computed: {
    filteredItems() {
      // Filtre les articles en fonction de la recherche
      return this.items.filter(item =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.search-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item {
  margin-top: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  padding: 10px;
  width: 50%;
  margin-bottom: 20px;
}
</style>
