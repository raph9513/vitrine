<template>
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/Items">Items</router-link></li>
        <li><router-link to="/cartComp">Panier</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationComp'
  };
  </script>
  
  <style scoped>
  .router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

  nav {
    background-color: #333;
    padding: 1rem;
  }
  
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }
  
  li {
    color: white;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  