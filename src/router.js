import { createRouter, createWebHistory } from 'vue-router';

import AccueilComp from './components/AccueilComp.vue';
import ItemsComp from './components/ItemsComp.vue';
import cartComp from './components/cartComp.vue';
import serviceComp from './components/serviceComp.vue';
import avisComp from './components/avisComp.vue';


const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: AccueilComp
  },
{
  path: '/items',
  name: 'Items',
  component: ItemsComp
},
{
  path: '/cartComp',
  name: 'cartComp',
  component: cartComp
},
{
path: '/serviceComp',
name: 'serviceComp',
component: serviceComp
},
{
  path:"/avisComp",
  name:'avicComp',
  component:avisComp
}
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export default router;
