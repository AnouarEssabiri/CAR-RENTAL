// Singleton pattern for API client
class ApiClient {
  static instance = null;
  
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
  }

  static getInstance() {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
}

// Factory pattern for creating API service instances
class ApiServiceFactory {
  static createBookingService() {
    return new BookingService(ApiClient.getInstance());
  }

  static createAuthService() {
    return new AuthService(ApiClient.getInstance());
  }

  static createCarService() {
    return new CarService(ApiClient.getInstance());
  }
}

// Service classes using the Strategy pattern
class BookingService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async createBooking(bookingData) {
    return this.apiClient.request('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  }

  async getBookings() {
    return this.apiClient.request('/bookings');
  }
}

class AuthService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async login(credentials) {
    return this.apiClient.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData) {
    return this.apiClient.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }
}

class CarService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getAvailableCars(filters) {
    const queryString = new URLSearchParams(filters).toString();
    return this.apiClient.request(`/cars/available?${queryString}`);
  }

  async getCarDetails(carId) {
    return this.apiClient.request(`/cars/${carId}`);
  }
}

export const bookingService = ApiServiceFactory.createBookingService();
export const authService = ApiServiceFactory.createAuthService();
export const carService = ApiServiceFactory.createCarService();
