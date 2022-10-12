<template>
  <div>
    <h1>System</h1>
    <li v-for="product in productsOnSale">
      {{ product.id }} | {{ product.name }}
      <button v-on:click="addtocart(product)">Add to cart</button>
    </li>
  </div>
</template>


<script>
import { useShoppingCartStore } from '../stores/shoppingcart.js'

export default {
  setup() {
    const store = useShoppingCartStore();
    const { purchase } = store;
    return { store, purchase }
  },

  data() {
    return {
      //simulo lista obtenida de backend
      productsOnSale: [
        { id: 100, name: 'TV' },
        { id: 101, name: 'Radio' },
        { id: 102, name: 'Mp3' },
        { id: 103, name: 'BlueTooth' },
      ]
    }
  },
  methods: {
    addtocart(product) {
      this.purchase(product);
      this.productsOnSale =
        this.productsOnSale.filter(
          p => p.id != product.id );
    }
  }
}

</script>

<style>

</style>
