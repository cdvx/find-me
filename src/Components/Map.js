import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LoadingOverlay from '../Containers/LoadingOverlay'


import Marker from './Marker'

export default ({setMap, newPosition, center, zoom}) => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(false)
    }, [loading])

    const handleApiLoaded = (map, maps) => {
        setMap({map, maps})
      };

    return (
        <LoadingOverlay loading={loading}>
            {console.log(process.env)}
            <GoogleMapReact
            bootstrapURLKeys={{ 
                key: process.env.REACT_APP_API_KEY,
                language: 'en',
            }}
            distanceToMouse={()=>{}}
            defaultCenter={center}
            defaultZoom={zoom}
            layerTypes={['TrafficLayer', 'TransitLayer']}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({map, maps}) => {                
                return handleApiLoaded(map, maps)
            }}
            options={()=>({
                gestureHandling: 'greedy',
                panControl: false,
                mapTypeControl: true,
                scrollwheel: false,
                styles: [{ stylers: [{ 'saturation': 80 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
              })
        }
        >
            <Marker
                newPosition={newPosition}
                lat={newPosition ? newPosition.lat :center.lat}
                lng={newPosition ? newPosition.lng :center.lng}
                name="My Marker"
                color="blue"
          />
        </GoogleMapReact>

        </LoadingOverlay>
    );

}
