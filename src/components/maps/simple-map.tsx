import { PositionMarker } from "models/markers";
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { getDayOfWeek, getPostDate } from "utils/date";

const CENTER = [60.980488, 13, 8793165];

interface SimpleMapProps {
  positionMarkers: Array<PositionMarker>;
  displayedPositionMarker?: PositionMarker;
  siteUrl: string;
}

const SimpleMap: React.FC<SimpleMapProps> = ({
  positionMarkers,
  displayedPositionMarker,
  siteUrl,
}) => {
  return (
    <>
      <MapContainer
        style={{ height: "500px", zIndex: 10 }}
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
            <Popup>
              <a
                href={`${siteUrl}/${getPostDate(displayedPositionMarker.date)}`}
              >
                Accéder au récit du {getDayOfWeek(displayedPositionMarker.date)}
              </a>
            </Popup>
          </Marker>
        )}
        {positionMarkers
          .filter((p) => p.date !== displayedPositionMarker?.date)
          .map((positionMarker) => (
            <Polyline
              key={positionMarker.date}
              pathOptions={{
                color: "#005b99",
                dashArray: "5",
                dashOffset: "10",
              }}
              positions={[positionMarker.startPos, positionMarker.endPos]}
            />
          ))}
        {displayedPositionMarker && displayedPositionMarker.distance && (
          <Polyline
            key={displayedPositionMarker.date}
            pathOptions={{ color: "salmon" }}
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
