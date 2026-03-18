// services/authService.js

class AuthService {
  constructor() {
    this.API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
    this.TOKEN_KEY = 'token';
    this.USER_KEY = 'user';
  }

  async signup(userData) {
    try {
      const response = await fetch(`${this.API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        this.setSession(data);
      }
      
      return data;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }

  async login(credentials) {
    try {
      const response = await fetch(`${this.API_URL}/auth/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      
      const data = await response.json();
      
      if (data.success) {
        this.setSession(data);
      }
      
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  setSession(authResult) {
    localStorage.setItem(this.TOKEN_KEY, authResult.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(authResult.user));
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUser() {
    const user = localStorage.getItem(this.USER_KEY);
    try {
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  }

  isAuthenticated() {
    const token = this.getToken();
    if (!token) return false;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expired = payload.exp < Date.now() / 1000;
      if (expired) {
        this.logout();
        return false;
      }
      return true;
    } catch {
      return true;
    }
  }

  updateUser(userData) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
  }
}

// Create and export a single instance
const authService = new AuthService();
export default authService;

// services/authService.js
// const authService = {
//   login: async (credentials) => {
//     try {
//       // Your API call here
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Store user data and token
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('user', JSON.stringify(data.user));
        
//         return {
//           success: true,
//           user: data.user,
//           message: 'Login successful!'
//         };
//       } else {
//         return {
//           success: false,
//           message: data.message || 'Login failed'
//         };
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       return {
//         success: false,
//         message: 'Network error. Please try again.'
//       };
//     }
//   },

//   signup: async (userData) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         return {
//           success: true,
//           message: 'Account created successfully! Please login.'
//         };
//       } else {
//         return {
//           success: false,
//           errors: data.errors || { general: data.message }
//         };
//       }
//     } catch (error) {
//       console.error('Signup error:', error);
//       return {
//         success: false,
//         errors: { general: 'Network error. Please try again.' }
//       };
//     }
//   },

//   logout: () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//   },

//   isAuthenticated: () => {
//     const token = localStorage.getItem('token');
//     return !!token;
//   },

//   getUser: () => {
//     const user = localStorage.getItem('user');
//     return user ? JSON.parse(user) : null;
//   }
// };

// export default authService;