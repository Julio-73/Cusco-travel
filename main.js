/* ==========================================================================
   CUSCO LUXURY TRAVEL INTERACTION SCRIPT
   ========================================================================== */

/* ==========================================================================
   CUSCO LUXURY TRAVEL INTERACTION SCRIPT
   ========================================================================== */

// --- Translations ---
const LANG = {
    es: 'ES', en: 'EN'
};
let currentLang = localStorage.getItem('cusco-lang') || 'es';

const translations = {
    // Nav
    'nav-home': { es: 'Inicio', en: 'Home' },
    'nav-destinations': { es: 'Destinos', en: 'Destinations' },
    'nav-tours': { es: 'Tours', en: 'Tours' },
    'nav-experiences': { es: 'Experiencias', en: 'Experiences' },
    'nav-gallery': { es: 'Galería', en: 'Gallery' },
    'nav-contact': { es: 'Contacto', en: 'Contact' },
    'mob-home': { es: 'Inicio', en: 'Home' },
    'mob-destinations': { es: 'Destinos', en: 'Destinations' },
    'mob-tours': { es: 'Tours', en: 'Tours' },
    'mob-experiences': { es: 'Experiencias', en: 'Experiences' },
    'mob-gallery': { es: 'Galería', en: 'Gallery' },
    'mob-contact': { es: 'Contacto', en: 'Contact' },
    'foot-home': { es: 'Inicio', en: 'Home' },
    'foot-destinations': { es: 'Destinos', en: 'Destinations' },
    'foot-tours': { es: 'Tours', en: 'Tours' },
    'foot-gallery': { es: 'Galería', en: 'Gallery' },
    'foot-contact': { es: 'Contacto', en: 'Contact' },
    
    // Preloader
    'preloader-title': { es: 'CUSCO TRAVEL', en: 'CUSCO TRAVEL' },
    'preloader-text': { es: 'Preparando su experiencia de lujo...', en: 'Preparing your luxury experience...' },
    
    // Hero slides
    'slide-1-title': { es: 'VISITE<br><span class="highlight">CUSCO</span>', en: 'DISCOVER<br><span class="highlight">CUSCO</span>' },
    'slide-1-sub': { es: 'Descubra la mágica capital del Imperio Inca. Historia milenaria, paisajes imponentes y experiencias de lujo inolvidables le esperan.', en: 'Discover the magical capital of the Inca Empire. Millenary history, imposing landscapes and unforgettable luxury experiences await you.' },
    'slide-1-btn': { es: 'EXPLORAR CUSCO <span class="arrow">→</span>', en: 'EXPLORE CUSCO <span class="arrow">→</span>' },
    'slide-2-title': { es: 'PIEDRAS<br><span class="highlight">SAGRADAS</span>', en: 'SACRED<br><span class="highlight">STONES</span>' },
    'slide-2-sub': { es: 'Sacsayhuamán se erige como un testimonio monumental de la ingeniería inca. Contemple colosales estructuras de piedra talladas con precisión impecable.', en: 'Sacsayhuamán stands as a monumental testament to Inca engineering. Behold colossal stone structures carved with impeccable precision.' },
    'slide-2-btn': { es: 'EXPLORAR CUSCO <span class="arrow">→</span>', en: 'EXPLORE CUSCO <span class="arrow">→</span>' },
    'slide-3-title': { es: 'VALLE<br><span class="highlight">INCA</span>', en: 'INCA<br><span class="highlight">VALLEY</span>' },
    'slide-3-sub': { es: 'Explore Písac, donde imponentes terrazas agrícolas se fusionan con el cielo, contemplando un vibrante valle artesanal a sus pies.', en: 'Explore Pisac, where imposing agricultural terraces merge with the sky, overlooking a vibrant artisan valley at your feet.' },
    'slide-3-btn': { es: 'EXPLORAR CUSCO <span class="arrow">→</span>', en: 'EXPLORE CUSCO <span class="arrow">→</span>' },
    'slide-4-title': { es: 'PUEBLO<br><span class="highlight">VIVIENTE</span>', en: 'LIVING<br><span class="highlight">VILLAGE</span>' },
    'slide-4-sub': { es: 'Ollantaytambo permanece como un pueblo inca viviente, enclavado entre colosales fortalezas de montaña que resuenan historias de resistencia y belleza.', en: 'Ollantaytambo remains a living Inca village, nestled between colossal mountain fortresses that echo stories of resistance and beauty.' },
    'slide-5-title': { es: 'MONTAÑA<br><span class="highlight">DE COLORES</span>', en: 'RAINBOW<br><span class="highlight">MOUNTAIN</span>' },
    'slide-5-sub': { es: 'Ascienda a la Montaña de Colores. Maravíllese con las espectaculares franjas minerales de Vinicunca pintadas sobre el techo de los Andes.', en: 'Ascend to the Rainbow Mountain. Marvel at the spectacular mineral stripes of Vinicunca painted on the roof of the Andes.' },
    'scroll-text': { es: 'DESPLÁCESE PARA DESCUBRIR', en: 'SCROLL TO DISCOVER' },

    // Destinations section
    'section-tagline-dest': { es: 'Destinos seleccionados', en: 'Selected destinations' },
    'section-title-dest': { es: 'RECOMENDACIONES DE DESTINOS', en: 'DESTINATION RECOMMENDATIONS' },
    'card-rank-1': { es: '1.º Lugar', en: '1st Place' },
    'card-name-1': { es: 'Machu Picchu', en: 'Machu Picchu' },
    'card-desc-1': { es: 'El legendario santuario en las nubes.', en: 'The legendary sanctuary in the clouds.' },
    'card-btn-1': { es: 'EXPLORAR EXCURSIÓN <span class="arrow">→</span>', en: 'EXPLORE TOUR <span class="arrow">→</span>' },
    'card-rank-2': { es: '2.º Lugar', en: '2nd Place' },
    'card-name-2': { es: 'Sacsayhuamán', en: 'Sacsayhuamán' },
    'card-desc-2': { es: 'Baluartes de piedra del valle de Cusco.', en: 'Stone bastions of the Cusco valley.' },
    'card-rank-3': { es: '3.º Lugar', en: '3rd Place' },
    'card-name-3': { es: 'Písac', en: 'Písac' },
    'card-desc-3': { es: 'Sistemas de terrazas y mercados tradicionales.', en: 'Terrace systems and traditional markets.' },
    'card-rank-4': { es: '4.º Lugar', en: '4th Place' },
    'card-name-4': { es: 'Ollantaytambo', en: 'Ollantaytambo' },
    'card-desc-4': { es: 'Pueblo inca viviente y fortaleza real.', en: 'Living Inca village and royal fortress.' },
    'card-rank-5': { es: '5.º Lugar', en: '5th Place' },
    'card-name-5': { es: 'Montaña de Colores', en: 'Rainbow Mountain' },
    'card-desc-5': { es: 'Espectaculares pigmentos geológicos de Vinicunca.', en: 'Spectacular geological pigments of Vinicunca.' },

    // Travel & Enjoy
    'enjoy-title': { es: 'VIAJE Y<br>DISFRUTE SUS<br>VACACIONES', en: 'TRAVEL AND<br>ENJOY YOUR<br>VACATION' },
    'enjoy-text': { es: 'Viva las maravillas ancestrales del Perú a través de paisajes imponentes, historia inca y aventuras inolvidables.', en: 'Experience the ancestral wonders of Peru through imposing landscapes, Inca history and unforgettable adventures.' },
    'book-exp-btn': { es: 'Reservar Experiencia', en: 'Book Experience' },

    // Tours section
    'tours-tagline': { es: 'Itinerarios selectos', en: 'Select itineraries' },
    'tours-title': { es: 'TOURS POPULARES', en: 'POPULAR TOURS' },
    'tour-name-mp': { es: 'TOUR MACHU PICCHU', en: 'MACHU PICCHU TOUR' },
    'tour-name-sh': { es: 'TOUR SACSAYHUAMÁN', en: 'SACSAYHUAMÁN TOUR' },
    'tour-name-pisac': { es: 'TOUR PÍSAC', en: 'PÍSAC TOUR' },
    'tour-name-oll': { es: 'TOUR OLLANTAYTAMBO', en: 'OLLANTAYTAMBO TOUR' },
    'tour-name-rm': { es: 'TOUR MONTAÑA DE COLORES', en: 'RAINBOW MOUNTAIN TOUR' },
    'tour-feat-1': { es: 'Día Completo', en: 'Full Day' },
    'tour-feat-2': { es: 'Guía Profesional', en: 'Professional Guide' },
    'tour-feat-3': { es: 'Transporte Incluido', en: 'Transport Included' },
    'tour-feat-4': { es: 'Experiencia del Amanecer', en: 'Sunrise Experience' },
    'tour-feat-5': { es: 'Medio Día', en: 'Half Day' },
    'tour-feat-6': { es: 'Tour Histórico', en: 'Historical Tour' },
    'tour-feat-7': { es: 'Experiencia Cultural', en: 'Cultural Experience' },
    'tour-feat-8': { es: 'Transporte Privado', en: 'Private Transport' },
    'tour-feat-9': { es: 'Sitio Arqueológico', en: 'Archaeological Site' },
    'tour-feat-10': { es: 'Mercado Tradicional', en: 'Traditional Market' },
    'tour-feat-11': { es: 'Experiencia Guiada', en: 'Guided Experience' },
    'tour-feat-12': { es: 'Almuerzo Buffet', en: 'Buffet Lunch' },
    'tour-feat-13': { es: 'Valle Sagrado', en: 'Sacred Valley' },
    'tour-feat-14': { es: 'Arquitectura Inca', en: 'Inca Architecture' },
    'tour-feat-15': { es: 'Grupo Reducido', en: 'Small Group' },
    'tour-feat-16': { es: 'Aventura de Senderismo', en: 'Hiking Adventure' },
    'tour-feat-17': { es: 'Desayuno y Almuerzo Incluidos', en: 'Breakfast & Lunch Included' },
    'tour-feat-18': { es: 'Vistas Panorámicas', en: 'Panoramic Views' },
    'tour-feat-19': { es: 'Kit de Oxígeno Provisto', en: 'Oxygen Kit Provided' },
    'tour-tag-mp': { es: 'Favorito', en: 'Favorite' },
    'tour-btn-text': { es: 'Reservar Tour', en: 'Book Tour' },

    // Stats
    'stat-1-num': { es: 'Visitantes Satisfechos', en: 'Satisfied Visitors' },
    'stat-2-num': { es: 'Tours Guiados', en: 'Guided Tours' },
    'stat-3-num': { es: 'Años de Experiencia', en: 'Years of Experience' },
    'stat-4-num': { es: 'Tasa de Satisfacción', en: 'Satisfaction Rate' },

    // Expedition timeline
    'exp-tagline': { es: 'Viaje Exclusivo', en: 'Exclusive Journey' },
    'exp-title': { es: 'CRONOGRAMA DE EXPEDICIÓN VIP DE 7 DÍAS', en: '7-DAY VIP EXPEDITION SCHEDULE' },
    'day-01': { es: 'BIENVENIDA', en: 'WELCOME' },
    'day-02': { es: 'VALLE SAGRADO', en: 'SACRED VALLEY' },
    'day-03': { es: 'FORTALEZA', en: 'FORTRESS' },
    'day-04': { es: 'PUEBLO VIVO', en: 'LIVING TOWN' },
    'day-05': { es: 'MACHU PICCHU', en: 'MACHU PICCHU' },
    'day-06': { es: 'MONTAÑA DE COLORES', en: 'RAINBOW MOUNTAIN' },
    'day-07': { es: 'DESPEDIDA', en: 'FAREWELL' },

    // Gallery
    'gallery-tagline': { es: 'Viaje Visual', en: 'Visual Journey' },
    'gallery-title': { es: 'GALERÍA PREMIUM', en: 'PREMIUM GALLERY' },

    // Testimonials
    'testimonial-1-text': { es: '"Uno de los viajes más increíbles de mi vida. Los detalles, los paisajes y los guías privados fueron de primera clase mundial. Cusco Travel nos hizo sentir como de la realeza mientras explorábamos Machu Picchu."', en: '"One of the most incredible trips of my life. The details, the landscapes and the private guides were world-class. Cusco Travel made us feel like royalty while exploring Machu Picchu."' },
    'testimonial-2-text': { es: '"Todo fue perfecto. Los traslados privados, las explicaciones arqueológicas locales y las vistas impresionantes. ¡Recorrer Ollantaytambo con su guía experto fue inolvidable!"', en: '"Everything was perfect. The private transfers, the local archaeological explanations and the stunning views. Touring Ollantaytambo with their expert guide was unforgettable!"' },
    'testimonial-author-1': { es: 'David Harrison', en: 'David Harrison' },
    'testimonial-author-2': { es: 'Sophia Martinez', en: 'Sophia Martinez' },
    'testimonial-country-1': { es: 'Reino Unido', en: 'United Kingdom' },
    'testimonial-country-2': { es: 'Estados Unidos', en: 'United States' },

    // Map
    'map-tagline': { es: 'Viaje Interactivo', en: 'Interactive Journey' },
    'map-title': { es: 'MAPA DE EXPEDICIÓN DEL VALLE SAGRADO', en: 'SACRED VALLEY EXPEDITION MAP' },
    'map-info-tag': { es: 'Lugar Destacado', en: 'Featured Location' },
    'map-alt-label': { es: 'Altitud:', en: 'Altitude:' },
    'map-time-label': { es: 'Tiempo de Viaje:', en: 'Travel Time:' },
    'map-exc-label': { es: 'Excursión:', en: 'Excursion:' },
    'map-tour-btn': { es: 'Ver Excursión', en: 'View Excursion' },

    // Stargazing
    'star-tagline': { es: 'Cosmología Andina Celestial', en: 'Celestial Andean Cosmology' },
    'star-title': { es: 'CIELO INTERACTIVO DE OBSERVACIÓN DE ESTRELLAS INCA', en: 'INTERACTIVE INCA STARGAZING SKY' },
    'star-intro': { es: 'Los Incas observaban el cielo nocturno de Cusco no solo como estrellas individuales, sino como estructuras cósmicas profundas. Pase el cursor (o toque en el móvil) sobre las constelaciones brillantes para trazar sus formas y descubrir sus leyendas.', en: 'The Incas observed the Cusco night sky not just as individual stars, but as profound cosmic structures. Hover (or tap on mobile) over the bright constellations to trace their shapes and discover their legends.' },
    'visor-label': { es: 'VISOR ACTIVO', en: 'ACTIVE VIEWFINDER' },

    // Footer
    'footer-desc': { es: 'Experiencias de lujo a través del corazón del Imperio Inca. Ofrecemos tours privados a medida, historiadores expertos locales y alojamientos de ultra-lujo.', en: 'Luxury experiences through the heart of the Inca Empire. We offer bespoke private tours, local expert historians and ultra-luxury accommodation.' },
    'footer-title-links': { es: 'Enlaces Rápidos', en: 'Quick Links' },
    'footer-title-contact': { es: 'Contáctenos', en: 'Contact Us' },
    'footer-copyright': { es: '&copy; 2026 Cusco Travel. Todos los derechos reservados.', en: '&copy; 2026 Cusco Travel. All rights reserved.' },
    'footer-tagline': { es: 'Diseñado para Exploradores de Lujo.', en: 'Designed for Luxury Explorers.' },

    // Booking modal
    'booking-title': { es: 'Experiencia de Lujo Solicitada', en: 'Luxury Experience Requested' },
    'booking-text': { es: 'Gracias por elegir Cusco Travel. Nuestro concierge de viajes privado se comunicará con usted a la brevedad para personalizar su itinerario de lujo.', en: 'Thank you for choosing Cusco Travel. Our private travel concierge will contact you shortly to customize your luxury itinerary.' },
    'booking-ok': { es: 'Confirmar', en: 'Confirm' },

    // Planner
    'step-1-title': { es: 'Seleccione su estilo de viaje', en: 'Select your travel style' },
    'step-1-desc': { es: 'Personalizando su experiencia de acuerdo a sus deseos personales.', en: 'Customizing your experience according to your personal wishes.' },
    'step-2-title': { es: 'Duración y Huéspedes', en: 'Duration & Guests' },
    'step-2-desc': { es: '¿Cuánto tiempo y con quién va a explorar?', en: 'How long and with whom will you explore?' },
    'step-3-title': { es: 'Alojamiento Preferido', en: 'Preferred Lodging' },
    'step-3-desc': { es: 'Seleccione dónde desea descansar después de sus excursiones.', en: 'Select where you wish to rest after your excursions.' },
    'step-4-title': { es: 'Solicitar Itinerario', en: 'Request Itinerary' },
    'step-4-desc': { es: 'Ingrese sus datos para generar su borrador de itinerario personalizado.', en: 'Enter your details to generate your personalized draft itinerary.' },
    'planner-next': { es: 'Siguiente Paso →', en: 'Next Step →' },
    'planner-back': { es: '← Atrás', en: '← Back' },
    'planner-submit': { es: 'Crear Itinerario', en: 'Create Itinerary' },
    'planner-finish': { es: 'Cerrar Planificador', en: 'Close Planner' },
    'planner-success-title': { es: 'Su Borrador de Itinerario Personalizado', en: 'Your Personalized Draft Itinerary' },
    'planner-name-label': { es: 'Nombre Completo', en: 'Full Name' },
    'planner-email-label': { es: 'Correo Electrónico', en: 'Email Address' },
    'planner-name-placeholder': { es: 'John Doe', en: 'John Doe' },
    'planner-email-placeholder': { es: 'john@ejemplo.com', en: 'john@example.com' },
    'planner-duration-label': { es: 'Duración (Días)', en: 'Duration (Days)' },
    'planner-guests-label': { es: 'Huéspedes', en: 'Guests' },

    // Cookie banner
    'cookie-text': { es: 'Utilizamos cookies propias y de terceros para mejorar su experiencia. Al continuar navegando, acepta nuestra <a href="#contact" class="cookie-link">política de privacidad</a>.', en: 'We use own and third-party cookies to improve your experience. By continuing to browse, you accept our <a href="#contact" class="cookie-link">privacy policy</a>.' },
    'cookie-btn': { es: 'Aceptar', en: 'Accept' },

    // WhatsApp tooltip
    'wa-tooltip': { es: 'Chatear con Concierge', en: 'Chat with Concierge' },
};

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cusco-lang', lang);

    // Update button state
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        if (lang === 'en') langBtn.classList.add('en-mode');
        else langBtn.classList.remove('en-mode');
    }

    // Apply translations to all elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[key] && translations[key][lang]) {
            // Preserve HTML content
            el.innerHTML = translations[key][lang];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. PRELOADER & CINEMATIC THEATER CURTAINS REVEAL
    // ==========================================
    const preloader = document.getElementById('preloader');
    
    // Simulate cinematic loading delay for logo drawing path to complete
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('fade-out');
            
            // Allow the sliding curtain panels to slide out of view, then trigger scroll reveals
            setTimeout(() => {
                triggerScrollReveal();
            }, 1000);
        } else {
            triggerScrollReveal();
        }
    }, 2800); // 2.8s aligns with path drawing keyframes

    // ==========================================
    // 2. LANGUAGE TOGGLE
    // ==========================================
    applyLanguage(currentLang);
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            applyLanguage(newLang);
        });
    }

    // ==========================================
    // 3. COOKIE CONSENT BANNER
    // ==========================================
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');
    if (cookieBanner && !localStorage.getItem('cookies-accepted')) {
        setTimeout(() => cookieBanner.classList.add('show'), 1000);
        cookieAccept.addEventListener('click', () => {
            cookieBanner.classList.remove('show');
            localStorage.setItem('cookies-accepted', 'true');
        });
    }

    // ==========================================
    // 3. SCROLL PROGRESS BAR
    // ==========================================
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = progress + '%';
        });
    }

    // ==========================================
    // 4. BLUR-UP IMAGE LOADING
    // ==========================================
    document.querySelectorAll('.card-img, .tour-img, .gallery-item img').forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
            const card = img.closest('.destination-card');
            if (card) card.classList.add('img-loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
                const card = img.closest('.destination-card');
                if (card) card.classList.add('img-loaded');
            });
        }
    });

    // ==========================================
    // 3. HEADER SCROLL EFFECT
    // ==========================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 4. MOBILE MENU (HAMBURGER & NAVIGATION)
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    function toggleMenu() {
        const isOpen = menuToggle.classList.contains('open');
        if (isOpen) {
            // Close menu
            menuToggle.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
        } else {
            // Open menu
            menuToggle.classList.add('open');
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
            menuToggle.setAttribute('aria-expanded', 'true');
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when mobile links are clicked with smooth scroll
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            toggleMenu();
            setTimeout(() => {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    smoothScrollTo(targetSection, 1400);
                }
            }, 400);
        });
    });

    // Close menu when clicking outside content (on overlay wrapper)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            toggleMenu();
        }
    });


    // ==========================================
    // 4. HERO SLIDESHOW (AUTOPLAY & PARALLAX EFFECT)
    // ==========================================
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator-item');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; // 5 seconds

    function goToSlide(n) {
        // Remove active class from current slide and indicator
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        // Update index
        currentSlide = (n + slides.length) % slides.length;
        
        // Add active class
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function startSlideShow() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Attach click listeners to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            startSlideShow(); // Reset timer on click
        });
    });

    // Initialize slide show
    startSlideShow();


    // ==========================================
    // 5. REVEAL ON SCROLL (INTERSECTION OBSERVER)
    // ==========================================
    const revealSelectors = '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale';
    const revealElements = document.querySelectorAll(revealSelectors);

    function triggerScrollReveal() {
        const observerOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // If statistics section is revealed, start counter
                    if (entry.target.classList.contains('stats-section') || entry.target.closest('.stats-section')) {
                        startStatsCounter();
                    }
                    
                    observer.unobserve(entry.target); // Reveal only once
                }
            });
        }, observerOptions);

        revealElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Also observe the stats container specifically to trigger counters
    const statsSection = document.getElementById('experiences');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                startStatsCounter();
                observer.unobserve(statsSection);
            }
        }, { threshold: 0.2 });
        statsObserver.observe(statsSection);
    }


    // ==========================================
    // 6. STATISTICS COUNTER ANIMATION
    // ==========================================
    let statsStarted = false;

    function startStatsCounter() {
        if (statsStarted) return;
        statsStarted = true;

        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const duration = 2000; // 2 seconds animation
            const stepTime = 30;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target.toLocaleString();
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current).toLocaleString();
                }
            }, stepTime);
        });
    }


    // ==========================================
    // 7. TESTIMONIAL CAROUSEL
    // ==========================================
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(n) {
        testimonialSlides[currentTestimonial].classList.remove('active');
        testimonialDots[currentTestimonial].classList.remove('active');

        currentTestimonial = (n + testimonialSlides.length) % testimonialSlides.length;

        testimonialSlides[currentTestimonial].classList.add('active');
        testimonialDots[currentTestimonial].classList.add('active');
    }

    function nextTestimonial() {
        showTestimonial(currentTestimonial + 1);
    }

    function startTestimonialCarousel() {
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(nextTestimonial, 6000); // 6 seconds
    }

    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
            startTestimonialCarousel(); // Reset timer
        });
    });

    startTestimonialCarousel();


    // ==========================================
    // 8. GALLERY LIGHTBOX MODUL
    // ==========================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    let currentGalleryIndex = 0;

    // Create list of image data for navigation
    const galleryImagesData = Array.from(galleryItems).map(item => ({
        src: item.getAttribute('data-src'),
        title: item.getAttribute('data-title')
    }));

    function openLightbox(index) {
        currentGalleryIndex = index;
        const data = galleryImagesData[currentGalleryIndex];
        
        lightboxImg.src = data.src;
        lightboxCaption.textContent = data.title;
        
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => {
            lightboxImg.src = '';
        }, 300); // Clear source after transition
    }

    function navigateLightbox(direction) {
        currentGalleryIndex = (currentGalleryIndex + direction + galleryImagesData.length) % galleryImagesData.length;
        const data = galleryImagesData[currentGalleryIndex];
        
        // Smooth transition effect
        lightboxImg.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            lightboxImg.src = data.src;
            lightboxCaption.textContent = data.title;
            lightboxImg.style.opacity = '1';
            lightboxImg.style.transform = 'scale(1)';
        }, 250);
    }

    // Bind gallery click events
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    // Close buttons and overlay click
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox-content-wrapper')) {
            closeLightbox();
        }
    });

    // Nav arrows
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
    });
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('open')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        }
    });


    // ==========================================
    // 9. BOOKING INTERACTIVITY (MODALS & CONCIERGE)
    // ==========================================
    const bookingModal = document.getElementById('booking-modal');
    const bookingClose = document.getElementById('booking-close');
    const bookingOkBtn = document.getElementById('booking-ok-btn');
    const tourBookButtons = document.querySelectorAll('.book-tour-btn');
    const experienceBookButton = document.getElementById('book-experience-btn');

    function openBookingModal(itemName) {
        bookingModal.classList.add('open');
        bookingModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Customize text depending on selection
        const messagePara = bookingModal.querySelector('p');
        if (itemName) {
            messagePara.innerHTML = `Gracias por seleccionar el <strong>${itemName}</strong> con Cusco Travel. Nuestro concierge de viajes privado se comunicará con usted a la brevedad para personalizar su itinerario de lujo.`;
        } else {
            messagePara.innerHTML = `Gracias por elegir Cusco Travel. Nuestro concierge de viajes privado se comunicará con usted a la brevedad para personalizar su itinerario de lujo.`;
        }
    }

    function closeBookingModal() {
        bookingModal.classList.remove('open');
        bookingModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Attach to tour buttons
    tourBookButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tourName = btn.getAttribute('data-tour');
            openBookingModal(tourName);
        });
    });

    // Attach to general Book Experience button
    if (experienceBookButton) {
        experienceBookButton.addEventListener('click', () => {
            openPlannerModal();
        });
    }

    // Destination cards click to scroll or trigger tour view
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetHref = card.getAttribute('data-href');
            if (targetHref) {
                const targetSection = document.querySelector(targetHref);
                if (targetSection) {
                    smoothScrollTo(targetSection, 1400);
                }
            }
        });
    });

    bookingClose.addEventListener('click', closeBookingModal);
    bookingOkBtn.addEventListener('click', () => {
        const messagePara = bookingModal.querySelector('p');
        const strongTag = messagePara.querySelector('strong');
        const tourName = strongTag ? strongTag.textContent : 'experiencia Cusco Travel';
        const waMsg = `Hola Cusco Travel! Me interesa reservar: ${tourName}. Quisiera recibir información personalizada.`;
        window.open(`https://wa.me/51984000123?text=${encodeURIComponent(waMsg)}`, '_blank');
        closeBookingModal();
    });
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            closeBookingModal();
        }
    });

    // ==========================================
    // 10. SMOOTH PARALLAX EFFECT FOR BANNER
    // ==========================================
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            const elementTop = parallaxBg.parentElement.offsetTop;
            const viewportHeight = window.innerHeight;

            if (scrollPos + viewportHeight > elementTop && scrollPos < elementTop + parallaxBg.parentElement.offsetHeight) {
                // Calculate relative scroll within the section
                const relativeScroll = scrollPos - elementTop;
                // Move bg image at a slower rate
                parallaxBg.style.transform = `translateY(${relativeScroll * 0.15}px)`;
            }
        });
    }

    // Premium Easing Smooth Scroll
    function smoothScrollTo(target, duration = 1500) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 70; // offset header scrolled height
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        // Cubic-bezier approximation: easeInOutCubic for ultra-smooth deceleration
        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            window.scrollTo(0, easeInOutCubic(progress) * distance + startPosition);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }

    // Smooth scroll for nav items and footer links
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(link => {
        if (link.classList.contains('mobile-nav-link')) return;
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                
                // Active link highlighting on desktop
                const navLinks = document.querySelectorAll('.nav-link');
                navLinks.forEach(nl => nl.classList.remove('active'));
                
                const matchingDesktopLink = document.querySelector(`.nav-link[href="${targetId}"]`);
                if (matchingDesktopLink) {
                    matchingDesktopLink.classList.add('active');
                }

                smoothScrollTo(targetSection, 1500);
            }
        });
    });

    // Update active nav links on scroll using Intersection Observer
    const sections = document.querySelectorAll('section[id]');
    const navObserverOptions = {
        root: null,
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const navLinks = document.querySelectorAll('.nav-link');
                navLinks.forEach(nl => {
                    nl.classList.remove('active');
                    if (nl.getAttribute('href') === `#${id}`) {
                        nl.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(sec => navObserver.observe(sec));

    // ==========================================
    // 11. GOLDEN PARTICLES PHYSICS
    // ==========================================
    const particleCanvas = document.getElementById('hero-particles');
    if (particleCanvas) {
        const ctx = particleCanvas.getContext('2d');
        let particlesArray = [];
        let canvasWidth = particleCanvas.offsetWidth;
        let canvasHeight = particleCanvas.offsetHeight;
        
        let mouse = {
            x: null,
            y: null,
            radius: 120
        };

        function resizeCanvas() {
            canvasWidth = particleCanvas.offsetWidth;
            canvasHeight = particleCanvas.offsetHeight;
            particleCanvas.width = canvasWidth;
            particleCanvas.height = canvasHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const heroSection = document.getElementById('home');
        if (heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = particleCanvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });
            heroSection.addEventListener('mouseleave', () => {
                mouse.x = null;
                mouse.y = null;
            });
        }

        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * canvasHeight;
            }

            reset() {
                this.x = Math.random() * canvasWidth;
                this.y = canvasHeight + Math.random() * 20;
                this.size = Math.random() * 2.5 + 0.5;
                this.speedY = -(Math.random() * 0.6 + 0.2);
                this.speedX = Math.random() * 0.4 - 0.2;
                this.alpha = Math.random() * 0.5 + 0.2;
                this.goldColor = `rgba(255, ${Math.floor(Math.random() * 60) + 140}, 50, `;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;

                if (this.y < -10) {
                    this.reset();
                }

                if (mouse.x !== null && mouse.y !== null) {
                    let dx = this.x - mouse.x;
                    let dy = this.y - mouse.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < mouse.radius) {
                        let force = (mouse.radius - dist) / mouse.radius;
                        let directionX = dx / dist;
                        let directionY = dy / dist;
                        this.x += directionX * force * 3;
                        this.y += directionY * force * 3;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.goldColor + this.alpha + ')';
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            const numberOfParticles = Math.floor((canvasWidth * canvasHeight) / 12000);
            const count = Math.min(Math.max(numberOfParticles, 40), 120);
            for (let i = 0; i < count; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
        
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(initParticles, 200);
        });
    }

    // ==========================================
    // 12. CUSTOM FLOATING CURSOR
    // ==========================================
    const customCursor = document.getElementById('custom-cursor');
    if (customCursor) {
        let cursorX = 0;
        let cursorY = 0;
        let targetX = 0;
        let targetY = 0;
        const cursorInertia = 0.12;
        let isTouchDevice = false;

        window.addEventListener('touchstart', function detectTouch() {
            isTouchDevice = true;
            customCursor.style.display = 'none';
            document.body.style.cursor = 'auto';
            window.removeEventListener('touchstart', detectTouch);
        });

        window.addEventListener('mousemove', (e) => {
            if (isTouchDevice) return;
            targetX = e.clientX;
            targetY = e.clientY;
        });

        function updateCursorPosition() {
            if (isTouchDevice) return;
            cursorX += (targetX - cursorX) * cursorInertia;
            cursorY += (targetY - cursorY) * cursorInertia;
            
            customCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(updateCursorPosition);
        }
        
        requestAnimationFrame(updateCursorPosition);

        const hoverSelectors = 'a, button, .indicator-item, .planner-opt-card, .btn-tour, .social-icon, .destination-card, .card-discover-btn';
        document.body.addEventListener('mouseover', (e) => {
            if (isTouchDevice) return;
            const target = e.target.closest(hoverSelectors);
            if (target) {
                customCursor.classList.add('hover');
            }
        });

        document.body.addEventListener('mouseout', (e) => {
            if (isTouchDevice) return;
            const target = e.target.closest(hoverSelectors);
            if (target) {
                customCursor.classList.remove('hover');
            }
        });

        const viewSelectors = '.gallery-item';
        document.body.addEventListener('mouseover', (e) => {
            if (isTouchDevice) return;
            const target = e.target.closest(viewSelectors);
            if (target) {
                customCursor.classList.add('hover-view');
            }
        });

        document.body.addEventListener('mouseout', (e) => {
            if (isTouchDevice) return;
            const target = e.target.closest(viewSelectors);
            if (target) {
                customCursor.classList.remove('hover-view');
            }
        });
    }

    // ==========================================
    // 13. MULTI-STEP LUXURY TRAVEL PLANNER
    // ==========================================
    const plannerModal = document.getElementById('planner-modal');
    const plannerCloseBtn = document.getElementById('planner-close');
    const plannerForm = document.getElementById('planner-form');
    const plannerProgress = document.getElementById('planner-progress');
    const plannerSteps = document.querySelectorAll('.planner-step');
    let plannerCurrentStep = 1;

    window.openPlannerModal = function() {
        plannerCurrentStep = 1;
        showPlannerStep(1);
        plannerModal.classList.add('open');
        plannerModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    function closePlannerModal() {
        plannerModal.classList.remove('open');
        plannerModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        plannerForm.reset();
    }

    function showPlannerStep(step) {
        plannerSteps.forEach(s => s.classList.remove('active'));
        const targetStep = plannerModal.querySelector(`.planner-step[data-step="${step}"]`);
        if (targetStep) {
            targetStep.classList.add('active');
        }
        
        const progressPercent = ((step - 1) / 4) * 100;
        plannerProgress.style.width = `${Math.min(progressPercent, 100)}%`;
    }

    document.getElementById('btn-next-1').addEventListener('click', () => {
        plannerCurrentStep = 2;
        showPlannerStep(2);
    });

    document.getElementById('btn-prev-2').addEventListener('click', () => {
        plannerCurrentStep = 1;
        showPlannerStep(1);
    });

    document.getElementById('btn-next-2').addEventListener('click', () => {
        plannerCurrentStep = 3;
        showPlannerStep(3);
    });

    document.getElementById('btn-prev-3').addEventListener('click', () => {
        plannerCurrentStep = 2;
        showPlannerStep(2);
    });

    document.getElementById('btn-next-3').addEventListener('click', () => {
        plannerCurrentStep = 4;
        showPlannerStep(4);
    });

    document.getElementById('btn-prev-4').addEventListener('click', () => {
        plannerCurrentStep = 3;
        showPlannerStep(3);
    });

    plannerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const travelStyle = plannerForm.querySelector('input[name="travel-style"]:checked').value;
        const duration = document.getElementById('planner-duration').value;
        const guests = document.getElementById('planner-guests').value;
        const lodging = plannerForm.querySelector('input[name="lodging"]:checked').value;
        const clientName = document.getElementById('planner-name').value;
        
        let itineraryTitle = `Expedición Inca Personalizada`;
        let itineraryBullets = '';
        
        if (travelStyle === 'Arqueología e Historia') {
            itineraryTitle = `Borrador Personalizado de Antigüedades Sagradas`;
            itineraryBullets = `
                <li><span>Día 1</span><span>Llegada VIP y Tour por Mansión Histórica</span></li>
                <li><span>Día 2</span><span>Piedras de Sacsayhuamán y Fuerte Ollantaytambo</span></li>
                <li><span>Día 3</span><span>Tren de Lujo Hiram Bingham a Machu Picchu</span></li>
                <li><span>Día 4</span><span>Amanecer en la Ciudadela de Machu Picchu y Retorno</span></li>
            `;
        } else if (travelStyle === 'Aventura y Naturaleza') {
            itineraryTitle = `Aventura Privada en Cumbres Andinas`;
            itineraryBullets = `
                <li><span>Día 1</span><span>Aclimatación a la Altura y Ciclismo de Montaña</span></li>
                <li><span>Día 2</span><span>Trekking Privado en el Valle Sagrado y Glamping</span></li>
                <li><span>Día 3</span><span>Caminata de Altura en Vinicunca (Montaña de Colores)</span></li>
                <li><span>Día 4</span><span>Rafting en el Río Urubamba y Retorno</span></li>
            `;
        } else {
            itineraryTitle = `Bienestar de Lujo Espíritu de los Incas`;
            itineraryBullets = `
                <li><span>Día 1</span><span>Llegada y Descanso en Spa Colonial</span></li>
                <li><span>Día 2</span><span>Ceremonia Chamánica y Lectura de Hojas de Coca</span></li>
                <li><span>Día 3</span><span>Sanación por Sonidos en el Santuario de Urubamba</span></li>
                <li><span>Día 4</span><span>Tren de Lujo Privado y Meditación en el Santuario</span></li>
            `;
        }

        const waMessage = `¡Hola Cusco Travel! Acabo de generar mi Borrador de Itinerario Personalizado para ${clientName}.
- Estilo: ${travelStyle}
- Alojamiento: ${lodging}
- Grupo: ${guests}
- Duración: ${duration}

Me gustaría programar una llamada con un concierge privado para personalizarlo aún más.`;
        const waUrl = `https://wa.me/51984000123?text=${encodeURIComponent(waMessage)}`;

        const summaryHtml = `
            <h4>${itineraryTitle}</h4>
            <ul class="itinerary-details-list">
                <li><span>Cliente:</span><span>${clientName}</span></li>
                <li><span>Estilo:</span><span>${travelStyle}</span></li>
                <li><span>Grupo:</span><span>${guests}</span></li>
                <li><span>Duración:</span><span>${duration}</span></li>
                <li><span>Alojamiento:</span><span>${lodging}</span></li>
            </ul>
            <ul class="itinerary-details-list" style="margin-top: 15px;">
                ${itineraryBullets}
            </ul>
            <a href="${waUrl}" target="_blank" class="btn btn-primary btn-glow" id="btn-whatsapp-concierge" style="margin-top: 20px; width: 100%; text-align: center; display: inline-block;">CONTACTAR AL CONCIERGE <span class="arrow">→</span></a>
        `;

        document.getElementById('itinerary-summary').innerHTML = summaryHtml;
        
        plannerCurrentStep = 5;
        showPlannerStep(5);
    });

    plannerCloseBtn.addEventListener('click', closePlannerModal);
    document.getElementById('btn-planner-finish').addEventListener('click', closePlannerModal);
    
    plannerModal.addEventListener('click', (e) => {
        if (e.target === plannerModal) {
            closePlannerModal();
        }
    });
    // ==========================================
    // 14. MULTI-LAYER PARALLAX ON SCROLL
    // ==========================================
    const heroBgSlides = document.querySelectorAll('.hero-slide .slide-bg');
    const enjoySection = document.querySelector('.travel-enjoy-section');
    const enjoyBg = document.querySelector('.parallax-bg');

    window.addEventListener('scroll', () => {
        const sy = window.scrollY;

        // Hero parallax - move backgrounds slightly slower
        heroBgSlides.forEach(bg => {
            const speed = 0.25;
            bg.style.transform = `translateY(${sy * speed}px) scale(1.05)`;
        });

        // Travel & Enjoy parallax
        if (enjoyBg && enjoySection) {
            const rect = enjoySection.getBoundingClientRect();
            const offset = rect.top;
            if (offset < window.innerHeight && offset > -rect.height) {
                const amount = (window.innerHeight - offset) * 0.08;
                enjoyBg.style.transform = `translateY(${amount}px)`;
            }
        }
    });

    // ==========================================
    // 15. DESKTOP KINETIC INERTIAL SCROLL
    // ==========================================
    let isTouch = false;
    window.addEventListener('touchstart', function detectTouch() {
        isTouch = true;
        window.removeEventListener('touchstart', detectTouch);
    });

    let targetScroll = window.scrollY;
    let currentScroll = window.scrollY;
    const scrollInertia = 0.09; // Easing glide factor for smooth premium feel
    let isAnimatingScroll = false;

    window.addEventListener('wheel', (e) => {
        if (isTouch) return;
        // Do not intercept scroll if modal overlays or mobile navigation are open
        if (document.body.style.overflow === 'hidden' || mobileMenu.classList.contains('open')) return;

        e.preventDefault();
        targetScroll += e.deltaY * 0.75;
        // Clamp boundaries
        const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        targetScroll = Math.max(0, Math.min(targetScroll, maxScrollHeight));

        if (!isAnimatingScroll) {
            isAnimatingScroll = true;
            smoothScrollLoop();
        }
    }, { passive: false });

    // Sync scroll targets when scroll positions are updated externally (e.g. clicks or manual drags)
    window.addEventListener('scroll', () => {
        if (Math.abs(window.scrollY - currentScroll) > 15) {
            targetScroll = window.scrollY;
            currentScroll = window.scrollY;
        }
    });

    function smoothScrollLoop() {
        if (isTouch || document.body.style.overflow === 'hidden') {
            isAnimatingScroll = false;
            return;
        }
        
        currentScroll += (targetScroll - currentScroll) * scrollInertia;
        window.scrollTo(0, currentScroll);

        // Keep loop running while distance is substantial
        if (Math.abs(targetScroll - currentScroll) > 0.3) {
            requestAnimationFrame(smoothScrollLoop);
        } else {
            isAnimatingScroll = false;
        }
    }

    // Adjust target scroll when smoothScrollTo runs
    const originalSmoothScrollTo = smoothScrollTo;
    smoothScrollTo = function(target, duration) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 70;
        targetScroll = targetPosition;
        originalSmoothScrollTo(target, duration);
    };

    // ==========================================
    // 15. PREMIUM THEME TOGGLE (instant cover → smooth reveal)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeRevealOverlay = document.getElementById('theme-reveal');
    
    if (themeToggleBtn && themeRevealOverlay) {
        const sunIcon = themeToggleBtn.querySelector('.theme-icon-sun');
        const moonIcon = themeToggleBtn.querySelector('.theme-icon-moon');

        themeToggleBtn.addEventListener('click', () => {
            const isCurrentlyLight = document.body.classList.contains('light-theme');
            const targetBg = isCurrentlyLight ? '#050505' : '#F8F6F0';

            // 1. Disable transition, instantly cover screen
            themeRevealOverlay.style.transition = 'none';
            themeRevealOverlay.style.opacity = '1';
            themeRevealOverlay.style.background = targetBg;
            
            // Force layout to apply instant opacity
            void themeRevealOverlay.offsetHeight;

            // 2. Toggle theme while screen is fully covered
            if (isCurrentlyLight) {
                document.body.classList.remove('light-theme');
                themeToggleBtn.classList.remove('light-mode');
            } else {
                document.body.classList.add('light-theme');
                themeToggleBtn.classList.add('light-mode');
            }

            // 3. Re-enable transition and smoothly fade out overlay
            themeRevealOverlay.style.transition = 'opacity 0.35s cubic-bezier(0.25, 1, 0.5, 1)';
            themeRevealOverlay.style.opacity = '0';
        });
    }

    // ==========================================
    // 16. INTERACTIVE VALLEY SVG GUIDE MAP
    // ==========================================
    const mapNodes = document.querySelectorAll('.map-node');
    const mapRoutes = document.querySelectorAll('.route-segment');
    const tourLinkBtn = document.getElementById('map-tour-btn');

    const mapData = {
        cusco: {
            name: "Cusco, Capital Imperial",
            altitude: "3,400 metros (11,150 pies)",
            time: "Capital Inca y Centro Principal",
            excursion: "Mansiones Coloniales y Templo de Qorikancha",
            desc: "Cusco es la ciudad habitada continuamente más antigua de América. Camine por calles empedradas edificadas sobre impecables cimientos incas combinados con arquitectura colonial. Recomendamos descansar aquí al inicio para aclimatarse.",
            targetCardId: "btn-tour-sh"
        },
        pisac: {
            name: "Santuario de Písac",
            altitude: "2,972 metros (9,750 pies)",
            time: "1.2 horas en auto desde Cusco",
            excursion: "Sistemas de Terrazas y Mercado Artesanal",
            desc: "Una inmensa ciudadela agrícola que corona la cresta de una montaña. Písac presenta hermosos andenes diseñados para microclimatizar cultivos. El pueblo de abajo alberga un mercado tradicional vibrante y colorido.",
            targetCardId: "btn-tour-pisac"
        },
        ollanta: {
            name: "Fortaleza de Ollantaytambo",
            altitude: "2,792 metros (9,160 pies)",
            time: "1.5 horas en auto desde Cusco",
            excursion: "Pueblo Inca Viviente y Ruinas Reales",
            desc: "Ollantaytambo es un testimonio vivo del urbanismo inca, con canales de agua originales fluyendo por sus calles de piedra. Sobre el pueblo, colosales ruinas andeneras marcan la histórica resistencia inca.",
            targetCardId: "btn-tour-oll"
        },
        'machu-picchu': {
            name: "Ciudadela de Machu Picchu",
            altitude: "2,430 metros (7,970 pies)",
            time: "3.5 horas en viaje en tren",
            excursion: "Guía VIP del Amanecer en el Santuario",
            desc: "El santuario sagrado en las nubes, edificado en armonía con los empinados picos verdes que lo rodean. Disfrute de guía privado experto y de vistas panorámicas de una de las maravillas arqueológicas más del mundo.",
            targetCardId: "btn-tour-mp"
        }
    };

    function highlightRoutes(nodeKey) {
        // Clear all segment highlights
        mapRoutes.forEach(route => route.classList.remove('active'));

        // Highlight routes progressively based on travel path depth
        if (nodeKey === 'pisac') {
            document.getElementById('seg-cusco-pisac').classList.add('active');
        } else if (nodeKey === 'ollanta') {
            document.getElementById('seg-cusco-pisac').classList.add('active');
            document.getElementById('seg-pisac-ollanta').classList.add('active');
        } else if (nodeKey === 'machu-picchu') {
            document.getElementById('seg-cusco-pisac').classList.add('active');
            document.getElementById('seg-pisac-ollanta').classList.add('active');
            document.getElementById('seg-ollanta-mp').classList.add('active');
        }
    }

    mapNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            const nodeKey = node.getAttribute('data-node');
            const data = mapData[nodeKey];

            if (data) {
                // Update panel details with fade animations
                const panelContent = document.getElementById('map-info-content');
                const infoPanel = document.querySelector('.map-info-panel');
                
                panelContent.style.opacity = '0';
                panelContent.style.transform = 'translateY(10px)';
                panelContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

                if (infoPanel) {
                    infoPanel.classList.add('pulse-glow');
                    setTimeout(() => {
                        infoPanel.classList.remove('pulse-glow');
                    }, 1200);
                }

                // Update active badge-bg highlight
                document.querySelectorAll('.badge-bg').forEach(bg => bg.classList.remove('active'));
                const activeBadge = node.querySelector('.badge-bg');
                if (activeBadge) {
                    activeBadge.classList.add('active');
                }

                // Move the progress route tracker along the Bézier road path
                const routeTracker = document.getElementById('route-tracker');
                if (routeTracker) {
                    let distance = '0%';
                    if (nodeKey === 'pisac') distance = '32.6%';
                    else if (nodeKey === 'ollanta') distance = '67%';
                    else if (nodeKey === 'machu-picchu') distance = '100%';
                    routeTracker.style.offsetDistance = distance;
                }

                setTimeout(() => {
                    document.getElementById('map-landmark-name').textContent = data.name;
                    document.getElementById('map-altitude').textContent = data.altitude;
                    document.getElementById('map-time').textContent = data.time;
                    document.getElementById('map-guide').textContent = data.excursion;
                    document.getElementById('map-description').textContent = data.desc;
                    
                    panelContent.style.opacity = '1';
                    panelContent.style.transform = 'translateY(0)';
                }, 300);

                highlightRoutes(nodeKey);
            }
        });
    });

    // Wire vector map button to scroll to tours section and highlight target card
    tourLinkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const activeLandmarkTitle = document.getElementById('map-landmark-name').textContent;
        let activeKey = 'cusco';
        
        // Find current key from name match
        for (const [key, value] of Object.entries(mapData)) {
            if (value.name === activeLandmarkTitle) {
                activeKey = key;
                break;
            }
        }

        const data = mapData[activeKey];
        const targetBtn = document.getElementById(data.targetCardId);
        
        if (targetBtn) {
            const toursSection = document.getElementById('tours');
            smoothScrollTo(toursSection, 1500);

            // Highlight target card with a brief pulsing border effect
            const card = targetBtn.closest('.tour-card');
            if (card) {
                setTimeout(() => {
                    card.style.borderColor = 'var(--accent)';
                    card.style.boxShadow = '0 0 25px rgba(255, 45, 45, 0.4)';
                    card.style.transform = 'translateY(-12px)';
                    
                    setTimeout(() => {
                        card.style.borderColor = '';
                        card.style.boxShadow = '';
                        card.style.transform = '';
                    }, 2500);
                }, 1600);
            }
        }
    });
    // ==========================================
    // 17. SMART AUTO-HIDING HEADER
    // ==========================================
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 150 && document.body.style.overflow !== 'hidden') {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
        lastScrollY = currentScrollY;
    });

    // ==========================================
    // 18. TESTIMONIAL PROGRESS TIMER
    // ==========================================
    const testimonialProgressBars = document.querySelectorAll('.testimonial-timer-progress');
    const testimonialDuration = 6000;

    function resetAndStartProgress(index) {
        testimonialProgressBars.forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = '0%';
        });

        const activeBar = document.getElementById(`t-progress-${index + 1}`);
        if (activeBar) {
            void activeBar.offsetWidth;
            activeBar.style.transition = `width ${testimonialDuration}ms linear`;
            activeBar.style.width = '100%';
        }
    }

    const originalShowTestimonial = showTestimonial;
    showTestimonial = function(n) {
        originalShowTestimonial(n);
        resetAndStartProgress(currentTestimonial);
    };

    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
            startTestimonialCarousel();
        });
    });

    resetAndStartProgress(0);

    // ==========================================
    // 19. MAGNETIC HOVER BUTTONS (DESKTOP ONLY)
    // ==========================================
    const magneticElements = document.querySelectorAll('.btn, .social-icon, .theme-toggle-btn');
    
    if (magneticElements.length > 0) {
        magneticElements.forEach(elem => {
            elem.addEventListener('mousemove', (e) => {
                if (isTouch) return;
                
                const rect = elem.getBoundingClientRect();
                const elemCenterX = rect.left + rect.width / 2;
                const elemCenterY = rect.top + rect.height / 2;
                
                const distanceX = e.clientX - elemCenterX;
                const distanceY = e.clientY - elemCenterY;
                
                elem.style.transform = `translate3d(${distanceX * 0.35}px, ${distanceY * 0.35}px, 0)`;
            });
            
            elem.addEventListener('mouseleave', () => {
                if (isTouch) return;
                elem.style.transform = `translate3d(0px, 0px, 0px)`;
            });
        });
    }

    // ==========================================
    // 20. 3D PERSPECTIVE CARD TILT & METALLIC GLARE (DESKTOP ONLY)
    // ==========================================
    const tiltCards = document.querySelectorAll('.destination-card, .tour-card');
    
    if (tiltCards.length > 0 && !isTouch) {
        tiltCards.forEach(card => {
            // Create glare element dynamically
            const glare = document.createElement('div');
            glare.classList.add('card-glare');
            card.appendChild(glare);
            
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within element
                const y = e.clientY - rect.top;  // y position within element
                
                const width = rect.width;
                const height = rect.height;
                
                // Calculate percentages from center (-1 to 1)
                const px = (x - width / 2) / (width / 2);
                const py = (y - height / 2) / (height / 2);
                
                // Max 8 degrees rotation
                const rotateX = -py * 8; 
                const rotateY = px * 8;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                
                // Update radial glare coordinates
                const glareX = (x / width) * 100;
                const glareY = (y / height) * 100;
                glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 80%)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
                glare.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)`;
            });
        });
    }

    // ==========================================
    // 21. LIVE CUSCO DESTINATION INTEL WIDGET SIMULATION
    // ==========================================
    const tempElement = document.getElementById('intel-temp');
    if (tempElement) {
        let baseTemp = 13.5;
        setInterval(() => {
            const fluctuation = (Math.random() * 1.6 - 0.8).toFixed(1);
            let finalTemp = parseFloat(baseTemp) + parseFloat(fluctuation);
            finalTemp = Math.max(11, Math.min(16, finalTemp)).toFixed(1);
            tempElement.textContent = `${finalTemp}°C`;
        }, 6000);
    }

    // ==========================================
    // 22. EXPEDITION TIMELINE LOGIC (#expedition)
    // ==========================================
    const timelineData = [
        {
            day: "01",
            title: "Llegada Imperial y Aclimatación",
            coords: "LAT -13.5249° / LON -71.9485°",
            bg: "assets/plaza_de_armas.png",
            desc: "Llegada a Cusco. Conozca a su anfitrión privado y traslado a su suite de lujo en un monasterio colonial. Dedique la tarde a aclimatarse con habitaciones equipadas con flujo de oxígeno y disfrute de una suave caminata guiada por plazas empedradas históricas.",
            highlights: ["Recepción VIP en Aeropuerto", "Suite en Monasterio de Lujo", "Caminata Histórica Privada"]
        },
        {
            day: "02",
            title: "Terrazas Sagradas de Písac",
            coords: "LAT -13.4219° / LON -71.8502°",
            bg: "assets/pisac.png",
            desc: "Viaje al Valle Sagrado. Recorra los espectaculares andenes del sistema de terrazas agrícolas de Písac y explore su mercado artesanal tradicional junto a su guía local privado.",
            highlights: ["Viaje por el Valle Andino", "Terrazas Agrícolas Escénicas", "Excursión al Mercado Artesanal"]
        },
        {
            day: "03",
            title: "Fortress of Sacsayhuamán",
            coords: "LAT -13.5083° / LON -71.9814°",
            bg: "assets/sacsayhuaman.png",
            desc: "Ascienda sobre Cusco para contemplar las monumentales piedras talladas en zig-zag de Sacsayhuamán. Maravíllese con la precisión de la arquitectura megalítica e inicie el día con vistas panorámicas de la ciudad imperial.",
            highlights: ["Caminata Guiada en Ciudadela", "Muros de Piedra Megalíticos", "Mirador del Valle Escénico"]
        },
        {
            day: "04",
            title: "Pueblo Viviente de Ollantaytambo",
            coords: "LAT -13.2581° / LON -72.2634°",
            bg: "assets/ollantaytambo.png",
            desc: "Explore el trazado urbano de Ollantaytambo, un pueblo inca viviente donde el agua de las montañas fluye por canales en calles de piedra. Suba a los colosales depósitos reales construidos en acantilados empinados.",
            highlights: ["Pueblo Inca Viviente", "Ascenso a Depósitos Reales", "Caminatas junto al Río"]
        },
        {
            day: "05",
            title: "Amanecer en Machu Picchu",
            coords: "LAT -13.1631° / LON -72.5450°",
            bg: "assets/machu_picchu.png",
            desc: "Aborde el lujoso tren Hiram Bingham hacia Aguas Calientes. Ingrese al santuario al amanecer junto a un historiador privado, explorando terrazas secretas y templos de piedra envueltos en neblina.",
            highlights: ["Tren de Lujo Hiram Bingham", "Visita VIP al Amanecer", "Guía del Templo del Sol"]
        },
        {
            day: "06",
            title: "Vuelo sobre la Montaña de Colores",
            coords: "LAT -13.8642° / LON -71.3031°",
            bg: "assets/rainbow_mountain.png",
            desc: "Disfrute de un vuelo en helicóptero privado para sobrevolar las espectaculares franjas minerales de Vinicunca. Contemple los valles turquesa y los glaciares nevados del Ausangate desde una perspectiva inigualable.",
            highlights: ["Vuelo en Helicóptero Privado", "Vistas Aéreas de Vinicunca", "Glaciar Nevado Ausangate"]
        },
        {
            day: "07",
            title: "Despedida del Valle Sagrado",
            coords: "LAT -13.1500° / LON -72.1500°",
            bg: "assets/sacred_valley.png",
            desc: "Disfrute de un último desayuno gourmet con vistas al río Urubamba. Su chofer privado lo trasladará al aeropuerto de Cusco para su conexión de salida, concluyendo un viaje de lujo inolvidable.",
            highlights: ["Servicio Concierge de Salida", "Traslado con Chofer Privado", "Obsequio de Despedida Premium"]
        }
    ];

    const timelineButtons = document.querySelectorAll('.timeline-nav-btn');
    const timelineBgActive = document.querySelector('.timeline-bg.active');
    const timelineBgNext = document.querySelector('.timeline-bg.next');
    const timelineCardContent = document.querySelector('.timeline-card-content');
    
    let isTransitioningDay = false;
    
    timelineButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (isTransitioningDay || btn.classList.contains('active')) return;
            isTransitioningDay = true;
            
            const targetDayIndex = parseInt(btn.getAttribute('data-day'), 10);
            const data = timelineData[targetDayIndex];
            
            // 1. Update nav buttons state
            timelineButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 2. Animate content card text fade out
            timelineCardContent.classList.add('fade-out');
            
            // 3. Set background crossfade image
            timelineBgNext.style.backgroundImage = `linear-gradient(to bottom, rgba(5,5,5,0.4), rgba(5,5,5,0.9)), url('${data.bg}')`;
            timelineBgNext.style.opacity = '1';
            
            setTimeout(() => {
                // 4. Update texts and badges while faded out
                document.getElementById('timeline-current-day').textContent = data.day;
                document.getElementById('timeline-coords').textContent = data.coords;
                document.getElementById('timeline-title').textContent = data.title;
                document.getElementById('timeline-desc').textContent = data.desc;
                
                // Highlights
                const highlightsWrapper = document.getElementById('timeline-highlights');
                highlightsWrapper.innerHTML = '';
                data.highlights.forEach(hl => {
                    const tag = document.createElement('span');
                    tag.classList.add('highlight-tag');
                    tag.textContent = hl;
                    highlightsWrapper.appendChild(tag);
                });
                
                // Swap background layers
                timelineBgActive.style.backgroundImage = timelineBgNext.style.backgroundImage;
                timelineBgNext.style.opacity = '0';
                
                // Fade in text content
                timelineCardContent.classList.remove('fade-out');
                isTransitioningDay = false;
            }, 600); // sync with CSS transition timing
        });
    });

    // ==========================================
    // 23. ANDEAN STARGAZING SKY LOGIC
    // ==========================================
    const starCanvas = document.getElementById('star-canvas');
    if (starCanvas) {
        const ctx = starCanvas.getContext('2d');
        let canvasWidth = 0;
        let canvasHeight = 0;
        
        let backgroundStars = [];
        let constellationActive = null;
        let starMouse = { x: -1000, y: -1000, active: false };
        
        // Define Inca Constellations relative to canvas size
        const constellations = [
            {
                key: "yacana",
                name: "Yacana (La Llama Celestial)",
                qname: "Yacana",
                rep: "La Llama Madre y su Cría",
                myth: "Representada por las nubes oscuras en la Vía Láctea, Yacana es la protectora de las llamas de la Tierra. Según la mitología, desciende a beber de los ríos de Cusco a medianoche para evitar inundaciones.",
                center: { x: 0.35, y: 0.45, radius: 100 }, // Relative position hotspot
                color: "#E2BA49", // Gold
                nodes: [
                    { x: 0.22, y: 0.40 }, // Ear 1
                    { x: 0.24, y: 0.38 }, // Ear 2
                    { x: 0.23, y: 0.48 }, // Head
                    { x: 0.27, y: 0.52 }, // Neck
                    { x: 0.34, y: 0.55 }, // Body Chest
                    { x: 0.39, y: 0.53 }, // Back
                    { x: 0.46, y: 0.50 }, // Hindquarters
                    { x: 0.35, y: 0.65 }, // Front Leg 1
                    { x: 0.37, y: 0.64 }, // Front Leg 2
                    { x: 0.45, y: 0.62 }, // Back Leg 1
                    { x: 0.47, y: 0.60 }  // Back Leg 2
                ],
                lines: [
                    [0, 2], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
                    [4, 7], [4, 8], [6, 9], [6, 10]
                ]
            },
            {
                key: "chakana",
                name: "Chakana (La Cruz del Sur)",
                qname: "Chakana / Cruz del Sur",
                rep: "La Sagrada Cruz Andina",
                myth: "La Cruz del Sur representa los tres niveles de la existencia inca: Hana Pacha (el mundo superior de los espíritus), Kay Pacha (el mundo terrenal) y Ukhu Pacha (el inframundo de los ancestros). Es el puente de la vida.",
                center: { x: 0.70, y: 0.32, radius: 80 },
                color: "#ff2d2d", // Red glow
                nodes: [
                    { x: 0.70, y: 0.18 }, // Top
                    { x: 0.70, y: 0.46 }, // Bottom
                    { x: 0.58, y: 0.32 }, // Left
                    { x: 0.82, y: 0.32 }  // Right
                ],
                lines: [
                    [0, 1], [2, 3], 
                    [0, 2], [2, 1], [1, 3], [3, 0] // Outer cross outline diamond
                ]
            },
            {
                key: "kuntur",
                name: "Kuntur (El Cóndor)",
                qname: "Kuntur",
                rep: "El Cóndor Sagrado",
                myth: "En la trilogía inca, el cóndor representa el mundo de arriba. Es el mensajero divino que eleva las plegarias de los hombres y transporta las almas de los muertos hacia los cielos espirituales.",
                center: { x: 0.52, y: 0.72, radius: 90 },
                color: "#D4AF37", // Gold
                nodes: [
                    { x: 0.52, y: 0.84 }, // Beak
                    { x: 0.52, y: 0.78 }, // Head/Neck
                    { x: 0.52, y: 0.66 }, // Body/Tail
                    { x: 0.38, y: 0.70 }, // Left Wing tip
                    { x: 0.46, y: 0.72 }, // Left Wing joint
                    { x: 0.66, y: 0.70 }, // Right Wing tip
                    { x: 0.58, y: 0.72 }  // Right Wing joint
                ],
                lines: [
                    [0, 1], [1, 2], [1, 4], [4, 3], [1, 6], [6, 5]
                ]
            }
        ];
        
        function resizeStarCanvas() {
            canvasWidth = starCanvas.parentElement.offsetWidth;
            canvasHeight = starCanvas.parentElement.offsetHeight;
            starCanvas.width = canvasWidth;
            starCanvas.height = canvasHeight;
            initBackgroundStars();
        }
        
        function initBackgroundStars() {
            backgroundStars = [];
            const count = Math.floor((canvasWidth * canvasHeight) / 5000);
            for (let i = 0; i < count; i++) {
                backgroundStars.push({
                    x: Math.random() * canvasWidth,
                    y: Math.random() * canvasHeight,
                    radius: Math.random() * 1.5 + 0.3,
                    opacity: Math.random(),
                    speed: Math.random() * 0.02 + 0.005
                });
            }
        }
        
        // Listeners for mouse or touch tracking
        starCanvas.addEventListener('mousemove', (e) => {
            const rect = starCanvas.getBoundingClientRect();
            starMouse.x = e.clientX - rect.left;
            starMouse.y = e.clientY - rect.top;
            starMouse.active = true;
            
            // Dynamic coordinates visor tracker updates
            const raValue = Math.floor((starMouse.x / canvasWidth) * 24);
            const raMin = Math.floor(((starMouse.x / canvasWidth) * 24 - raValue) * 60);
            const decValue = Math.floor((starMouse.y / canvasHeight) * -90);
            document.getElementById('star-visor-coords').textContent = `RA ${raValue}h ${String(raMin).padStart(2, '0')}m / DEC ${decValue}°`;
            
            checkConstellationHover();
        });
        
        starCanvas.addEventListener('mouseleave', () => {
            starMouse.active = false;
        });
        
        starCanvas.addEventListener('touchstart', (e) => {
            const rect = starCanvas.getBoundingClientRect();
            const touch = e.touches[0];
            starMouse.x = touch.clientX - rect.left;
            starMouse.y = touch.clientY - rect.top;
            starMouse.active = true;
            checkConstellationHover(true);
        }, { passive: true });
        
        function checkConstellationHover(isClick = false) {
            let found = null;
            
            for (let i = 0; i < constellations.length; i++) {
                const c = constellations[i];
                const cx = c.center.x * canvasWidth;
                const cy = c.center.y * canvasHeight;
                const dx = starMouse.x - cx;
                const dy = starMouse.y - cy;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < c.center.radius) {
                    found = c;
                    break;
                }
            }
            
            if (found !== constellationActive) {
                constellationActive = found;
                updateConstellationPanel(found);
            }
        }
        
        const infoContent = document.getElementById('stargazing-info-content');
        const infoTitle = document.getElementById('constellation-landmark-name');
        const infoDesc = document.getElementById('constellation-desc');
        const detailsList = document.getElementById('constellation-details-list');
        const qnameText = document.getElementById('constellation-qname');
        const repText = document.getElementById('constellation-rep');
        const mythText = document.getElementById('constellation-myth');
        
        function updateConstellationPanel(constellation) {
            infoContent.classList.add('fade-out');
            
            setTimeout(() => {
                if (constellation) {
                    infoTitle.textContent = constellation.name;
                    infoDesc.textContent = constellation.myth;
                    qnameText.textContent = constellation.qname;
                    repText.textContent = constellation.rep;
                    mythText.textContent = constellation.myth;
                    detailsList.style.display = 'flex';
                } else {
                    infoTitle.textContent = "La Vía Láctea (Mayu)";
                    infoDesc.textContent = "Para los Incas, la Vía Láctea era un río celestial que conectaba los cielos con el Valle Sagrado. Mueva su cursor sobre los sistemas estelares brillantes para descubrir las constelaciones de nubes oscuras ocultas en ella.";
                    detailsList.style.display = 'none';
                }
                
                infoContent.classList.remove('fade-out');
            }, 300);
        }
        
        function drawStarSky() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            
            // 1. Draw twinkling background stars
            backgroundStars.forEach(star => {
                star.opacity += star.speed;
                if (star.opacity > 1 || star.opacity < 0) {
                    star.speed = -star.speed;
                }
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, star.opacity)})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            
            // 2. Draw constellations
            constellations.forEach(c => {
                const isActive = constellationActive === c;
                const cx = c.center.x * canvasWidth;
                const cy = c.center.y * canvasHeight;
                
                // Draw constellation nodes
                const nodePixels = c.nodes.map(n => ({
                    x: n.x * canvasWidth,
                    y: n.y * canvasHeight
                }));
                
                // Draw connecting vectors
                ctx.strokeStyle = isActive ? c.color : 'rgba(255,255,255,0.06)';
                ctx.lineWidth = isActive ? 1.5 : 0.8;
                ctx.beginPath();
                c.lines.forEach(line => {
                    const start = nodePixels[line[0]];
                    const end = nodePixels[line[1]];
                    ctx.moveTo(start.x, start.y);
                    ctx.lineTo(end.x, end.y);
                });
                ctx.stroke();
                
                // Draw stars/nodes
                nodePixels.forEach(n => {
                    // Glow behind active stars
                    if (isActive) {
                        const grad = ctx.createRadialGradient(n.x, n.y, 1, n.x, n.y, 8);
                        grad.addColorStop(0, c.color);
                        grad.addColorStop(1, 'rgba(0,0,0,0)');
                        ctx.fillStyle = grad;
                        ctx.beginPath();
                        ctx.arc(n.x, n.y, 8, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    
                    ctx.fillStyle = isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)';
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, isActive ? 2.5 : 1.5, 0, Math.PI * 2);
                    ctx.fill();
                });
                
                // Draw subtle active boundary ring
                if (isActive) {
                    ctx.strokeStyle = `rgba(${c.key === 'chakana' ? '255,45,45' : '226,186,73'}, 0.15)`;
                    ctx.lineWidth = 1;
                    ctx.setLineDash([4, 4]);
                    ctx.beginPath();
                    ctx.arc(cx, cy, c.center.radius * 0.8, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            });
            
            // 3. Draw mouse locator ring (tech styling)
            if (starMouse.active && starMouse.x > 0 && starMouse.y > 0) {
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(starMouse.x, starMouse.y, 20, 0, Math.PI * 2);
                ctx.stroke();
                
                // Visor cursor lines
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
                ctx.beginPath();
                ctx.moveTo(starMouse.x - 30, starMouse.y);
                ctx.lineTo(starMouse.x + 30, starMouse.y);
                ctx.moveTo(starMouse.x, starMouse.y - 30);
                ctx.lineTo(starMouse.x, starMouse.y + 30);
                ctx.stroke();
            }
            
            requestAnimationFrame(drawStarSky);
        }
        
        // Initial setup and canvas render triggers
        resizeStarCanvas();
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                resizeStarCanvas();
            }, 250);
        });
        
        drawStarSky();
    }
});
