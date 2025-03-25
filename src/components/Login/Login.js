import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: '' 
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username === "Syncthreads" && this.state.password === "Syncthreads@2019") {
      this.props.onLogin(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      this.setState({ error: "Invalid username or password" }); 
    }
  };

  render() {
    return (
      <div className="login-container">
        <h2>Welcome Back</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />
          </div>

          {this.state.error && (
            <p className="error-message">{this.state.error}</p>
          )}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;