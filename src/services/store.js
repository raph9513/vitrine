// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: []  // Liste des articles dans le panier
  },
  getters: {
    cartTotal: (state) => {
      return state.cartItems.reduce((sum, item) => {
        return sum + parseFloat(item.price);  // Conversion des prix en nombres
      }, 0).toFixed(2);
    },
    cartCount: (state) => {
      return state.cartItems.length;
    }
  },
  mutations: {
    ADD_TO_CART(state, item) {
      state.cartItems.push(item);
    },
    REMOVE_FROM_CART(state, index) {
      state.cartItems.splice(index, 1);
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('ADD_TO_CART', item);
      
    },
    removeFromCart({ commit }, index) {
      commit('REMOVE_FROM_CART', index);
    }
  }
});
