import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Polyline, Tooltip, useMap } from 'react-leaflet';

const MADRID = [40.4168, -3.7038];
const TRONDHEIM = [63.4305, 10.3951];
const WENXI = [28.2200, 120.2700];

const CITIES = [
  { pos: MADRID, label: 'Madrid', color: '#00a8e8' },
  { pos: TRONDHEIM, label: 'Trondheim', color: '#7ec8d9' },
  { pos: WENXI, label: '温溪 Wenxi', color: '#f4b860' },
];

// Lines: Wenxi → Madrid (origin → current), Wenxi → Trondheim (origin → Erasmus)
const LINES = [
  { positions: [WENXI, MADRID], color: '#f4b860' },
  { positions: [WENXI, TRONDHEIM], color: '#f4b860' },
];

const ALL_POSITIONS = [MADRID, TRONDHEIM, WENXI];

function FitBounds({ compact }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(ALL_POSITIONS, {
      padding: compact ? [12, 16] : [40, 50],
    });
  }, [map, compact]);
  return null;
}

export default function LocationMapInner({ compact }) {
  const height = compact ? 90 : 280;

  return (
    <MapContainer
      center={[45, 58]}
      zoom={2}
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

      {/* Connecting lines from Wenxi origin */}
      {LINES.map(({ positions, color }, i) => (
        <Polyline
          key={i}
          positions={positions}
          pathOptions={{
            color,
            weight: compact ? 1 : 1.5,
            opacity: 0.45,
            dashArray: '5 5',
          }}
        />
      ))}

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
