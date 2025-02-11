import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchArticles = async () => {
  try {
    const response = await apiClient.get('/api/v1/articles')
    return response.data
  } catch (error) {
    console.error('Error fetching articles:', error)
    throw error
  }
}
