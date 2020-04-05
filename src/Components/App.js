import React, { useState } from 'react';
import SimpleMap from './Map';
import '../Assets/App.css';
import styled from 'styled-components';

import def from '../Constants/defaultCenter'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1.2em;
  justify-content: center;
`

const ButtonWrapper = styled.div`
  width: 100%;
  font-size: small;
`

export default () => {
  const [mapObj, setMap] = useState(null)
  const [newPosition, setPosition] = useState(null)

  const findMe =()=> {
    if ("geolocation" in navigator) {

      console.log("clicked")
                
      navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          };
          mapObj.map.panTo(pos)
          setPosition(pos)

      })
    } else {
      alert("Geolocation Available");
    }
  }


  return (
    <div className="App">
        <Container>
          <div className="container border border-secondary overflow-hidden p-0 rounded-lg">
            <SimpleMap 
              setMap={setMap} 
              newPosition={newPosition}
              zoom={def.zoom}
              center={def.center}
            />
            <ButtonWrapper className="d-flex justify-content-end p-2 d-inline-flex">
              {!newPosition && <span className="p-2 font-italic">Click me to find your location &#8594;</span>}
              <button onClick={findMe} className={`btn btn-${newPosition? 'light':'primary'}`}>{newPosition ? 'Found You!': 'Find Me'}</button>
            </ButtonWrapper>
          </div>
        </Container>
    </div>
  );
}
