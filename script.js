// ===============================================
// PRELOADER
// ===============================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }, 1000);
});

// ===============================================
// NAVBAR SCROLL EFFECT
// ===============================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active nav link on scroll
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===============================================
// MOBILE MENU TOGGLE
// ===============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===============================================
// THEME TOGGLE
// ===============================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');

    if (body.classList.contains('light-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// ===============================================
// TYPING ANIMATION
// ===============================================
const typedTextElement = document.getElementById('typed-text');
const textArray = ['Web Designer', 'UI/UX Designer', 'Web Developer', 'Creative Designer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = textArray[textIndex];

    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 150;

    if (isDeleting) {
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;
        if (textIndex === textArray.length) {
            textIndex = 0;
        }
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

// Start typing animation
setTimeout(typeText, 1000);

// ===============================================
// SMOOTH SCROLLING
// ===============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===============================================
// COUNTER ANIMATION (About Stats)
// ===============================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// ===============================================
// PORTFOLIO DATA & FILTERING
// ===============================================
const portfolioData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'development',
        categoryLabel: 'Web Development',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop',
        description: 'A fully responsive e-commerce platform with modern UI, shopping cart functionality, and secure payment integration. Built with React and Node.js.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
        id: 2,
        title: 'Mobile Banking App',
        category: 'uiux',
        categoryLabel: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
        description: 'Intuitive mobile banking interface designed with user experience at the forefront. Includes wireframes, prototypes, and user testing results.',
        tech: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    },
    {
        id: 3,
        title: 'Corporate Website Redesign',
        category: 'web-design',
        categoryLabel: 'Web Design',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
        description: 'Modern redesign of a corporate website with focus on clean aesthetics, brand consistency, and improved user engagement.',
        tech: ['Photoshop', 'Illustrator', 'CSS3', 'Responsive Design']
    },
    {
        id: 4,
        title: 'Restaurant Management System',
        category: 'development',
        categoryLabel: 'Web Development',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
        description: 'Complete restaurant management solution with order tracking, inventory management, and customer analytics dashboard.',
        tech: ['Vue.js', 'Express', 'PostgreSQL', 'WebSockets']
    },
    {
        id: 5,
        title: 'Fitness Tracker App',
        category: 'uiux',
        categoryLabel: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
        description: 'User-centered design for a fitness tracking application with gamification elements and social features.',
        tech: ['Sketch', 'InVision', 'User Testing', 'Wireframing']
    },
    {
        id: 6,
        title: 'Creative Agency Portfolio',
        category: 'web-design',
        categoryLabel: 'Web Design',
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
        description: 'Bold and creative portfolio design for a digital agency, featuring stunning animations and interactive elements.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP']
    },
    {
        id: 7,
        title: 'Real Estate Platform',
        category: 'development',
        categoryLabel: 'Web Development',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
        description: 'Property listing platform with advanced search filters, virtual tours, and integrated map functionality.',
        tech: ['Next.js', 'Tailwind CSS', 'Mapbox', 'Supabase']
    },
    {
        id: 8,
        title: 'Educational Dashboard',
        category: 'uiux',
        categoryLabel: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
        description: 'Comprehensive dashboard design for an online learning platform with intuitive course navigation and progress tracking.',
        tech: ['Figma', 'Design System', 'Prototyping', 'UX Research']
    },
    {
        id: 9,
        title: 'Fashion Blog Website',
        category: 'web-design',
        categoryLabel: 'Web Design',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
        description: 'Elegant and stylish blog design for a fashion influencer with focus on visual storytelling and content presentation.',
        tech: ['WordPress', 'Custom Theme', 'CSS Grid', 'Animations']
    }
];

// Render portfolio items
const portfolioGrid = document.getElementById('portfolio-grid');

function renderPortfolio(filter = 'all') {
    portfolioGrid.innerHTML = '';

    const filteredData = filter === 'all'
        ? portfolioData
        : portfolioData.filter(item => item.category === filter);

    filteredData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item fade-in';
        portfolioItem.style.animationDelay = `${index * 0.1}s`;
        portfolioItem.setAttribute('data-id', item.id);

        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="portfolio-img">
            <div class="portfolio-overlay">
                <p class="portfolio-category">${item.categoryLabel}</p>
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-description">${item.description.substring(0, 80)}...</p>
            </div>
        `;

        portfolioItem.addEventListener('click', () => openModal(item));
        portfolioGrid.appendChild(portfolioItem);
    });

    // Trigger fade-in animation
    setTimeout(() => {
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.classList.add('visible');
        });
    }, 100);
}

// Initial render
renderPortfolio();

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        renderPortfolio(filter);
    });
});

// ===============================================
// PORTFOLIO MODAL
// ===============================================
const modal = document.getElementById('portfolio-modal');
const modalClose = document.getElementById('modal-close');

function openModal(item) {
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-category').textContent = item.categoryLabel;
    document.getElementById('modal-description').textContent = item.description;

    const techTags = document.getElementById('modal-tech-tags');
    techTags.innerHTML = '';
    item.tech.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techTags.appendChild(tag);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===============================================
// SKILLS ANIMATION
// ===============================================
function animateSkills() {
    // Progress bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });

    // Circular progress
    const circularSkills = document.querySelectorAll('.circular-progress');
    circularSkills.forEach(skill => {
        const percent = skill.getAttribute('data-percent');
        const circle = skill.querySelector('.progress-circle');
        const percentValue = skill.querySelector('.percent-value');

        const circumference = 2 * Math.PI * 60;
        const offset = circumference - (percent / 100) * circumference;

        // Animate circle
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);

        // Animate number
        let current = 0;
        const increment = percent / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= percent) {
                percentValue.textContent = percent;
                clearInterval(timer);
            } else {
                percentValue.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// ===============================================
// TESTIMONIALS SLIDER
// ===============================================
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');
const dotsContainer = document.getElementById('testimonial-dots');

let currentTestimonial = 0;

// Create dots
testimonialCards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showTestimonial(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
});

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
});

// Auto-slide testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}, 5000);

// ===============================================
// CONTACT FORM VALIDATION
// ===============================================
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset errors
    document.querySelectorAll('.form-error').forEach(error => {
        error.classList.remove('active');
    });

    let isValid = true;

    // Name validation
    const name = document.getElementById('name');
    if (name.value.trim().length < 2) {
        showError('name-error', 'Please enter a valid name');
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }

    // Subject validation
    const subject = document.getElementById('subject');
    if (subject.value.trim().length < 3) {
        showError('subject-error', 'Subject must be at least 3 characters');
        isValid = false;
    }

    // Message validation
    const message = document.getElementById('message');
    if (message.value.trim().length < 10) {
        showError('message-error', 'Message must be at least 10 characters');
        isValid = false;
    }

    if (isValid) {
        // Show success message
        formSuccess.classList.add('active');
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('active');
        }, 5000);
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.classList.add('active');
}

// ===============================================
// BACK TO TOP BUTTON
// ===============================================
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ===============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger specific animations
            if (entry.target.id === 'skills') {
                animateSkills();
            }

            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
document.querySelectorAll('.service-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
document.getElementById('skills')?.addEventListener('load', () => {
    observer.observe(document.getElementById('skills'));
});

// Observe skills section
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// ===============================================
// NEWSLETTER FORM
// ===============================================
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input');

    if (emailInput.value.trim()) {
        alert('Thank you for subscribing!');
        emailInput.value = '';
    }
});

// ===============================================
// ADD SVG GRADIENT FOR CIRCULAR PROGRESS
// ===============================================
window.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('.circular-progress svg');
    if (svg) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'gradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:#6366f1;stop-opacity:1');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('style', 'stop-color:#8b5cf6;stop-opacity:1');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }
});

// ===============================================
// DOWNLOAD CV FUNCTIONALITY
// ===============================================
const downloadCvBtn = document.querySelector('.download-cv');
if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('CV download functionality would be implemented here. Please add your CV file path.');
    });
}