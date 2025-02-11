const auth = async () => {
  const response = await fetch('/api/auth')
  return response.json()
} 