import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import './Map.css'; 

const Map = () => {
    const [coordinates, setcoordinates] = useState({ lat: 0, lon: 0 });

    useEffect(() => {
      const obtainUbication = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setcoordinates({ lat: latitude, lon: longitude });
  
              const mapContainer = document.getElementById('map');
  
              if (mapContainer) {
                if (mapContainer._leaflet_id) {
                  mapContainer._leaflet_id = null;
                }
  
                const map = L.map('map').setView([latitude, longitude], 13);
  
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  attribution: '© OpenStreetMap contributors',
                }).addTo(map);
  
                L.marker([latitude, longitude]).addTo(map);
              }
            },
            (error) => {
              console.error('Error obtaining coordinates:', error);
            }
          );
        } else {
          console.error('Geolocation not supported in this navigator.');
        }
      };
  
      obtainUbication();
    }, []);
  
    return <div id="map" className="map"></div>;
  };

export default Map;
