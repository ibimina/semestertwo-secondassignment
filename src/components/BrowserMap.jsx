import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function BrowserMap({ location }) {
  const { street, city, coordinates, country, state } = location;

  return (
    <MapContainer
      center={[coordinates.latitude, coordinates.longitude]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates.latitude, coordinates.longitude]}>
        <Popup>
          {street.number} {street.name} <br /> {city} {state} {country}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
