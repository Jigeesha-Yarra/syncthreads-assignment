import React, { Component } from 'react';
import Card from '../Card/Card';
import './Dashboard.css';

class Dashboard extends Component {
  state = {
    cards: [
      { 
        id: 1, 
        title: 'Mumbai HQ', 
        description: 'Corporate Headquarters', 
        icon: '🏢',
        coords: [19.0760, 72.8777]
      },
      { 
        id: 2, 
        title: 'Delhi Office', 
        description: 'Regional Operations', 
        icon: '🏛️',
        coords: [28.7041, 77.1025]
      },
      { 
        id: 3, 
        title: 'Bangalore Lab', 
        description: 'R&D Center', 
        icon: '🔬',
        coords: [12.9716, 77.5946]
      },
    ],
  };

  render() {
    if (!this.props.isLoggedIn) {
      return <div className="auth-error">User not logged in</div>;
    }
    
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <h1>Locations Dashboard</h1>
          <p>Click a card to view on map</p>
        </header>
        
        <div className="cards-container">
          {this.state.cards.map((card) => (
            <Card 
              key={card.id} 
              id={card.id} 
              title={card.title} 
              description={card.description}
              icon={card.icon}
              coords={card.coords}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;