<template>
    <div>
      Alta de usuarios: <br>
      Nombre:   <input type="text" v-model="usuario.nombre"><br>
      Proyecto: <input type="text"  v-model="usuario.proyecto"><br>
      <button @click="agregar">Agregar usuario</button>
    </div>
  </template>
  
  <script>
  export default {
      data() {
        return{
            usuario : {}
        }
      },
      methods: {
        agregar(){
            this.$emit("agregar", {...this.usuario});
        }
      }
  
  }
  </script>
  
  <style>
  
  </style>
  