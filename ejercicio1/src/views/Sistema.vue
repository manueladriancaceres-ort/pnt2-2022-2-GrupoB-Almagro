<template>
    <div>
      <h2>Sistema de usuarios</h2>
      <li v-for="usuario in usuarios">
        {{usuario.numero}} {{usuario.nombre}} {{usuario.proyecto}}
      </li>
      <Detalle @agregar="agregar($event)"/>
    </div>
</template>
  
  <script>
  import Detalle from './Detalle.vue'
  export default {
    components: { Detalle},
    data() {
        return{
            usuarios: []
        }
    },
    methods:{
        agregar(usuario){
            usuario.numero = this.conseguirMayor()+1
            this.usuarios.push(usuario)
        },
        conseguirMayor(){
            let mayor = 0;
            this.usuarios.forEach(u => {
                if (u.numero > mayor) {
                    mayor = u.numero;
                }
            });
            return mayor;
        }
    }
  }
  </script>
  
  <style>
  
  </style>
  