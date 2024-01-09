import React from 'react';
import Geolocation from '@react-native-community/geolocation';

export default function GeoLocation() {
  const [location, setLocation] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('position', position);
        setLocation(position);
      },
      error => {
        console.log('error', error);
        setError(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return {
    location,
    error,
  };
}
