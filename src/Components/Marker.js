import React from 'react';
import styled from 'styled-components';
import '../Assets/Marker.css';

const ToolTip = styled.div`
    min-height: 100px;
    width: 180px;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    h3 {
        font-size: 23px;
    }
    p {
        width: 100%;
        margin: 5px auto;
    }
`

const Marker = ({ color, name, newPosition }) => {
    return (
      <div>
          {newPosition && 
            <ToolTip className="p-2 overflow-hidden bg-dark p-2  d-sm-flex flex-column justify-content-start">
                <h3 >My location</h3>
                <hr className="m-0 border-light mb-1"></hr>
                <p className="pl-2 text-left"><b>Latitude</b>: {newPosition.lat}</p>
                <p className="pl-2 text-left"><b>Longitude</b>: {newPosition.lng}</p>
            </ToolTip>
        }
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
        <div className="pulse" />
      </div>
    );
  };

  export default Marker;