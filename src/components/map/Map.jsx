import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 33.5731, // Default latitude (e.g., for Morocco)
  lng: -7.5898, // Default longitude (e.g., for Morocco)
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'uy', // Replace with your API key
  });

  const [marker, setMarker] = useState(null);

  const handleClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log('Latitude:', lat, 'Longitude:', lng);
    setMarker({ lat, lng });
  }, []);

  return isLoaded ? (
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
  );
};

export default Map;
