<template>
  <div>
    <h2>Sistema</h2>
    <li v-for="auto in autos" :key="auto.marca">
      {{ auto.marca }} {{ auto.origen }}
    </li>
    <Detalle @agregarEmit="agregar($event)"
             @saludarEmit="saludar($event)" />

    <button @click="ordenar">Ordenar por marca</button>
    <br/>
  </div>
</template>

<script>
import Detalle from './Detalle.vue'
export default {
  components: { Detalle },
  data() {
    return {
      autos: [{ marca: "Ford", origen: "EEUU" },
                { marca: "Baic", origen: "China" }]
    }
  },
  methods: {
    saludar() {
      alert('Hola')
    },
    agregar(auto) {
      this.autos.push(auto);
    },
    ordenar() {
      this.autos.sort((a,b)=> a.marca.localeCompare(b.marca));
    }
  }
}
</script>

<style>

</style>