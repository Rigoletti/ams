import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Ruler, 
  PanelTop, 
  Palette, 
  MapPin,
  Search,
  Filter,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Check,
  Image as ImageIcon,
  X,
  ExternalLink,
  Sparkles,
  Award,
  Shield,
  Clock,
  Users,
  Star,
  DoorOpen,
  Sun
} from 'lucide-react';
import '../../assets/styles/catalog/Catalog.css';

// Импорт изображений для всех направлений
import construction1 from '../../assets/img/construction/1.webp';
import construction2 from '../../assets/img/construction/2.webp';
import construction3 from '../../assets/img/construction/3.webp';
import construction4 from '../../assets/img/construction/4.webp';
import construction5 from '../../assets/img/construction/5.webp';

import metalstructure1 from '../../assets/img/metalstructure/1.webp';
import metalstructure2 from '../../assets/img/metalstructure/2.webp';
import metalstructure3 from '../../assets/img/metalstructure/3.webp';
import metalstructure4 from '../../assets/img/metalstructure/4.webp';
import metalstructure5 from '../../assets/img/metalstructure/5.webp';

import facades1 from '../../assets/img/facades/1.webp';
import facades2 from '../../assets/img/facades/2.webp';
import facades3 from '../../assets/img/facades/3.webp';
import facades4 from '../../assets/img/facades/4.webp';
import facades5 from '../../assets/img/facades/5.webp';

import art1 from '../../assets/img/art/1.webp';
import art2 from '../../assets/img/art/2.webp';
import art3 from '../../assets/img/art/3.webp';
import art4 from '../../assets/img/art/4.webp';
import art5 from '../../assets/img/art/5.webp';
import art6 from '../../assets/img/art/6.webp';
import art7 from '../../assets/img/art/7.webp';
import art8 from '../../assets/img/art/8.webp';
import art9 from '../../assets/img/art/9.webp';
import art10 from '../../assets/img/art/10.webp';
import art11 from '../../assets/img/art/11.webp';
import art12 from '../../assets/img/art/12.webp';
import art13 from '../../assets/img/art/13.webp';
import art14 from '../../assets/img/art/14.webp';
import art15 from '../../assets/img/art/15.webp';

import stel1 from '../../assets/img/stel/1.webp';
import stel2 from '../../assets/img/stel/2.webp';
import stel3 from '../../assets/img/stel/3.webp';

import vhod_grup1 from '../../assets/img/vhod_grup/1.webp';
import vhod_grup2 from '../../assets/img/vhod_grup/2.webp';
import vhod_grup3 from '../../assets/img/vhod_grup/3.webp';
import vhod_grup4 from '../../assets/img/vhod_grup/4.webp';
import vhod_grup5 from '../../assets/img/vhod_grup/5.webp';

import cards1 from '../../assets/img/cards/1.webp';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = [
    { 
      id: 'all', 
      name: 'Все направления', 
      icon: <Filter />, 
      color: '#FF6B35',
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF9E00 100%)'
    },
    { 
      id: 'construction', 
      name: 'Строительство', 
      icon: <Building />, 
      color: '#00B4D8',
      gradient: 'linear-gradient(135deg, #00B4D8 0%, #4CC9F0 100%)'
    },
    { 
      id: 'metalwork', 
      name: 'Металлоконструкции', 
      icon: <Ruler />, 
      color: '#7209B7',
      gradient: 'linear-gradient(135deg, #7209B7 0%, #9D4EDD 100%)'
    },
    { 
      id: 'facades', 
      name: 'Обшивка фасадов', 
      icon: <PanelTop />, 
      color: '#4CC9F0',
      gradient: 'linear-gradient(135deg, #4CC9F0 0%, #56CFE1 100%)'
    },
    { 
      id: 'entrance', 
      name: 'Входные группы, навесы', 
      icon: <DoorOpen />, 
      color: '#FF9E00',
      gradient: 'linear-gradient(135deg, #FF9E00 0%, #FFB700 100%)'
    },
    { 
      id: 'steles', 
      name: 'Стелы', 
      icon: <MapPin />, 
      color: '#F72585',
      gradient: 'linear-gradient(135deg, #F72585 0%, #B5179E 100%)'
    },
    { 
      id: 'artobjects', 
      name: 'Артобъекты', 
      icon: <Palette />, 
      color: '#4CC9F0',
      gradient: 'linear-gradient(135deg, #4CC9F0 0%, #56CFE1 100%)'
    },
    { 
      id: 'signage', 
      name: 'Таблички металлические', 
      icon: <MapPin />, 
      color: '#00B4D8',
      gradient: 'linear-gradient(135deg, #00B4D8 0%, #4CC9F0 100%)'
    }
  ];

  const getProductImages = (category) => {
    switch(category) {
      case 'construction':
        return [construction1, construction2, construction3, construction4, construction5];
      case 'metalwork':
        return [metalstructure1, metalstructure2, metalstructure3, metalstructure4, metalstructure5];
      case 'facades':
        return [facades1, facades2, facades3, facades4, facades5];
      case 'entrance':
        return [vhod_grup1, vhod_grup2, vhod_grup3, vhod_grup4, vhod_grup5];
      case 'steles':
        return [stel1, stel2, stel3];
      case 'artobjects':
        return [art1, art2, art3, art4, art5, art6, art7, art8, art9, art10, art11, art12, art13, art14, art15];
      case 'signage':
        return [cards1];
      default:
        return [];
    }
  };

  const products = [
    {
      id: 1,
      name: 'Строительные работы',
      category: 'construction',
      description: 'Полный комплекс строительных услуг от проектирования до сдачи объекта под ключ с гарантией качества',
      features: ['Проектирование', 'Строительство', 'Отделка', 'Сдача под ключ'],
      specs: { 
        'Срок выполнения': 'От 3 месяцев', 
        'Тип объектов': 'Промышленные, Торговые центры, Остановки, КПП', 
        'Гарантия': '24 месяца',
        'Опыт работы': 'Более 15 лет'
      },
      advantages: [
        { icon: <Shield />, text: 'Гарантия качества' },
        { icon: <Clock />, text: 'Соблюдение сроков' },
        { icon: <Users />, text: 'Команда специалистов' },
        { icon: <Award />, text: 'Сертифицированные материалы' }
      ],
      tags: ['Строительство', 'Промышленные здания', 'Остановки', 'КПП'],
      images: getProductImages('construction')
    },
    {
      id: 2,
      name: 'Металлоконструкции',
      category: 'metalwork',
      description: 'Изготовление и монтаж металлических конструкций любой сложности по индивидуальным чертежам',
      features: ['Каркасы', 'Лестницы', 'Ограждения', 'Спецконструкции'],
      specs: { 
        'Материалы': 'Сталь, Алюминий, Нержавейка', 
        'Технологии': 'Сварка, Лазерная резка', 
        'Монтаж': 'Да',
        'Прочность': 'Повышенная'
      },
      advantages: [
        { icon: <Sparkles />, text: 'Современное оборудование' },
        { icon: <Ruler />, text: 'Высокая точность' },
        { icon: <Shield />, text: 'Антикоррозийная обработка' },
        { icon: <Clock />, text: 'Быстрые сроки' }
      ],
      tags: ['Металлоконструкции', 'Сварка', 'Монтаж'],
      images: getProductImages('metalwork')
    },
    {
      id: 3,
      name: 'Фасадные работы',
      category: 'facades',
      description: 'Обшивка фасадов современными материалами и технологиями с учетом всех требований',
      features: ['Вентилируемые фасады', 'Композитные панели', 'Металлокассеты', 'Утепление'],
      specs: { 
        'Материалы': 'Различные', 
        'Тип фасадов': 'Любые', 
        'Дизайн': 'Индивидуальный',
        'Срок службы': 'Долговечные'
      },
      advantages: [
        { icon: <Star />, text: 'Эстетичный вид' },
        { icon: <Shield />, text: 'Защита здания' },
        { icon: <Sparkles />, text: 'Современные решения' },
        { icon: <Users />, text: 'Квалифицированные монтажники' }
      ],
      tags: ['Фасады', 'Обшивка', 'Отделка'],
      images: getProductImages('facades')
    },
    {
      id: 4,
      name: 'Входные группы и навесы',
      category: 'entrance',
      description: 'Проектирование и изготовление входных групп, козырьков и навесов любой сложности',
      features: ['Входные группы', 'Козырьки', 'Навесы для авто', 'Тентовые конструкции'],
      specs: { 
        'Материалы': 'Металл, Поликарбонат', 
        'Типы': 'Козырьки, Навесы, Тенты', 
        'Размеры': 'Любые',
        'Дизайн': 'Индивидуальный'
      },
      advantages: [
        { icon: <DoorOpen />, text: 'Современный дизайн' },
        { icon: <Shield />, text: 'Надежность' },
        { icon: <Sun />, text: 'Защита от осадков' },
        { icon: <Sparkles />, text: 'Эстетичный внешний вид' }
      ],
      tags: ['Входные группы', 'Навесы', 'Козырьки'],
      images: getProductImages('entrance')
    },
    {
      id: 5,
      name: 'Стелы',
      category: 'steles',
      description: 'Изготовление архитектурно-художественных стел и въездных знаков',
      features: ['Въездные стелы', 'Навигационные стелы', 'Информационные стелы', 'Монументальные знаки'],
      specs: { 
        'Материалы': 'Металл, Композит', 
        'Высота': 'До 10 метров', 
        'Подсветка': 'Возможна',
        'Стиль': 'Любой'
      },
      advantages: [
        { icon: <MapPin />, text: 'Архитектурный дизайн' },
        { icon: <Sparkles />, text: 'Подсветка' },
        { icon: <Award />, text: 'Монументальность' },
        { icon: <Shield />, text: 'Долговечность' }
      ],
      tags: ['Стелы', 'Въездные знаки', 'Навигация'],
      images: getProductImages('steles')
    },
    {
      id: 6,
      name: 'Арт-объекты из металла',
      category: 'artobjects',
      description: 'Создание уникальных арт-объектов и скульптур из металла по вашим эскизам',
      features: ['Дизайн-проект', 'Художественная ковка', 'Сварка', 'Покраска'],
      specs: { 
        'Материалы': 'Металл', 
        'Стиль': 'Любой', 
        'Размеры': 'Любые',
        'Тип объектов': 'Индивидуальные'
      },
      advantages: [
        { icon: <Palette />, text: 'Уникальный дизайн' },
        { icon: <Sparkles />, text: 'Креативный подход' },
        { icon: <Award />, text: 'Ручная работа' },
        { icon: <Star />, text: 'Эксклюзивность' }
      ],
      tags: ['Арт', 'Дизайн', 'Скульптуры'],
      images: getProductImages('artobjects')
    },
    {
      id: 7,
      name: 'Металлические таблички',
      category: 'signage',
      description: 'Изготовление адресных, информационных и рекламных табличек из высококачественных материалов',
      features: ['Гравировка', 'Лазерная резка', 'Покраска', 'Монтаж'],
      specs: { 
        'Материалы': 'Металл', 
        'Типы': 'Адресные, Информационные, Рекламные', 
        'Крепление': 'Различное',
        'Стойкость': 'К атмосферным воздействиям'
      },
      advantages: [
        { icon: <MapPin />, text: 'Четкость нанесения' },
        { icon: <Shield />, text: 'Долговечность' },
        { icon: <Sparkles />, text: 'Современные технологии' },
        { icon: <Clock />, text: 'Быстрое изготовление' }
      ],
      tags: ['Таблички', 'Вывески', 'Информация'],
      images: getProductImages('signage')
    }
  ];

  // Убрана фильтрация - показываем все продукты
  const displayedProducts = products;

  const scrollToContacts = () => {
    window.location.href = '/#contacts';
  };

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : <Filter />;
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : '#FF6B35';
  };

  const getCategoryGradient = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.gradient : 'linear-gradient(135deg, #FF6B35 0%, #FF9E00 100%)';
  };

  const nextImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setActiveImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setActiveImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="catalog-page">
      {/* Hero Section */}
      <section className="catalog-hero">
        <div className="container">
          <motion.div 
            className="catalog-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles size={20} />
              <span>Наши лучшие работы</span>
            </motion.div>
            
            <h1 className="catalog-title">
              Наши <span className="gradient-text">направления</span>
            </h1>
            <p className="catalog-subtitle">
              Комплексные решения в строительстве, металлообработке, фасадных работах и архитектурных элементах. 
              Качество и надежность в каждой детали.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="catalog-content">
        <div className="container">
          
          {/* Сетка продуктов - фильтрация убрана */}
          <motion.div 
            className="products-grid"
            layout
          >
            <AnimatePresence mode="wait">
              {displayedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="product-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => {
                    setSelectedProduct(product);
                    setActiveImageIndex(0);
                  }}
                >
                  {/* Изображение продукта */}
                  <div className="product-image-container">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="product-image"
                      loading="lazy"
                    />
                    
                    <div className="image-hover-overlay">
                      <div className="view-more">
                        <ExternalLink size={24} />
                        <span>Смотреть примеры</span>
                      </div>
                    </div>
                    
                    <div className="image-count-badge">
                      <ImageIcon size={14} />
                      <span>{product.images.length}</span>
                    </div>
                  </div>
                  
                  <div className="product-content">
                    <div className="product-header">
                      <div 
                        className="product-category"
                        style={{ color: getCategoryColor(product.category) }}
                      >
                        {getCategoryIcon(product.category)}
                        <span>{categories.find(c => c.id === product.category)?.name}</span>
                      </div>
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                    </div>
                    
                    <div className="product-advantages">
                      {product.advantages.slice(0, 2).map((advantage, index) => (
                        <div key={index} className="advantage-item">
                          <div 
                            className="advantage-icon"
                            style={{ color: getCategoryColor(product.category) }}
                          >
                            {advantage.icon}
                          </div>
                          <span className="advantage-text">{advantage.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="product-features">
                      <h4 className="features-title">Что включаем:</h4>
                      <div className="features-list">
                        {product.features.map((feature, index) => (
                          <div key={index} className="feature-item">
                            <div 
                              className="feature-check"
                              style={{ background: getCategoryColor(product.category) }}
                            >
                              <Check size={12} />
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="product-tags">
                      {product.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="tag"
                          style={{ 
                            background: `${getCategoryColor(product.category)}15`,
                            color: getCategoryColor(product.category),
                            borderColor: `${getCategoryColor(product.category)}30`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div 
                    className="product-footer"
                    style={{ 
                      borderTop: `1px solid ${getCategoryColor(product.category)}20`,
                      background: `${getCategoryColor(product.category)}05`
                    }}
                  >
                    <div className="specs-preview">
                      {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="spec-preview-item">
                          <span className="spec-key">{key}:</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="view-details"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                        setActiveImageIndex(0);
                      }}
                    >
                      <span>Подробнее</span>
                      <ArrowRight size={18} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="catalog-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="cta-badge">
              <Award size={20} />
              <span>Профессиональный подход</span>
            </div>
            
            <h2>Интересует конкретное направление?</h2>
            <p className="cta-description">
              Посмотрите полное портфолио наших работ по каждому направлению и 
              ознакомьтесь с подробным описанием услуг
            </p>
            
            <div className="cta-actions">
              <motion.a 
                href="/portfolio"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Смотреть портфолио</span>
                <ExternalLink size={20} />
              </motion.a>
              
              <motion.button 
                className="btn btn-secondary"
                onClick={scrollToContacts}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Связаться с нами</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Модальное окно продукта */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            className="product-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              className="product-modal"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProduct(null)}
              >
                <X size={24} />
              </button>
              
              <div className="modal-content">
                {/* Галерея изображений */}
                {selectedProduct.images && selectedProduct.images.length > 0 && (
                  <div className="modal-gallery">
                    <div className="gallery-main">
                      <img 
                        src={selectedProduct.images[activeImageIndex]} 
                        alt={`${selectedProduct.name} - фото ${activeImageIndex + 1}`}
                        className="modal-main-image"
                      />
                      
                      {selectedProduct.images.length > 1 && (
                        <>
                          <button 
                            className="gallery-nav gallery-prev"
                            onClick={prevImage}
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button 
                            className="gallery-nav gallery-next"
                            onClick={nextImage}
                          >
                            <ChevronRight size={24} />
                          </button>
                          
                          <div className="gallery-counter">
                            {activeImageIndex + 1} / {selectedProduct.images.length}
                          </div>
                        </>
                      )}
                    </div>
                    
                    {selectedProduct.images.length > 1 && (
                      <div className="gallery-thumbnails">
                        {selectedProduct.images.slice(0, 5).map((image, index) => (
                          <button
                            key={index}
                            className={`thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                            onClick={() => setActiveImageIndex(index)}
                            style={{
                              borderColor: index === activeImageIndex ? 
                                getCategoryColor(selectedProduct.category) : 'transparent'
                            }}
                          >
                            <img 
                              src={image} 
                              alt={`Миниатюра ${index + 1}`}
                              className="thumbnail-image"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                <div className="modal-header">
                  <div 
                    className="modal-category"
                    style={{ color: getCategoryColor(selectedProduct.category) }}
                  >
                    {getCategoryIcon(selectedProduct.category)}
                    <span>{categories.find(c => c.id === selectedProduct.category)?.name}</span>
                  </div>
                  <h2>{selectedProduct.name}</h2>
                  <p className="modal-description">{selectedProduct.description}</p>
                </div>
                
                <div className="modal-details-grid">
                  {/* Преимущества */}
                  <div className="modal-section modal-advantages">
                    <h4>
                      <span className="section-icon">✨</span>
                      Наши преимущества
                    </h4>
                    <div className="advantages-grid">
                      {selectedProduct.advantages.map((advantage, index) => (
                        <div key={index} className="advantage-card">
                          <div 
                            className="advantage-icon-wrapper"
                            style={{ 
                              background: `${getCategoryColor(selectedProduct.category)}15`,
                              color: getCategoryColor(selectedProduct.category)
                            }}
                          >
                            {advantage.icon}
                          </div>
                          <span className="advantage-text">{advantage.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Характеристики */}
                  <div className="modal-section modal-specs">
                    <h4>
                      <span className="section-icon">📋</span>
                      Характеристики
                    </h4>
                    <div className="specs-list">
                      {Object.entries(selectedProduct.specs).map(([key, value]) => (
                        <div key={key} className="spec-item">
                          <span className="spec-label">{key}</span>
                          <div className="spec-value-wrapper">
                            <span className="spec-value">{value}</span>
                            <div 
                              className="spec-line"
                              style={{ background: getCategoryColor(selectedProduct.category) }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Что включаем */}
                  <div className="modal-section modal-features">
                    <h4>
                      <span className="section-icon">✅</span>
                      Что включаем
                    </h4>
                    <div className="features-list">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <div 
                            className="feature-check"
                            style={{ background: getCategoryColor(selectedProduct.category) }}
                          >
                            <Check size={14} />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Ключевые слова */}
                  <div className="modal-section modal-tags">
                    <h4>
                      <span className="section-icon">🏷️</span>
                      Ключевые слова
                    </h4>
                    <div className="tags-list">
                      {selectedProduct.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="tag"
                          style={{ 
                            background: `${getCategoryColor(selectedProduct.category)}15`,
                            color: getCategoryColor(selectedProduct.category),
                            borderColor: `${getCategoryColor(selectedProduct.category)}30`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Catalog;