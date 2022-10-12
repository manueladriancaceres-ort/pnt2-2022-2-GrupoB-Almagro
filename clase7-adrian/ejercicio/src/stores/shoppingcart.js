import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingcartstore', {
    state: () => {
      return { shoppingcart: [] }
    },
    actions: {
      purchase(product) {
        this.shoppingcart.push(product);
      },
      emptyCart() {
        this.shoppingcart = [];
      }
    },
})