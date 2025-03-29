class HomePageManager {
    constructor() {
        this.sections = {
            statistics: new StatisticsSection(),
            testimonials: new TestimonialsSection(),
            impact: new ImpactSection(),
            features: new FeaturesSection()
        };
    }

    init() {
        const homePage = document.getElementById('homePage');
        if (!homePage) return;

        // Get existing sections
        const heroSection = homePage.querySelector('.hero-section');
        const aboutSection = homePage.querySelector('#about');
        const footerSection = document.querySelector('.footer');

        if (heroSection && aboutSection && footerSection) {
            // 1. First, remove footer temporarily
            footerSection.remove();

            // 2. Insert new sections in the correct order
            // After hero: Statistics
            heroSection.after(this.sections.statistics.render());

            // After statistics: Features
            const featuresSection = this.sections.features.render();
            this.sections.features.addStyles();
            homePage.insertBefore(featuresSection, aboutSection);

            // After about: Impact
            const impactSection = this.sections.impact.render();
            aboutSection.after(impactSection);

            // After impact: Testimonials
            const testimonialsSection = this.sections.testimonials.render();
            impactSection.after(testimonialsSection);

            // 3. Add footer back at the end
            homePage.appendChild(footerSection);

            // 4. Initialize AOS with gentler settings
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 1000,        // Longer duration for smoother animations
                    once: true,            // Only animate once
                    offset: 100,           // Start animation when element is 100px from viewport
                    delay: 0,              // No delay between animations
                    easing: 'ease-in-out', // Smoother easing function
                    mirror: false,         // Don't animate out when scrolling back up
                    anchorPlacement: 'top-bottom' // Trigger when top of element hits bottom of viewport
                });
            }
        }
    }
}

// Export the component
window.HomePageManager = HomePageManager;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const homeManager = new HomePageManager();
    homeManager.init();
});
