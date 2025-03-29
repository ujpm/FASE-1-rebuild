class StatisticsSection {
    constructor() {
        this.stats = [
            {
                number: '10,000+',
                label: 'Lives Impacted',
                icon: 'fa-users'
            },
            {
                number: '95%',
                label: 'Success Rate',
                icon: 'fa-chart-line'
            },
            {
                number: '24/7',
                label: 'Emergency Support',
                icon: 'fa-clock'
            },
            {
                number: '500+',
                label: 'Certified Trainers',
                icon: 'fa-certificate'
            }
        ];
    }

    render() {
        const section = document.createElement('section');
        section.className = 'statistics-section py-5 bg-gradient';
        section.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';

        const container = document.createElement('div');
        container.className = 'container';

        const row = document.createElement('div');
        row.className = 'row text-center';

        this.stats.forEach((stat, index) => {
            const col = document.createElement('div');
            col.className = 'col-md-3 col-sm-6 mb-4';
            col.innerHTML = `
                <div class="stat-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="stat-icon mb-3">
                        <i class="fas ${stat.icon} fa-3x text-primary"></i>
                    </div>
                    <h2 class="stat-number display-4 fw-bold text-primary">${stat.number}</h2>
                    <p class="stat-label text-muted">${stat.label}</p>
                </div>
            `;
            row.appendChild(col);
        });

        container.appendChild(row);
        section.appendChild(container);
        return section;
    }
}

// Export the component
window.StatisticsSection = StatisticsSection;
