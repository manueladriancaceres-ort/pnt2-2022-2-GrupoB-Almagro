<template>
    <main>
      <h2>Sistema</h2>


      Id <input v-model="producto.id" type="text">
      Nombre <input v-model="producto.nombre" type="text">
      <button @click="agregarProducto">Agregar Producto</button>


      {{ productos }}
      <button @click="traerProductos">Traer Productos</button>
      {{ mensajeError }}
    </main>
  </template>
  
  <script>
  import productoService from '../service/productoService.js'


  export default {
    data() {
      return {
        productos: [],
        producto: {},
        mensajeError: ''
      }
    },
    methods: {
      async traerProductos() {
        try {
          this.productos = await productoService.getProductos()
        } catch(e) {
          this.mensajeError = e
        }
      },
      async agregarProducto() {
        try {
          await productoService.postProductos({...this.producto})
          this.productos.push({...this.producto})
        } catch(e) {
          this.mensajeError = e
        }
      }
    }
  }
  </script>