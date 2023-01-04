import axios from 'axios'

const _axios = axios.create({ baseURL: process.env.REACT_APP_API_URL })

export const getProducts = async () => {
  try {
    const response = await _axios.get('/products?page=1&limit=10')

    return response.data
  } catch (error) {
    return error
  }
}

export const getProduct = async (id) => {
  try {
    const response = await _axios.get(`/products/${id}`)

    return response.data
  } catch (error) {
    return error
  }
}
