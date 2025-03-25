import React, { Component } from 'react';
import { ZoomControl } from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

class MapView extends Component {
  state = {
    position: [20.5937, 78.9629], // Default: India coordinates
    zoom: 5,
  };

  render() {
    if (!this.props.isLoggedIn) {
      return <div className="auth-error">User not logged in</div>;
    }

    return (
      <div className="map-container">
        <h2>Map View</h2>
        <MapContainer
          center={this.state.position}
          zoom={this.state.zoom}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={this.state.position}>
            <Popup>India</Popup>
          </Marker>
          <ZoomControl position="topright" />
        </MapContainer>
      </div>
    );
  }
}

export default MapView;