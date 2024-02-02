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
  distance: number;
  time: string;
}

const SimpleMap: React.FC<SimpleMapProps> = ({ positionMarkers }) => {

  const startDate = positionMarkers[0].date;
  const lastDate = positionMarkers[positionMarkers.length -1].date;
  const [selectedDate, setSelectedDate] = useState<string>(lastDate);

  const displayedPositionMarker: PositionMarker | undefined = useMemo(() => {
    return positionMarkers.find(p => p.date === selectedDate);
  }, [positionMarkers, selectedDate]);

  return (
    <>
      <label htmlFor="marker-select">Voir la position:&nbsp;</label>
      <input type="date" id="start" name="trip-start" value={selectedDate} min={startDate} max={lastDate} onChange={e => setSelectedDate(e.target.value)} />
      <br /><br />
      <label htmlFor="marker-select">kms parcourus: {displayedPositionMarker?.distance}</label>
      <br /><br />
      <label htmlFor="marker-select">temps écoulé: {displayedPositionMarker?.time}</label>
      <br /><br />
      <MapContainer style={{ height: '600px' }} center={CENTER} zoom={4} scrollWheelZoom={true} placeholder={<p>
        Carte de notre trajet{' '}
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {displayedPositionMarker && <Marker position={displayedPositionMarker.endPos}>
          <Popup>
            {displayedPositionMarker.date}
          </Popup>
        </Marker>}
        {positionMarkers.map(positionMarker =>

          <Polyline pathOptions={{ color: 'blue' }} positions={[positionMarker.startPos, positionMarker.endPos]} />
        )}
      </MapContainer>
    </>
  )
}

export default SimpleMap;
