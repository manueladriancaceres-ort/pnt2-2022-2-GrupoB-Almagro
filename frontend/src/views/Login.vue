
<template>
  <main>
    <h2>Login</h2>
    <form @submit.prevent="login">
        Correo <input v-model="usuarioForm.email" type="email" required> <br/>
        Password <input v-model="usuarioForm.password" type="password" required> <br/>
        <button type="submit">Login</button> <br/>
        {{ mensajeError }}
    </form>
  </main>
</template>

<script>
    import {loginStore} from '../stores/loginStore.js'
    import {storeToRefs} from 'pinia'

    export default {
        setup() {
            const store = loginStore()
            const { login } = store
            const { usuario, estaLogeado } = storeToRefs(store)
            return { store, login, usuario, estaLogeado }
        },
        data() {
            return {
                usuarioForm: { email:"",password:"" },
                mensajeError: ""
            }
        },
        methods: {
            async login() {
                await this.login(this.usuarioForm)
                if(this.estaLogeado) {
                    this.$router.push('/sistema')
                } else {
                    this.mensajeError = "Error en credenciales"
                }
            }
        }
    }
</script>

