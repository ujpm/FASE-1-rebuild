class ImpactSection {
    constructor() {
        this.researchData = {
            survivalRate: {
                percentage: 85,
                description: 'Higher survival rate when first aid is administered within the first minute'
            },
            responseTime: {
                value: '3-4',
                unit: 'minutes',
                description: 'Average emergency response time in urban areas'
            },
            trainingImpact: {
                percentage: 92,
                description: 'Of trained individuals feel more confident in emergency situations'
            }
        };
    }

    render() {
        const section = document.createElement('section');
        section.className = 'impact-section py-5';
        section.style.background = 'linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%)';
        section.style.color = 'white';

        section.innerHTML = `
            <div class="container">
                <div class="row mb-5 text-center">
                    <div class="col-12">
                        <h2 class="display-4 fw-bold mb-3">Our Impact Through Research</h2>
                        <p class="lead opacity-75">Backed by data, driven by results</p>
                    </div>
                </div>

                <div class="row g-4">
                    <!-- Survival Rate Card -->
                    <div class="col-lg-4" data-aos="fade-up">
                        <div class="impact-card h-100 bg-white bg-opacity-10 rounded-3 p-4">
                            <div class="d-flex align-items-center mb-3">
                                <i class="fas fa-heartbeat fa-2x me-3 text-warning"></i>
                                <h3 class="h4 mb-0">Survival Rate</h3>
                            </div>
                            <div class="display-3 fw-bold mb-2">${this.researchData.survivalRate.percentage}%</div>
                            <p class="mb-0 opacity-75">${this.researchData.survivalRate.description}</p>
                        </div>
                    </div>

                    <!-- Response Time Card -->
                    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="impact-card h-100 bg-white bg-opacity-10 rounded-3 p-4">
                            <div class="d-flex align-items-center mb-3">
                                <i class="fas fa-clock fa-2x me-3 text-warning"></i>
                                <h3 class="h4 mb-0">Response Time</h3>
                            </div>
                            <div class="display-3 fw-bold mb-2">${this.researchData.responseTime.value}</div>
                            <p class="text-warning mb-2">${this.researchData.responseTime.unit}</p>
                            <p class="mb-0 opacity-75">${this.researchData.responseTime.description}</p>
                        </div>
                    </div>

                    <!-- Training Impact Card -->
                    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="impact-card h-100 bg-white bg-opacity-10 rounded-3 p-4">
                            <div class="d-flex align-items-center mb-3">
                                <i class="fas fa-chart-line fa-2x me-3 text-warning"></i>
                                <h3 class="h4 mb-0">Training Impact</h3>
                            </div>
                            <div class="display-3 fw-bold mb-2">${this.researchData.trainingImpact.percentage}%</div>
                            <p class="mb-0 opacity-75">${this.researchData.trainingImpact.description}</p>
                        </div>
                    </div>
                </div>

                <!-- Additional Research Insights -->
                <div class="row mt-5">
                    <div class="col-12">
                        <div class="research-insights p-4 bg-white bg-opacity-10 rounded-3" data-aos="fade-up">
                            <h3 class="h4 mb-4">Key Research Insights</h3>
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <div class="d-flex align-items-start">
                                        <i class="fas fa-check-circle fa-lg text-warning mt-1 me-3"></i>
                                        <p class="mb-0">Every minute without CPR decreases survival chance by 7-10%</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="d-flex align-items-start">
                                        <i class="fas fa-check-circle fa-lg text-warning mt-1 me-3"></i>
                                        <p class="mb-0">Immediate first aid can prevent 35% of pre-hospital deaths</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        return section;
    }
}

// Export the component
window.ImpactSection = ImpactSection;
