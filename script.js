/* ============================================================
   GROWING MISSIONARIES CENTRE - Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const actionBar = document.getElementById('actionBar');
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const backToTop = document.getElementById('backToTop');
    const currentYear = document.getElementById('currentYear');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    const setMobileNav = (isOpen) => {
        if (!navToggle || !navLinks) return;

        navToggle.classList.toggle('active', isOpen);
        navLinks.classList.toggle('active', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        document.body.classList.toggle('nav-open', isOpen);
    };

    const handleActionBarVisibility = (scrollY) => {
        if (!actionBar) return;

        const isCondensed = scrollY > 200;
        actionBar.style.opacity = isCondensed ? '0.72' : '1';
        actionBar.style.pointerEvents = isCondensed ? 'none' : 'auto';
    };

    const updateActiveNavLink = (scrollY) => {
        const sections = document.querySelectorAll('section[id]');
        const offset = 150;
        let activeId = 'home';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - offset;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                activeId = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
        });
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 80);
        }

        if (backToTop) {
            backToTop.classList.toggle('visible', scrollY > 500);
        }

        handleActionBarVisibility(scrollY);
        updateActiveNavLink(scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            setMobileNav(!navLinks.classList.contains('active'));
        });
    }

    // Dropdown handling with improved desktop/mobile support
    document.querySelectorAll('.dropdown').forEach((dropdown) => {
        const toggleLink = dropdown.querySelector('.nav-link');
        
        // Toggle dropdown on click (all screen sizes)
        if (toggleLink) {
            toggleLink.addEventListener('click', (event) => {
                event.preventDefault();
                const isActive = dropdown.classList.contains('active');
                document.querySelectorAll('.dropdown.active').forEach((d) => {
                    d.classList.remove('active');
                });
                if (!isActive) {
                    dropdown.classList.add('active');
                }
            });
        }

        // Prevent dropdown from closing when clicking links inside
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.addEventListener('click', (event) => {
                // Allow links to be clicked normally
                if (event.target.tagName === 'A') {
                    // Navigation will happen naturally
                    dropdown.classList.remove('active');
                }
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown.active').forEach((dropdown) => {
                dropdown.classList.remove('active');
            });
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            setMobileNav(false);

            const offset = window.innerWidth <= 768 ? 112 : 92;
            const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPos,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    });

    const revealObserver = 'IntersectionObserver' in window
        ? new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.05,
            rootMargin: '100px 0px 100px 0px'
        })
        : null;

    document
        .querySelectorAll('.ministries-grid, .branches-grid, .choir-gallery')
        .forEach((group) => {
            group.classList.add('staggered-reveal');
            Array.from(group.children).forEach((child, index) => {
                child.style.setProperty('--stagger-index', String(index));
            });
        });

    document
        .querySelectorAll('.section, .impact-item, .about-card, .ministry-card, .objective-item, .community-card, .give-card, .contact-item, .choir-photo')
        .forEach((element) => {
            if (!revealObserver || prefersReducedMotion) {
                element.classList.add('visible');
                return;
            }

            element.classList.add('reveal');
            revealObserver.observe(element);
        });

    /* Branch cards use CSS animation instead of Intersection Observer reveal for better performance */
    document.querySelectorAll('.branch-card').forEach((element) => {
        element.classList.add('visible');
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    }

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                if (formStatus) {
                    formStatus.textContent = 'Please complete the required fields.';
                    formStatus.className = 'form-status error';
                }
                return;
            }

            const formData = new FormData(contactForm);
            const name = String(formData.get('name') || '').trim();
            const email = String(formData.get('email') || '').trim();
            const subject = String(formData.get('subject') || 'Website enquiry').trim();
            const message = String(formData.get('message') || '').trim();
            const body = [
                `Name: ${name}`,
                `Email: ${email}`,
                '',
                message
            ].join('\n');

            window.location.href = `mailto:growingmissionaries32@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            if (formStatus) {
                formStatus.textContent = 'Your email app should open with the message ready to send.';
                formStatus.className = 'form-status success';
            }
        });
    }

    const hero = document.querySelector('.hero');
    const heroContent = hero?.querySelector('.hero-content');

    if (hero && heroContent && !prefersReducedMotion) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY >= window.innerHeight) return;

            heroContent.style.transform = `translateY(${scrollY * 0.16}px)`;
            heroContent.style.opacity = String(1 - (scrollY / window.innerHeight) * 0.45);
        }, { passive: true });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setMobileNav(false);
            document.querySelectorAll('.dropdown.active').forEach((dropdown) => {
                dropdown.classList.remove('active');
            });
        }
    });
});
