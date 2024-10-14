<template>
  <div class="container">
    <div class="hero">
      <div class="hero-content">
        <h1>Bienvenue sur La Vitrine</h1>
        <p>Découvrez nos produits de qualité et nos services exceptionnels.</p>
      </div>
    </div>
    <rechercheItem />

    <div class="carousel-container">
      <button @click="prevItem" class="carousel-button prev">&lt;</button>

      <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="item in visibleItems" :key="item.id">
          <h3>{{ item.title }}</h3>
          <img :src="'data:image/jpeg;base64,' + item.image" alt="Image" style="max-width: 200px;" />
          <p>{{ item.price }} Euros</p>
        </div>
      </div>

      <button @click="nextItem" class="carousel-button next">&gt;</button>
    </div>

    <div class="cta">
      <h2>Prêt à découvrir nos produits ?</h2>
      <button @click="goToProducts">Explorer maintenant</button>
    </div>
  </div>
</template>

<script>
import rechercheItem from './rechercheItem.vue';
import axios from 'axios';

export default {
  components: { rechercheItem },
  name: 'AccueilComp',
  data() {
    return {
      items: [],
      currentIndex: 0 // Index initial
    };
  },
  async mounted() {
    this.getItems(); // Appel API pour récupérer les items
  },
  computed: {
    visibleItems() {
      return this.items; // Afficher un seul item à la fois
    }
  },
  methods: {
    goToProducts() {
      this.$router.push('/Items');
    },
    async getItems() {
      try {
        const response = await axios.get('http://localhost:3000/api/items');
        this.items = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des items', error);
      }
    },
    nextItem() {
      // Si on n'est pas à la fin de la liste, on avance
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
      }
    },
    prevItem() {
      // Si on n'est pas au début de la liste, on recule
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  }
};
</script>

<style>
.hero {
  background-image: url('https://img.freepik.com/photos-premium/vitrine-presentoir-blanc-au-milieu_670147-31362.jpg?size=626&ext=jpg');
  color: white;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%; /* Un seul item à la fois */
  text-align: center;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10; /* Pour s'assurer que les boutons sont au-dessus */
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>
