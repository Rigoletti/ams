import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  HardHat, 
  PanelTop, 
  Palette,
  MapPin,
  Factory,
  CheckCircle,
  ChevronRight,
  ArrowUpRight,
  Ruler,
  Sparkles,
  Users,
  Award,
  Clock,
  Shield,
  Truck,
  Infinity as InfinityIcon,
  DoorOpen,
  Sun
} from 'lucide-react';
import '../../assets/styles/home/Home.css';
import { Link } from 'react-router-dom';

// Импорт изображений для всех направлений (только по 3 фото)
import construction1 from '../../assets/img/construction/1.webp';
import construction2 from '../../assets/img/construction/2.webp';
import construction3 from '../../assets/img/construction/3.webp';

import metalstructure1 from '../../assets/img/metalstructure/1.webp';
import metalstructure2 from '../../assets/img/metalstructure/2.webp';
import metalstructure3 from '../../assets/img/metalstructure/3.webp';

import facades1 from '../../assets/img/facades/1.webp';
import facades2 from '../../assets/img/facades/2.webp';
import facades3 from '../../assets/img/facades/3.webp';

import art1 from '../../assets/img/art/1.webp';
import art2 from '../../assets/img/art/2.webp';
import art3 from '../../assets/img/art/3.webp';

import stel1 from '../../assets/img/stel/1.webp';
import stel2 from '../../assets/img/stel/2.webp';
import stel3 from '../../assets/img/stel/3.webp';

import vhod_grup1 from '../../assets/img/vhod_grup/1.webp';
import vhod_grup2 from '../../assets/img/vhod_grup/2.webp';
import vhod_grup3 from '../../assets/img/vhod_grup/3.webp';

import cards1 from '../../assets/img/cards/1.webp';

const Home = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  // Функция для получения изображений по категории (только по 3 фото)
  const getIndustryImages = (category) => {
    switch(category) {
      case 'Строительство':
        return [
          { src: construction1, alt: 'Строительные работы 1' },
          { src: construction2, alt: 'Строительные работы 2' },
          { src: construction3, alt: 'Строительные работы 3' }
        ];
      case 'Металлоконструкции':
        return [
          { src: metalstructure1, alt: 'Металлоконструкции 1' },
          { src: metalstructure2, alt: 'Металлоконструкции 2' },
          { src: metalstructure3, alt: 'Металлоконструкции 3' }
        ];
      case 'Обшивка фасадов':
        return [
          { src: facades1, alt: 'Фасадные работы 1' },
          { src: facades2, alt: 'Фасадные работы 2' },
          { src: facades3, alt: 'Фасадные работы 3' }
        ];
      case 'Входные группы, навесы':
        return [
          { src: vhod_grup1, alt: 'Входная группа 1' },
          { src: vhod_grup2, alt: 'Входная группа 2' },
          { src: vhod_grup3, alt: 'Входная группа 3' }
        ];
      case 'Стелы':
        return [
          { src: stel1, alt: 'Стела 1' },
          { src: stel2, alt: 'Стела 2' },
          { src: stel3, alt: 'Стела 3' }
        ];
      case 'Артобъекты':
        return [
          { src: art1, alt: 'Арт-объект 1' },
          { src: art2, alt: 'Арт-объект 2' },
          { src: art3, alt: 'Арт-объект 3' }
        ];
      case 'Таблички':
        return [
          { src: cards1, alt: 'Табличка 1' }
        ];
      default:
        return [];
    }
  };

  const heroStats = [
    { value: '12+', label: 'Лет опыта', icon: <Clock /> },
    { value: '500+', label: 'Проектов', icon: <CheckCircle /> },
    { value: '250+', label: 'Клиентов', icon: <Users /> },
  ];

  const industries = [
    {
      id: 0,
      title: 'Строительство',
      icon: <Building2 />,
      description: 'Полный цикл строительных работ от проектирования до сдачи объекта под ключ',
      projects: ['Промышленные здания', 'Торговые центры', 'Остановки', 'КПП'],
      color: '#FF6B35',
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF9E00 100%)',
      features: [
        { icon: <Building2 />, text: 'Проектирование' },
        { icon: <HardHat />, text: 'Строительство' },
        { icon: <Shield />, text: 'Контроль качества' }
      ]
    },
    {
      id: 1,
      title: 'Металлоконструкции',
      icon: <Factory />,
      description: 'Изготовление и монтаж металлических конструкций любой сложности по индивидуальным чертежам',
      projects: [],
      color: '#00B4D8',
      gradient: 'linear-gradient(135deg, #00B4D8 0%, #4CC9F0 100%)',
      features: [
        { icon: <Ruler />, text: 'Высокая точность' },
        { icon: <Sparkles />, text: 'Лазерная резка' },
        { icon: <Shield />, text: 'Антикоррозийная обработка' }
      ]
    },
    {
      id: 2,
      title: 'Обшивка фасадов',
      icon: <PanelTop />,
      description: 'Современные решения для наружной отделки зданий с гарантией качества',
      projects: ['Вентилируемые фасады', 'Композитные панели', 'Керамогранит', 'Металлокассеты'],
      color: '#7209B7',
      gradient: 'linear-gradient(135deg, #7209B7 0%, #9D4EDD 100%)',
      features: [
        { icon: <PanelTop />, text: 'Современные материалы' },
        { icon: <Shield />, text: 'Защита здания' },
        { icon: <Sparkles />, text: 'Энергоэффективность' }
      ]
    },
    {
      id: 3,
      title: 'Входные группы, навесы',
      icon: <DoorOpen />,
      description: 'Проектирование и изготовление входных групп, козырьков и навесов любой сложности',
      projects: ['Входные группы', 'Козырьки', 'Навесы для авто', 'Тентовые конструкции'],
      color: '#4CC9F0',
      gradient: 'linear-gradient(135deg, #4CC9F0 0%, #56CFE1 100%)',
      features: [
        { icon: <DoorOpen />, text: 'Современный дизайн' },
        { icon: <Shield />, text: 'Надежность' },
        { icon: <Sun />, text: 'Защита от осадков' }
      ]
    },
    {
      id: 4,
      title: 'Стелы',
      icon: <MapPin />,
      description: 'Изготовление архитектурно-художественных стел и въездных знаков',
      projects: ['Въездные стелы', 'Навигационные стелы', 'Информационные стелы', 'Монументальные знаки'],
      color: '#F72585',
      gradient: 'linear-gradient(135deg, #F72585 0%, #B5179E 100%)',
      features: [
        { icon: <MapPin />, text: 'Архитектурный дизайн' },
        { icon: <Sparkles />, text: 'Подсветка' },
        { icon: <Award />, text: 'Монументальность' }
      ]
    },
    {
      id: 5,
      title: 'Артобъекты',
      icon: <Palette />,
      description: 'Создание уникальных художественных конструкций из металла по вашим эскизам',
      projects: ['Скульптуры', 'Инсталляции', 'Декоративные элементы', 'Архитектурный декор'],
      color: '#FF9E00',
      gradient: 'linear-gradient(135deg, #FF9E00 0%, #FFB700 100%)',
      features: [
        { icon: <Palette />, text: 'Дизайн-проект' },
        { icon: <Sparkles />, text: 'Художественная ковка' },
        { icon: <Award />, text: 'Эксклюзивность' }
      ]
    },
    {
      id: 6,
      title: 'Таблички',
      icon: <MapPin />,
      description: 'Изготовление адресных, информационных и рекламных табличек из высококачественных материалов',
      projects: ['Адресные таблички', 'Навигационные указатели', 'Информационные стелы', 'Брендирование'],
      color: '#00B4D8',
      gradient: 'linear-gradient(135deg, #00B4D8 0%, #4CC9F0 100%)',
      features: [
        { icon: <MapPin />, text: 'Четкость нанесения' },
        { icon: <Shield />, text: 'Долговечность' },
        { icon: <Clock />, text: 'Быстрое изготовление' }
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Консультация',
      description: 'Анализ потребностей и техническое задание',
      icon: <Users />
    },
    {
      step: '02',
      title: 'Проектирование',
      description: 'Разработка 3D-моделей и чертежей',
      icon: <Ruler />
    },
    {
      step: '03',
      title: 'Изготовление',
      description: 'Производство на современном оборудовании',
      icon: <Factory />
    },
    {
      step: '04',
      title: 'Контроль качества',
      description: 'Многоступенчатая проверка на всех этапах',
      icon: <Shield />
    },
    {
      step: '05',
      title: 'Доставка и монтаж',
      description: 'Логистика и профессиональный монтаж',
      icon: <Truck />
    }
  ];

  const advantages = [
    {
      title: 'Собственное производство',
      description: 'Полный цикл на современном оборудовании',
      color: '#FF6B35'
    },
    {
      title: 'Гарантия качества',
      description: 'Сертифицированные материалы и технологии',
      color: '#00B4D8'
    },
    {
      title: 'Соблюдение сроков',
      description: 'Четкое планирование и контроль этапов',
      color: '#7209B7'
    },
    {
      title: 'Индивидуальный подход',
      description: 'Решение нестандартных задач любой сложности',
      color: '#4CC9F0'
    }
  ];

  return (
    <div className="home-constructor" ref={containerRef}>
      {/* Hero Section */}
      <section className="hero-section section-with-divider">
        <div className="hero-bg">
          <div className="gradient-overlay"></div>
          <motion.div 
            className="abstract-shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="abstract-shape shape-2"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div 
            className="abstract-shape shape-3"
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="section-container">
          <motion.div 
            className="hero-content"
            style={{ opacity, scale }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span>Профессиональное строительство с 2013 года</span>
            </motion.div>

            <div className="title-wrapper">
              <motion.div
                className="title-line"
                initial={{ width: 0 }}
                animate={{ width: '60px' }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="title-main">СТРОИТЕЛЬСТВО</span>
                <span className="title-main">И МЕТАЛЛОКОНСТРУКЦИИ</span>
                <span className="title-sub">Под ключ • Гарантия • Качество</span>
              </motion.h1>
              
              <motion.div
                className="title-line"
                initial={{ width: 0 }}
                animate={{ width: '60px' }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Создаем промышленные объекты, металлоконструкции и архитектурные решения 
              с использованием современных технологий и материалов
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
>
  <Link 
    to="/catalog"
    className="btn-primary hero-cta"
  >
    <span>Смотреть проекты</span>
    <ArrowUpRight size={24} />
  </Link>
</motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-value">
                    {stat.value}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="scroll-line"></div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="industries-section section-with-divider">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">
              <HardHat />
              <span>Отрасли</span>
            </div>
            <h2 className="section-title">
              Основные <span className="highlight">направления</span> работы
            </h2>
            <p className="section-description">
              Посмотрите примеры наших работ по каждому направлению
            </p>
          </motion.div>

          <div className="industries-tabs">
            <div className="tabs-header">
              {industries.map((industry, index) => (
                <motion.button
                  key={industry.id}
                  className={`tab-button ${activeIndustry === index ? 'active' : ''}`}
                  onClick={() => setActiveIndustry(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ color: activeIndustry === index ? industry.color : 'inherit' }}
                >
                  {industry.icon}
                  <span>{industry.title}</span>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                className="tab-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="industry-details">
                  <div className="industry-info">
                    <div className="industry-header">
                      <div className="industry-title-wrapper">
                        <h3 className="industry-title" style={{ color: industries[activeIndustry].color }}>
                          {industries[activeIndustry].title}
                        </h3>
                      </div>
                    </div>
                    <p className="industry-description">
                      {industries[activeIndustry].description}
                    </p>
                    
                    <div className="industry-features">
                      {industries[activeIndustry].features.map((feature, idx) => (
                        <div key={idx} className="feature-tag">
                          <div className="feature-icon" style={{ color: industries[activeIndustry].color }}>
                            {feature.icon}
                          </div>
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    {industries[activeIndustry].projects.length > 0 && (
                      <ul className="industry-projects">
                        {industries[activeIndustry].projects.map((project, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <CheckCircle style={{ color: industries[activeIndustry].color }} />
                            <span>{project}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                    
                    <motion.a 
                      href="/ams/catalog"
                      className="btn-secondary"
                      whileHover={{ x: 10 }}
                      style={{ background: industries[activeIndustry].gradient }}
                    >
                      <span>Смотреть больше проектов</span>
                      <ChevronRight />
                    </motion.a>
                  </div>
                  
                  <div className="industry-visual">
                    <div className="industry-gallery">
                      {getIndustryImages(industries[activeIndustry].title).map((image, index) => (
                        <motion.div
                          key={index}
                          className="gallery-image-container"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="gallery-image"
                            loading="lazy"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section-with-divider">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <InfinityIcon />
              </motion.div>
              <span>Наш процесс</span>
            </div>
            <h2 className="section-title">
              Как мы <span className="highlight">работаем</span>
            </h2>
            <p className="section-description">
              Прозрачный и эффективный процесс от первой встречи до успешного результата
            </p>
          </motion.div>

          <div className="process-steps-container">
            <div className="process-steps">
              {process.map((step, index) => {
                const industry = industries[index % industries.length];
                
                return (
                  <motion.div
                    key={step.step}
                    className="process-step"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <div className="step-top">
                      <div className="step-number" style={{ 
                        background: industry.gradient,
                        boxShadow: `0 4px 20px ${industry.gradient.split(',')[1]}40`
                      }}>
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="step-content">
                      <div className="step-icon">
                        {step.icon}
                      </div>
                      
                      <div className="step-info">
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {index < process.length - 1 && (
                      <div className="step-connector">
                        <div className="connector-line" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">
              <Award />
              <span>Наши преимущества</span>
            </div>
            <h2 className="section-title">
              Почему <span className="highlight">выбирают нас</span>
            </h2>
            <p className="section-description">
              Уникальные решения, которые делают нас лучшими в своей отрасли
            </p>
          </motion.div>

          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="advantage-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: `0 10px 30px ${advantage.color}20`
                }}
              >
                <div className="advantage-index">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="advantage-content">
                  <h3 className="advantage-title">{advantage.title}</h3>
                  <p className="advantage-description">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;