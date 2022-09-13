<!-- break de 20 minutos  -->
<template>
  <div>
    <h3>Lista Clientes</h3>
    <li v-for="x in clientes" :key="x.legajo">
       {{ x.legajo }} {{ x.nombre }} 
       <button @click="eliminar(x.legajo)">Eliminar</button>
    </li>
    <Formulario @agregarEmit="agregar($event)"
                @saludarEmit="saludar($event)"
                @agregarAlRevesEmit="agregaralReves($event)"
                />    
  </div>
</template>

<script>
import Formulario from './Formulario.vue'
export default {
    data() {
        return {
            clientes: [{legajo:1,nombre:'Pedro'},
                       {legajo:200,nombre:'Juan'},
                       {legajo:4,nombre:'Maria'} ]
        }
    },
    components: { Formulario },
    methods: {
      eliminar(id) {
        this.clientes = this.clientes.filter(
          cliente => cliente.legajo != id);
      },
      agregar(obj) {
        this.clientes.push({...obj});
      },
      saludar(alguien) {
        console.log("Hola " + alguien.nombre);
      },
      agregaralReves(obj) {
        console.log(obj);
        this.clientes.push({legajo:obj.nombre,nombre:obj.legajo});
      }
    }
}
</script>

<style>

</style>