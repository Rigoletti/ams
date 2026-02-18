import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../../assets/styles/Map/Map.css';

// Фикс для иконок маркеров в react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Кастомная иконка для маркера
const customIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path fill="#ff6b35" d="M16 2C10.48 2 6 6.48 6 12c0 8 10 18 10 18s10-10 10-18c0-5.52-4.48-10-10-10zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
      <circle fill="white" cx="16" cy="12" r="3"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map = () => {
  const position = [54.9012, 52.2973]; // Координаты Альметьевска

  const openInMaps = () => {
    const address = encodeURIComponent('Альметьевск, ул. Монтажная, 9');
    const yandexUrl = `https://yandex.ru/maps/?text=${address}`;
    window.open(yandexUrl, '_blank');
  };

  return (
    <motion.div 
      className="map-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="map-header">
        <h3>Наше местоположение</h3>
        <p>г. Альметьевск, ул. Монтажная, 9</p>
      </div>
      
      <div className="map-container">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: '400px', width: '100%' }}
          className="leaflet-map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <div className="map-popup">
                <strong>ООО "Артметалл Строй"</strong>
                <br />
                ул. Монтажная, 9, офис 2
                <br />
                г. Альметьевск
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="map-actions">
        <motion.button 
          className="btn btn-primary"
          onClick={openInMaps}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="btn-icon"></span>
          Построить маршрут
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Map;