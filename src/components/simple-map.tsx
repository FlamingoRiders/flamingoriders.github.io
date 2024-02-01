import React, { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'


const CENTER = [59.980488, 13, 8793165];

interface SimpleMapProps {
  positionMarkers: Array<PositionMarker>;
}

interface PositionMarker {
  date: string;
  startPos: [number, number];
  endPos: [number, number];
}

const SimpleMap: React.FC<SimpleMapProps> = ({ positionMarkers }) => {

  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number>(0);

  const displayedPositionMarker: PositionMarker = useMemo(() => {
    return positionMarkers[selectedMarkerIndex];
  }, [positionMarkers, selectedMarkerIndex]);

  return (
    <>
      <label htmlFor="marker-select">Voir la position:&nbsp;</label>
      <select name="markers" id="marker-select" value={selectedMarkerIndex} onChange={e => setSelectedMarkerIndex(e.target.value)}>
        <option value={0}>actuelle</option>
        <option value={7}>il y a 7 jours</option>
        <option value={15}>il y a 15 jours</option>
        <option value={30}>il y a 30 jours</option>
        <option value={positionMarkers.length - 1}>de départ</option>
      </select>
      <br /><br />
      <MapContainer style={{ height: '600px' }} center={CENTER} zoom={4} scrollWheelZoom={true} placeholder={<p>
        Carte de notre trajet{' '}
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={displayedPositionMarker.endPos}>
          <Popup>
            {displayedPositionMarker.date}
          </Popup>
        </Marker>
        {positionMarkers.map(positionMarker =>

          <Polyline pathOptions={{ color: 'blue' }} positions={[positionMarker.startPos, positionMarker.endPos]} />
        )}
      </MapContainer>
    </>
  )
}

export default SimpleMap;
