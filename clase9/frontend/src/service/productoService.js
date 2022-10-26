import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async getProductos() {
        try {
            console.log(localStorage.getItem('usuario'));
            apiClient.defaults.headers['authorization'] = 
            JSON.parse(localStorage.getItem('usuario')).token
            const datos = await apiClient.get('/productos')
            return datos.data
        } catch(e) {
            // revisar 401 o 404
            console.log(e);
            throw "Error de conexión"
        } 
    },
    async postProductos(producto) {
        try {
            apiClient.defaults.headers['authorization'] = 
            JSON.parse(localStorage.getItem('usuario')).token
            console.log(producto);
            const datos = await apiClient.post('/productos', producto)
            return datos.data
        } catch(e) {
            // revisar 401 o 404
            console.log(e);
            throw "Error de conexión"
        }
        
    },
    async deleteProductos(id) {
        try {
            apiClient.defaults.headers['authorization'] = 
            JSON.parse(localStorage.getItem('usuario')).token
            const datos = await apiClient.delete('/productos'+ id)
            return datos.data
        } catch(e) {
            // revisar 401 o 404
            console.log(e);
            throw "Error de conexión"
        }
        
    }
}