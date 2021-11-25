import axios from 'axios'
import { fallbackRestUrl } from './path'

const API_URL = process.env.REST_URL || fallbackRestUrl

const RestClient = async (url, variables = {}) => {
  try {

    const headers = {
      'Content-Type': 'application/json',
    }

    const response = await axios.post(`${API_URL}/${url}`, variables, { headers })
    return response.data

  } catch (err) {
    return {}
  }
}

export default RestClient
