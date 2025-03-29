class FeaturesSection {
    constructor() {
        this.features = [
            {
                icon: 'fa-graduation-cap',
                title: 'Expert-Led Training',
                description: 'Learn from certified professionals with years of real-world experience',
                color: 'primary'
            },
            {
                icon: 'fa-hands-helping',
                title: 'Practical Scenarios',
                description: 'Practice in realistic emergency situations with hands-on training',
                color: 'success'
            },
            {
                icon: 'fa-certificate',
                title: 'Certification',
                description: 'Earn internationally recognized certifications upon completion',
                color: 'info'
            },
            {
                icon: 'fa-mobile-alt',
                title: 'Mobile Learning',
                description: 'Access training materials anytime, anywhere on any device',
                color: 'warning'
            },
            {
                icon: 'fa-users',
                title: 'Community Support',
                description: 'Join a network of trained individuals ready to help in emergencies',
                color: 'danger'
            },
            {
                icon: 'fa-sync',
                title: 'Regular Updates',
                description: 'Stay current with the latest first aid protocols and techniques',
                color: 'secondary'
            }
        ];
    }

    render() {
        const section = document.createElement('section');
        section.className = 'features-section py-5 bg-light';

        const container = document.createElement('div');
        container.className = 'container';

        // Section header
        const header = document.createElement('div');
        header.className = 'text-center mb-5';
        header.innerHTML = `
            <h2 class="display-4 fw-bold mb-3">Why Choose FASE-1?</h2>
            <p class="lead text-muted">Comprehensive training that makes a difference</p>
        `;
        container.appendChild(header);

        // Features grid
        const row = document.createElement('div');
        row.className = 'row g-4';

        this.features.forEach((feature, index) => {
            const col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6';
            col.innerHTML = `
                <div class="feature-card h-100" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body p-4">
                            <div class="feature-icon mb-3">
                                <span class="icon-circle bg-${feature.color} bg-opacity-10 text-${feature.color}">
                                    <i class="fas ${feature.icon} fa-2x"></i>
                                </span>
                            </div>
                            <h3 class="h4 mb-3">${feature.title}</h3>
                            <p class="text-muted mb-0">${feature.description}</p>
                        </div>
                    </div>
                </div>
            `;
            row.appendChild(col);
        });

        container.appendChild(row);

        // Call to action
        const cta = document.createElement('div');
        cta.className = 'text-center mt-5';
        cta.innerHTML = `
            <a href="#" class="btn btn-primary btn-lg">
                Start Your Training Journey
                <i class="fas fa-arrow-right ms-2"></i>
            </a>
        `;
        container.appendChild(cta);

        section.appendChild(container);
        return section;
    }

    // Add custom styles to document
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .icon-circle {
                width: 64px;
                height: 64px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .feature-card {
                transition: transform 0.3s ease;
            }
            
            .feature-card:hover {
                transform: translateY(-5px);
            }
        `;
        document.head.appendChild(style);
    }
}

// Export the component
window.FeaturesSection = FeaturesSection;
