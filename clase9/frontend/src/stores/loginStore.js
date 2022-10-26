import {defineStore} from 'pinia'
import axios from 'axios'

export const loginStore = defineStore('loginStore', {
    state: () => {
        return {
            usuario: {},
            estaLogeado: false
        }
        
    },
    actions: {
        async login(usuario) {
            try{
                const datos = await axios.post('http://localhost:3001/api/login', usuario)
                //console.log(data);
                this.usuario.email = usuario.email
                console.log(this.usuario.email);
                this.estaLogeado = true
                console.log(datos.data);
                localStorage.setItem('usuario', 
                    JSON.stringify({email: usuario.email, token: datos.data}))
            } catch (e) {
                this.usuario = {}
                this.estaLogeado = false
            }
            
        },
        logout() {
            this.estaLogeado = false
            this.usuario.email= ""
            localStorage.removeItem('usuario')
        }
    }
})