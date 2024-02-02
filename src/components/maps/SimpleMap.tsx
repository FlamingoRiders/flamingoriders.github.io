import { PositionMarker } from "models/markers";
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

const CENTER = [59.980488, 13, 8793165];

interface SimpleMapProps {
  positionMarkers: Array<PositionMarker>;
  displayedPositionMarker?: PositionMarker;
}

const SimpleMap: React.FC<SimpleMapProps> = ({
  positionMarkers,
  displayedPositionMarker,
}) => {
  return (
    <>
      <MapContainer
        style={{ height: "600px" }}
        center={CENTER}
        zoom={4}
        scrollWheelZoom={true}
        placeholder={
          <p>
            Carte de notre trajet{" "}
            <noscript>You need to enable JavaScript to see this map.</noscript>
          </p>
        }
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {displayedPositionMarker && (
          <Marker position={displayedPositionMarker.endPos}>
            <Popup>{displayedPositionMarker.date}</Popup>
          </Marker>
        )}
        {positionMarkers.map((positionMarker) => (
          <Polyline
            key={positionMarker.date}
            pathOptions={{ color: "blue" }}
            positions={[positionMarker.startPos, positionMarker.endPos]}
          />
        ))}
      </MapContainer>
    </>
  );
};

export default SimpleMap;
