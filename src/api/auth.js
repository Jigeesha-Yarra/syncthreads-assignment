class AuthAPI {
    static login(username, password) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (username && password) {
            resolve({ success: true, token: 'fake-jwt-token' });
          } else {
            resolve({ success: false, error: 'Invalid credentials' });
          }
        }, 1000);
      });
    }
  }
  
export default AuthAPI;
