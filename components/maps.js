import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MAPS = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const getLocations = async () => {
      const fakeLocation = [
        { title: 'महाड', lat: 15.9182808, lng: 108.3470323, description: 'this is Location A' },
        { title: 'फलटण', lat: 16.0471659, lng: 108.1716864, description: 'this is Location B' },
        { title: 'पाचोरा', lat: 20.8467333, lng: 106.6637271, description: 'this is Location C' },
        { title: ' चिंचवड', lat: 10.823099, lng: 106.629664, description: 'this is Location D' },
      ];
      setLocations(fakeLocation);
    };
    getLocations();
  }, []);

  return (
    <div id="app" className="w-full h-screen">
      <LoadScript googleMapsApiKey="AIzaSyAcEDtQbw9CpH8C1hYp7kmujHnOroEez-Y">
        <GoogleMap
          id="map"
          mapContainerStyle={{
            width: '100%',
            height: '100%',
          }}
          zoom={16}
          center={{ lat: 15.9182808, lng: 108.3470323 }}
          options={{
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: false,
          }}
        >
          {locations.map((location) => (
            <Marker
              key={location.title}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => setSelectedLocation(location)}
            />
          ))}

          {selectedLocation && (
            <InfoWindow
              position={{
                lat: selectedLocation.lat,
                lng: selectedLocation.lng,
              }}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div className="text-sm p-2">
                <h3 className="font-bold">{selectedLocation.title}</h3>
                <p>{selectedLocation.description}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MAPS;
