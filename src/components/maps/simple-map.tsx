import { PositionMarker } from "models/markers";
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { getDayOfWeek } from "utils/date";

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
            <Popup>{getDayOfWeek(displayedPositionMarker.date)}</Popup>
          </Marker>
        )}
        {positionMarkers
          .filter((p) => p.date !== displayedPositionMarker?.date)
          .map((positionMarker) => (
            <Polyline
              key={positionMarker.date}
              pathOptions={{ color: "blue", dashArray: "5", dashOffset: "10" }}
              positions={[positionMarker.startPos, positionMarker.endPos]}
            />
          ))}
        {displayedPositionMarker && (
          <Polyline
            key={displayedPositionMarker.date}
            pathOptions={{ color: "violet" }}
            positions={[
              displayedPositionMarker.startPos,
              displayedPositionMarker.endPos,
            ]}
          />
        )}
      </MapContainer>
    </>
  );
};

export default SimpleMap;
