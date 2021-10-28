import axios from 'axios'
import fallbackUrl from './path'

const WP_API_URL = process.env.WP_API_URL || fallbackUrl

const GraphQlClient = async (query, variables = {}) => {
  try {

    const headers = {
      'Content-Type': 'application/json',
    }

    const response = await axios.post(WP_API_URL, { query, variables }, { headers })
    return response.data

  } catch (err) {
    return {}
  }
}

export default GraphQlClient
