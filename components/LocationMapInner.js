import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Polyline, Tooltip, useMap } from 'react-leaflet';

const MADRID = [40.4168, -3.7038];
const TRONDHEIM = [63.4305, 10.3951];

const CITIES = [
  { pos: MADRID, label: 'Madrid', color: '#00a8e8' },
  { pos: TRONDHEIM, label: 'Trondheim', color: '#7ec8d9' },
];

function FitBounds({ compact }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds([MADRID, TRONDHEIM], {
      padding: compact ? [16, 20] : [50, 60],
    });
  }, [map, compact]);
  return null;
}

export default function LocationMapInner({ compact }) {
  const height = compact ? 90 : 280;

  return (
    <MapContainer
      center={[51.9, 3.4]}
      zoom={4}
      style={{ height, width: '100%' }}
      scrollWheelZoom={false}
      zoomControl={!compact}
      dragging={!compact}
      doubleClickZoom={!compact}
      touchZoom={!compact}
      keyboard={false}
      attributionControl={!compact}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
        maxZoom={20}
      />

      <FitBounds compact={compact} />

      {/* Dashed connecting line */}
      <Polyline
        positions={[MADRID, TRONDHEIM]}
        pathOptions={{
          color: '#00a8e8',
          weight: compact ? 1.5 : 2,
          opacity: 0.55,
          dashArray: '6 5',
        }}
      />

      {CITIES.map(({ pos, label, color }) => (
        <CircleMarker
          key={label}
          center={pos}
          radius={compact ? 4 : 7}
          pathOptions={{
            color: '#0a1623',
            fillColor: color,
            fillOpacity: 1,
            weight: compact ? 1.5 : 2,
          }}
        >
          {!compact && (
            <Tooltip
              permanent
              direction="right"
              offset={[10, 0]}
              className="loc-tooltip"
            >
              {label}
            </Tooltip>
          )}
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
