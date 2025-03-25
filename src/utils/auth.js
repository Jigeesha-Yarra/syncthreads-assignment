import { useNavigate } from 'react-router-dom';
import React from 'react';

const withRouter = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};

export default withRouter;