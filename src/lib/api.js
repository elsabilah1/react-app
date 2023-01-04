import axios from 'axios'

export const getProducts = async () => {
  try {
    const response = await axios.get(
      'https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10'
    )

    return response.data
  } catch (error) {
    return error
  }
}

export const getProduct = async (id) => {
  try {
    const response = await axios.get(
      `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    )

    return response.data
  } catch (error) {
    return error
  }
}
