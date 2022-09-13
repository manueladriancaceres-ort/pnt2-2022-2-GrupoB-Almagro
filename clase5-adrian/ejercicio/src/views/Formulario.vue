<template>
  <div>
    <h2>Formulario</h2>
    Codigo <input type="text" v-model="cliente.legajo"> <br/>
    Nombre <input type="text" v-model="cliente.nombre"> <br/>
    <button @click="agregardesdeformulario">Agregar</button> <br/>
    <button @click="saludardesdeformulario">Saludar desde formulario</button>
    <button @click="agregaralrevesdesdeformulario">Agregar al reves</button>
    
  </div>
</template>

<script>
export default {
    emits:['agregarEmit','saludarEmit','agregarAlRevesEmit'],
    data() {
        return {
            cliente : {}
        }
    },
    methods: {
        agregardesdeformulario() {
            this.$emit("agregarEmit",{...this.cliente});
            this.cliente = {};
        },
        saludardesdeformulario() {
            this.$emit("saludarEmit",{...this.cliente});
        },
        agregaralrevesdesdeformulario() {
            this.$emit("agregarAlRevesEmit",{...this.cliente});
        }
    }
}
</script>

<style>

</style>