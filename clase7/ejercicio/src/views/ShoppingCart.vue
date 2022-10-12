<template>
  <main>
    <h2>Shopping Cart</h2>
    <!--{{ $route.params.id }}-->
    {{ shoppingcart }}<br>
    <button v-on:click="emptyCart">Empty Cart</button>
  </main>
</template>

<script>
import { storeToRefs } from 'pinia'
import {useShoppingCartStore} from '../stores/shoppingcart.js'

export default {
    setup() {
        const store = useShoppingCartStore();
        const {shoppingcart} = storeToRefs(store);
        const {emptyCart} = store
        return {store, shoppingcart, emptyCart}
    },

    data() {
        return {
            shoppingcarts: []
        }
    },
    methods: {
        emptyCart() {
            this.emptyCart()
        }
    }
}

</script>