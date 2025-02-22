import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Riple } from 'react-loading-indicators';

const containerStyle = {
  width: '50%',
  height: '500px',
};

const center = {
  lat: 33.5731, 
  lng: -7.5898, 
};

const Map = (props) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [marker, setMarker] = useState(null);

  const handleClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log('Latitude:', lat, 'Longitude:', lng);
    setMarker({ lat, lng });
    props.location({lat, lng});
  }, []);

  return (
    <div id='map' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onClick={handleClick}
        >
          {marker && <Marker position={marker} />}
        </GoogleMap>
      ) : (
        <Riple color="#18a1fe" size="large" text="" textColor="" />
      )}
    </div>
  );
};

export default Map;
