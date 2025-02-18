import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

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
    googleMapsApiKey: 'AIzaSyCnrK9QY5GOJEyvzfTHxMzpBN8obW_Fv28',
  });

  const [marker, setMarker] = useState(null);

  const handleClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log('Latitude:', lat, 'Longitude:', lng);
    setMarker({ lat, lng });
    props.location({lat, lng})
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Map;
