import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const CENTER = [59.980488, 13, 8793165];

interface SimpleMapProps {
  positionMarkers: Array<PositionMarker>;
}

interface PositionMarker {
  date: string;
  endPos: [number, number];
}

const SimpleMap: React.FC<SimpleMapProps> = ({ positionMarkers }) => {
  return (
    <MapContainer style={{ height: '600px' }} center={CENTER} zoom={4} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positionMarkers.map(positionMarker => <Marker position={positionMarker.endPos}>
        <Popup>
          {positionMarker.date}
        </Popup>
      </Marker>)}
    </MapContainer>
  )
}

export default SimpleMap;