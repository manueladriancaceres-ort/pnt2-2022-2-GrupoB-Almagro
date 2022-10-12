<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/system">System</RouterLink> |
        <RouterLink to="/shoppingcart">Shopping Cart</RouterLink> |
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
</style>
