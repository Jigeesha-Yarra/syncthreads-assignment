import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/map', { state: { coords: props.coords } });
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-icon">{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="card-id">ID: {props.id}</div>
    </div>
  );
};

export default Card;