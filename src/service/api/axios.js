import axios from "axios";
const http =axios.create({
	baseURL: import.meta.env.VITE_API_ORIGIN,
})

export default http
