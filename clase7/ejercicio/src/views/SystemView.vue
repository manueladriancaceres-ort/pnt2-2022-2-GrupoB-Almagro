<template>
  <main>
    <h2>Products for sale</h2>
    <li v-for="product in productsForSale">
      {{ product.id }} | {{ product.name }} &nbsp
      <button v-on:click="addtocart(product)">Add to Cart</button>
    
    </li>
  </main>
</template>


<script>
import {useShoppingCartStore} from '../stores/shoppingcart.js'

  export default {
    setup() {
        const store = useShoppingCartStore();
        const { purchase } = store;
        return {store, purchase}
    },
    
    data() {
      return {
        productsForSale: [
          {id:100,name: 'TV'},
          {id:101,name: 'Radio'},
          {id:102,name: 'Playstation 5'},
          {id:103,name: 'Phone'},
        ]
      }
    },
    methods: {
      addtocart(product) {
        this.purchase(product)
      }
    }
  }


</script>
