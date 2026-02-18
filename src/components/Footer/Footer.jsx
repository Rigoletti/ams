import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Building2,
  HardHat,
  PanelTop,
  Palette,
  ChevronRight,
  Shield,
  Factory,
  Calendar,
  Target
} from 'lucide-react';
import '../../assets/styles/layout/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' },
    { name: 'Контакты', path: '/contacts' }
  ];

  const industries = [
    { name: 'Строительство', icon: <Building2 size={16} /> },
    { name: 'Металлоконструкции', icon: <HardHat size={16} /> },
    { name: 'Обшивка фасадов', icon: <PanelTop size={16} /> },
    { name: 'Артобъекты', icon: <Palette size={16} /> },
    { name: 'Металлические таблички', icon: <MapPin size={16} /> }
  ];

  const contacts = [
    { icon: <MapPin size={16} />, text: 'г. Альметьевск, ул. Монтажная, 9, офис 2' },
    { icon: <Phone size={16} />, text: '+7 (8553) 38-37-88' },
    { icon: <Phone size={16} />, text: '+7 (987) 420-49-00' },
    { icon: <Mail size={16} />, text: 'rpf_a@mail.ru' },
    { icon: <Mail size={16} />, text: 'amc@mail.ru' },
    { icon: <Clock size={16} />, text: 'Пн-Пт: 9:00-17:00' }
  ];

  return (
    <footer className="footer-uniform">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="brand-section">
            <div className="brand-header">
              <div className="brand-logo">
                <Factory className="logo-icon" />
                <div className="brand-text-container">
                  <span className="brand-name">АРТМЕТАЛЛ</span>
                  <span className="brand-subtitle">Строительная компания</span>
                </div>
              </div>
              <p className="brand-tagline">
                Производство и строительство с 2013 года. 
                Качество, надежность и индивидуальный подход.
              </p>
            </div>

            <div className="footer-achievements">
              <div className="achievement-item">
                <Calendar size={18} />
                <div>
                  <span className="achievement-value">12+ лет</span>
                  <span className="achievement-label">опыта работы</span>
                </div>
              </div>
              <div className="achievement-item">
                <Target size={18} />
                <div>
                  <span className="achievement-value">500+</span>
                  <span className="achievement-label">проектов</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h4 className="section-title">Навигация</h4>
            <nav className="links-list">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className="footer-link"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <ChevronRight size={14} className="link-icon-left" />
                  <span>{item.name}</span>
                  <ChevronRight size={14} className="link-icon-right" />
                </Link>
              ))}
            </nav>
          </div>

        

          {/* Contacts */}
          <div className="footer-section">
            <h4 className="section-title">Контакты</h4>
            <div className="contacts-list">
              {contacts.map((contact, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {contact.icon}
                  </div>
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>

         
          </div>
        </div>

       
    
      </div>
    </footer>
  );
};

export default Footer;