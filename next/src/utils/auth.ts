import apiClient from './apiClient'

export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/sign_in', { email, password });
    localStorage.setItem('access-token', response.headers['access-token']);
    localStorage.setItem('client', response.headers['client']);
    localStorage.setItem('uid', response.headers['uid']);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await apiClient.delete('/auth/sign_out');
    localStorage.removeItem('access-token');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
  } catch (error) {
    throw error;
  }
}; 