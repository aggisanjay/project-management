
import axios from "axios";


const api=axios.create({
    baseURL:import.meta.env.VITE_BASEURL || 10000,
})

export default api
