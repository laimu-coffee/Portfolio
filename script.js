document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Particle System (Gnosia Lele vibe)
    const createParticles = () => {
        const particleCount = 40;
        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('div');
            p.style.cssText = `
                position: fixed;
                width: ${Math.random() * 3}px;
                height: ${Math.random() * 3}px;
                background: white;
                border-radius: 50%;
                top: ${Math.random() * 100}vh;
                left: ${Math.random() * 100}vw;
                opacity: ${Math.random() * 0.4};
                pointer-events: none;
                z-index: 5;
                filter: blur(1px);
            `;
            document.body.appendChild(p);

            gsap.to(p, {
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                duration: 5 + Math.random() * 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    };

    // 2. Reveal Animations
    const initReveals = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.out"
            });
        });
    };

    // 3. Parallax Background Text
    const initParallax = () => {
        document.querySelectorAll('.parallax-text').forEach(text => {
            const speed = text.getAttribute('data-speed');
            gsap.to(text, {
                scrollTrigger: {
                    trigger: text.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
                y: speed,
                ease: "none"
            });
        });
    };

    
    createParticles();
    initReveals();
    initParallax();
    initGlitch();
});