import React, { Component } from 'react';
import { HashRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import MapView from './components/MapView/MapView';
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  };

  handleLogin = (status) => {
    this.setState({ isLoggedIn: status });
    localStorage.setItem('isLoggedIn', status);
  };

  render() {
    const { isLoggedIn } = this.state;
    
    return (
      <Router basename="/syncthreads-assignment">
        <Routes>
          <Route
            index
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login onLogin={this.handleLogin} />
              )
            }
          />
          <Route
            path="dashboard"
            element={
              isLoggedIn ? <Dashboard isLoggedIn={isLoggedIn} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="map"
            element={
              isLoggedIn ? <MapView isLoggedIn={isLoggedIn} /> : <Navigate to="/" replace />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    );
  }
}

export default App;