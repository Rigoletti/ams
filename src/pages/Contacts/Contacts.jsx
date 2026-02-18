import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Factory,
  Sparkles,
  Navigation,
  MessageSquare,
  Calendar,
  Building2
} from 'lucide-react';
import '../../assets/styles/contact/Contacts.css';

const Contacts = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Координаты офиса
  const officeCoords = [54.885260, 52.281257]; // [широта, долгота]

  const contactCards = [
    {
      icon: <Phone />,
      title: 'Телефоны',
      details: [
        '+7 (8553) 38-37-88',
        '+7 (987) 420-49-00'
      ],
      description: 'Звоните для консультации и расчета проекта',
      color: '#FF6B35',
      accentColor: 'rgba(255, 107, 53, 0.1)'
    },
    {
      icon: <Mail />,
      title: 'Электронная почта',
      details: [
        'rpf_a@mail.ru',
        'amc@mail.ru'
      ],
      description: 'Отправьте ТЗ для расчета или задайте вопросы',
      color: '#00B4D8',
      accentColor: 'rgba(0, 180, 216, 0.1)'
    },
    {
      icon: <MapPin />,
      title: 'Адрес производства',
      details: [
        'г. Альметьевск',
        'ул. Монтажная, 9, офис 2'
      ],
      description: 'Приезжайте на производство для ознакомления',
      color: '#7209B7',
      accentColor: 'rgba(114, 9, 183, 0.1)'
    },
    {
      icon: <Clock />,
      title: 'Режим работы',
      details: [
        'Понедельник - Пятница',
        '9:00 - 17:00'
      ],
      description: 'Суббота, воскресенье - выходные дни',
      color: '#4CC9F0',
      accentColor: 'rgba(76, 201, 240, 0.1)'
    }
  ];

  const handleMapRoute = () => {
    // Формируем правильный URL для Яндекс.Карт с координатами
    const yandexMapsUrl = `https://yandex.ru/maps/?ll=${officeCoords[1]},${officeCoords[0]}&z=17&mode=whatshere&whatshere%5Bpoint%5D=${officeCoords[1]},${officeCoords[0]}&whatshere%5Bzoom%5D=17`;
    
    window.open(
      yandexMapsUrl, 
      '_blank',
      'noopener,noreferrer'
    );
  };

  useEffect(() => {
    // Загружаем API Яндекс.Карт
    const loadYandexMaps = () => {
      if (!window.ymaps) {
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=c9b2ea02-943e-4c53-a196-a1e5ff6df24e';
        script.async = true;
        document.head.appendChild(script);
        
        script.onload = () => {
          window.ymaps.ready(initMap);
        };
      } else {
        window.ymaps.ready(initMap);
      }
    };

    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      // Создаем карту
      mapInstanceRef.current = new window.ymaps.Map(mapRef.current, {
        center: officeCoords,
        zoom: 17,
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl']
      });

      // Создаем кастомную иконку для метки
      const customIconContent = `
        <div style="
          background: #FF6B35;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid white;
          box-shadow: 0 0 20px rgba(255, 107, 53, 0.8);
        ">
          <div style="
            color: white;
            font-size: 24px;
            font-weight: bold;
          ">
            А
          </div>
        </div>
      `;

      // Создаем метку на здании
      const placemark = new window.ymaps.Placemark(officeCoords, {
        hintContent: 'Офис Артметалл Строй',
        balloonContentHeader: '<div style="font-size: 18px; font-weight: bold; color: #FF6B35;">Офис Артметалл Строй</div>',
        balloonContentBody: `
          <div style="padding: 10px; max-width: 280px;">
            <div style="display: flex; align-items: start; gap: 10px; margin-bottom: 15px;">
              <div style="
                background: #FF6B35;
                width: 40px;
                height: 40px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                flex-shrink: 0;
              ">
                А
              </div>
              <div>
                <p style="margin: 0 0 5px 0; font-weight: bold;">Производственный комплекс</p>
                <p style="margin: 0; color: #666;">Артметалл Строй</p>
              </div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0 0 8px 0; color: #333; font-weight: bold;">📍 Адрес:</p>
              <p style="margin: 0; padding-left: 10px;">г. Альметьевск, ул. Монтажная, 9, офис 2</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0 0 8px 0; color: #333; font-weight: bold;">📞 Телефоны:</p>
              <p style="margin: 0; padding-left: 10px;">+7 (8553) 38-37-88</p>
              <p style="margin: 0; padding-left: 10px;">+7 (987) 420-49-00</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0 0 8px 0; color: #333; font-weight: bold;">🕒 Режим работы:</p>
              <p style="margin: 0; padding-left: 10px;">Пн-Пт: 9:00-17:00</p>
              <p style="margin: 0; padding-left: 10px;">Сб-Вс: выходные</p>
            </div>
            
            <button onclick="window.open('https://yandex.ru/maps/?ll=${officeCoords[1]},${officeCoords[0]}&z=17&mode=whatshere&whatshere%5Bpoint%5D=${officeCoords[1]},${officeCoords[0]}&whatshere%5Bzoom%5D=17', '_blank')" 
                    style="
                      background: #FF6B35; 
                      color: white; 
                      border: none; 
                      padding: 12px 20px; 
                      border-radius: 8px; 
                      cursor: pointer; 
                      width: 100%;
                      font-weight: bold;
                      font-size: 14px;
                      transition: all 0.3s;
                    "
                    onmouseover="this.style.background='#E85A20'"
                    onmouseout="this.style.background='#FF6B35'">
              🗺️ Проложить маршрут
            </button>
          </div>
        `,
        balloonContentFooter: `<div style="color: #666; font-size: 12px;">Координаты: ${officeCoords[0]}, ${officeCoords[1]}</div>`
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [0, 0],
        iconContentLayout: window.ymaps.templateLayoutFactory.createClass(customIconContent),
        iconContentOffset: [0, 0],
        iconContentSize: [60, 60]
      });

      // Добавляем метку на карту
      mapInstanceRef.current.geoObjects.add(placemark);

      // Включаем скролл для зума
      mapInstanceRef.current.behaviors.enable('scrollZoom');

      // Настраиваем элементы управления
      mapInstanceRef.current.controls.get('zoomControl').options.set({
        size: 'small',
        position: { right: 15, top: 150 }
      });

      mapInstanceRef.current.controls.get('geolocationControl').options.set({
        position: { right: 15, top: 220 }
      });

      mapInstanceRef.current.controls.get('fullscreenControl').options.set({
        position: { right: 15, top: 290 }
      });

      // Добавляем масштабируемый контрол
      const scaleControl = new window.ymaps.control.ScaleLine();
      mapInstanceRef.current.controls.add(scaleControl);

      // Открываем балун при загрузке карты
      setTimeout(() => {
        placemark.balloon.open();
      }, 1500);

      // Добавляем поиск
      const searchControl = new window.ymaps.control.SearchControl({
        options: {
          noPlacemark: true,
          position: { left: 15, top: 15 }
        }
      });
      
      mapInstanceRef.current.controls.add(searchControl);

      // Очистка при размонтировании
      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.destroy();
          mapInstanceRef.current = null;
        }
      };
    };

    loadYandexMaps();
  }, []);

  return (
    <div className="contacts-page">
      {/* Hero Section */}
      <section className="contacts-hero">
        <motion.div 
          className="hero-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="grid-lines"></div>
          <div className="floating-contacts">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="floating-contact"
                style={{
                  background: i % 2 === 0 ? '#FF6B35' : '#00B4D8',
                  left: `${10 + i * 15}%`,
                  top: `${30 + i * 7}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 12 + i * 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="hero-container">
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="badge-dot" style={{ background: '#FF6B35' }}></div>
              <span>Свяжитесь с нами</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="title-main">КОНТАКТЫ</span>
              <span className="title-sub">АРТМЕТАЛЛ СТРОЙ</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Мы всегда на связи и готовы обсудить ваш проект. 
              Посетите наш производственный комплекс или свяжитесь удобным способом.
            </motion.p>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="stat-item">
                <Calendar />
                <div>
                  <div className="stat-value">2013</div>
                  <div className="stat-label">год основания</div>
                </div>
              </div>
              <div className="stat-item">
                <MessageSquare />
                <div>
                  <div className="stat-value">24/7</div>
                  <div className="stat-label">поддержка</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="contact-cards-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">
              <Sparkles />
              <span>Контакты</span>
            </div>
            <h2 className="section-title">
              Как с нами <span className="highlight">связаться</span>
            </h2>
            <p className="section-description">
              Выберите удобный способ связи для обсуждения вашего проекта
            </p>
          </motion.div>

          <div className="contact-cards-grid">
            {contactCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="contact-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{ borderLeftColor: card.color }}
              >
                <div className="card-header">
                  <div 
                    className="card-icon-container"
                    style={{ background: card.color }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                </div>
                
                <div className="card-content">
                  <div className="card-details">
                    {card.details.map((detail, idx) => (
                      <div key={idx} className="card-detail">
                        {detail}
                      </div>
                    ))}
                  </div>
                  <p className="card-description">{card.description}</p>
                </div>
                
                <div className="card-footer">
                  <div className="no-action-message">
                    Свяжитесь удобным способом
                  </div>
                </div>
                
                <div 
                  className="card-glow"
                  style={{ background: card.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">
              <Factory />
              <span>Производство</span>
            </div>
            <h2 className="section-title">
              Наше <span className="highlight">местоположение</span>
            </h2>
            <p className="section-description">
              Приезжайте к нам на производство для личного знакомства
            </p>
          </motion.div>

          <motion.div
            className="map-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="map-content-wrapper">
              <div className="map-info-panel">
                <div className="map-visual">
                  <div className="map-icon">
                    <Building2 size={48} />
                  </div>
                  <div className="map-info">
                    <h3>Производственный комплекс "Артметалл"</h3>
                    <div className="map-details">
                      <div className="map-detail">
                        <MapPin size={18} />
                        <span>г. Альметьевск, ул. Монтажная, 9, офис 2</span>
                      </div>
                      <div className="map-detail">
                        <Clock size={18} />
                        <span>Пн-Пт: 9:00-17:00</span>
                      </div>
                      <div className="map-detail">
                        <Phone size={18} />
                        <span>+7 (8553) 38-37-88</span>
                      </div>
                      <div className="map-detail">
                        <Phone size={18} />
                        <span>+7 (987) 420-49-00</span>
                      </div>
                      <div className="map-detail">
                        <Mail size={18} />
                        <span>rpf_a@mail.ru</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="map-actions-wrapper">
                  <div className="map-actions">
                    <motion.button
                      className="btn-primary btn-large"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleMapRoute}
                    >
                      <Navigation size={20} />
                      <span>Проложить маршрут</span>
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <div className="yandex-map-container">
                <div 
                  ref={mapRef} 
                  className="yandex-map"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="map-overlay">
                  <div className="map-overlay-content">
                    <div className="overlay-badge">
                      <Building2 size={16} />
                      <span>Офис Артметалл Строй</span>
                    </div>
                    <button 
                      className="overlay-button"
                      onClick={() => window.open(`https://yandex.ru/maps/?ll=${officeCoords[1]},${officeCoords[0]}&z=17&mode=whatshere&whatshere%5Bpoint%5D=${officeCoords[1]},${officeCoords[0]}&whatshere%5Bzoom%5D=17`, '_blank')}
                    >
                      📍 Открыть в Яндекс.Картах
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;