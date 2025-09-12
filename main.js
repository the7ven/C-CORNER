  // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    mobileMenu.classList.remove('active');
                }
            });
        });
        
        // Intersection Observer for animations
        function createObserver() {
            const elements = document.querySelectorAll('.fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            elements.forEach(element => {
                observer.observe(element);
            });
        }
        
        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            createObserver();
        });
        
        // CTA button interactions
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function(e) {
                // Add click effect
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Simulate action based on button text
                const buttonText = this.textContent.trim();
                
                if (buttonText.includes('Trouver un logement')) {
                    alert('Redirection vers la page de recherche...');
                } else if (buttonText.includes('agent immobilier')) {
                    alert('Redirection vers l\'inscription agent...');
                } else if (buttonText.includes('Commencer')) {
                    alert('Redirection vers l\'inscription...');
                } else if (buttonText.includes('démo')) {
                    alert('Lancement de la démo interactive...');
                } else if (buttonText.includes('connecter')) {
                    alert('Redirection vers la page de connexion...');
                } else if (buttonText.includes('inscrire')) {
                    alert('Redirection vers la page d\'inscription...');
                }
            });
        });
        
        // Add navbar background on scroll
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.backdropFilter = 'blur(10px)';
            } else {
                nav.style.background = 'white';
                nav.style.backdropFilter = 'none';
            }
        });
        
        // Parallax effect for hero section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.5;
            
            if (hero) {
                hero.style.backgroundPosition = `center ${rate}px`;
            }
        });
        
        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
        
        // Enhanced button hover effects
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Add typing effect to hero title (optional)
        function typeWriter() {
            const text = "L'immobilier camerounais enfin professionnel";
            const heroTitle = document.querySelector('.hero h1');
            let i = 0;
            
            function type() {
                if (i < text.length) {
                    heroTitle.innerHTML = text.substring(0, i) + '<span class="highlight">enfin professionnel</span>';
                    i++;
                    setTimeout(type, 50);
                }
            }
            
            // Uncomment to enable typing effect
            // type();
        }
        
        // Initialize typing effect
        // typeWriter();