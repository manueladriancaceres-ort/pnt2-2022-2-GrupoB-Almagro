<template>
  <div>
    Alta de autos <br/>
    Marca <input type="text" v-model="auto.marca"> <br/>
    Origen <input type="text" v-model="auto.origen"> <br/>
    <button @click="agregarEnDetalle">Agregar auto</button>
    <button @click="saludarEnDetalle">Saludar en detalle</button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        auto : {}
      }
    },
    methods: {
      agregarEnDetalle() {
        this.$emit("agregarEmit",{...this.auto});
        this.auto = {};
      },
      saludarEnDetalle() {
        console.log("ver");
        this.$emit("saludarEmit");
      }
    }
}
</script>

<style>

</style>