// Enhanced Module System
class ModuleSystem {
    constructor(config) {
        this.config = config;
        this.currentFeatured = [];
        this.updateInterval = 10000; // Update every 10 seconds
        this.startAutoUpdate();
    }

    // Get random featured modules
    getFeaturedModules(count = 3) {
        const allModules = Object.values(this.config.modules);
        const featuredModules = allModules.filter(module => module.featured);
        
        // Shuffle array
        const shuffled = [...featuredModules].sort(() => Math.random() - 0.5);
        
        // Get first 'count' modules or all if less than count
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    // Update featured modules
    updateFeaturedModules() {
        const newFeatured = this.getFeaturedModules();
        const container = document.getElementById('featuredModules');
        if (!container) return;

        // Store old cards for animation
        const oldCards = Array.from(container.children);

        // Create new cards
        const newCards = newFeatured.map(module => this.createModuleCard(module));

        // Animate out old cards
        oldCards.forEach((card, index) => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '0';
            card.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                // Replace with new card
                if (newCards[index]) {
                    newCards[index].style.opacity = '0';
                    newCards[index].style.transform = 'translateX(20px)';
                    container.replaceChild(newCards[index], card);
                    
                    // Trigger reflow
                    newCards[index].offsetHeight;
                    
                    // Animate in
                    newCards[index].style.opacity = '1';
                    newCards[index].style.transform = 'translateX(0)';
                }
            }, 500);
        });
    }

    createModuleCard(module) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.style.transition = 'all 0.5s ease';
        
        col.innerHTML = `
            <div class="card module-card h-100">
                <div class="card-body">
                    <div class="module-icon mb-3">
                        <i class="fas ${module.icon} fa-2x"></i>
                    </div>
                    <h3 class="card-title">${module.title}</h3>
                    <p class="card-text">${module.description}</p>
                    <div class="module-meta">
                        <span class="badge bg-primary me-2">
                            <i class="fas fa-clock me-1"></i> ${module.duration}
                        </span>
                        <span class="badge bg-secondary">
                            <i class="fas fa-layer-group me-1"></i> ${module.difficulty}
                        </span>
                    </div>
                </div>
                <div class="card-footer bg-transparent border-0">
                    <a href="modules/${module.id}.html" class="btn btn-primary w-100">Start Module</a>
                </div>
            </div>
        `;
        
        return col;
    }

    startAutoUpdate() {
        // Initial update
        this.updateFeaturedModules();
        
        // Set interval for updates
        setInterval(() => this.updateFeaturedModules(), this.updateInterval);
    }
}

// Initialize the module system when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.moduleSystem = new ModuleSystem(window.moduleConfig);
});
