import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

export const NotFound = () => {
  return (
    <div className="container-fluid bg-dark text-light">
        <div className="row vh-100 align-items-center">
            <h1><FontAwesomeIcon icon={faBan} style={{color:"red"}}></FontAwesomeIcon>404 Not Found </h1>
        </div>
    </div>
  )
}
