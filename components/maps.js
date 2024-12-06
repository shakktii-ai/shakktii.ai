import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MAPS = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const getLocations = async () => {
      const fakeLocation = [
        { title: 'महाड', lat:  18.08209397458222, lng: 73.42234238155838, description: `Ground intellegance, End To End Social Media 
Management, Social Media Management 
Team, Project Manager, Broadcasting Tools, 
Audio Vidio Bridge, Auto Posting, Auto 
Commenting` },
        { title: 'फलटण', lat: 17.993249003656196, lng: 74.42942449739226, description: `Ground intellegance, End To End Social Media 
Management, Social Media Management 
Team, Project Manager, Broadcasting Tools, 
Audio Vidio Bridge, Auto Posting, Auto 
Commenting` },
        { title: 'Jamner', lat: 20.809693513918464, lng:  75.77802942639441, description: ` Ground intellegance, End To End Social Media 
Management, Co-ordinator Manager, 
Broadcasting Tools, Audio Vidio Bridge, Auto 
Posting, Auto Commenting, All AI Tools.` },
        { title: '  Pachora', lat:  20.65919095233716, lng: 75.3478719850142, description: `Ground intellegance, End To End Social Media 
Management, Project Manager, Broadcasting 
Tools, Audio Vidio Bridge, Auto Posting, Auto 
Commenting` },
        { title: ' Nagar', lat:  19.09051436028614, lng: 74.74678713274912, description: ` Ground intellegance, End To End Social Media 
Management, Social Media Management 
Team, Project Manager, Broadcasting Tools, 
Audio Vidio Bridge, Auto Posting, Auto 
Commenting, Trolling Contain, 
Taglines/Hashtags, daily Cratives.` },
        { title: '  Chinchwad', lat: 18.639050644225645, lng: 73.79385485804474, description: ` Ground intellegance, End To End Social Media 
Management, Social Media Management 
Team, Project Manager, Broadcasting Tools, 
Audio Vidio Bridge, Auto Posting, Auto 
Commenting, Wisper campaining.` },
        { title: ' Bramhapuri', lat: 20.611129583843827, lng: 79.85732078839634, description: `Ground intellegance, End To End Social Media 
Management,  Broadcasting Tools, Audio Vidio 
Bridge, Auto Posting, Auto Commenting, daily 
Cratives` },
        { title: ' Mahim', lat: 19.04080586011608, lng: 72.8442694173768, description: ` Ground intellegance, End To End Social Media 
Management,  Broadcasting Tools, Audio Vidio 
Bridge, Auto Posting, Auto Commenting, daily 
Cratives` },
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
          zoom={5}
          center={{ lat: 22.788991848868555, lng: 79.30530240916862 }}
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
