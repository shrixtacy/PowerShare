export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const url = `${API_URL}${endpoint}`;
    console.log(`Making request to: ${url}`);

    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
    });

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    const data = contentType?.includes('application/json') 
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      throw new Error(typeof data === 'string' ? data : data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API Request failed:', error);
    if (error instanceof Error) {
      throw new Error(`Request failed: ${error.message}`);
    }
    throw new Error('Network error occurred');
  }
};