class ModuleNavigation {
    constructor() {
        this.currentSection = 'intro';
        this.sections = [];
        this.progressBar = null;
        this.prevButton = null;
        this.nextButton = null;
        this.moduleId = window.location.pathname.split('/').pop().replace('.html', '');
    }

    initialize() {
        // Get all section IDs from nav links
        this.sections = Array.from(document.querySelectorAll('.nav-link'))
            .map(link => link.getAttribute('href').substring(1));

        // Get UI elements
        this.progressBar = document.querySelector('.progress-bar');
        this.prevButton = document.getElementById('prevModule');
        this.nextButton = document.getElementById('nextModule');

        // Set up navigation event listeners
        this.setupNavigation();
        
        // Initialize first section and check completion
        this.showSection(this.currentSection);
        this.checkModuleCompletion();
        this.updateNavigationButtons();
    }

    setupNavigation() {
        // Handle nav link clicks
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.showSection(targetId);
            });
        });

        // Handle module navigation
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.navigateModule('prev'));
        }
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.navigateModule('next'));
        }

        // Handle completion button
        const completeButton = document.getElementById('completeModule');
        if (completeButton) {
            completeButton.addEventListener('click', () => this.completeModule());
        }
    }

    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.module-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
            this.updateProgress();
        }

        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    updateProgress() {
        if (this.progressBar) {
            const currentIndex = this.sections.indexOf(this.currentSection);
            const progress = ((currentIndex + 1) / this.sections.length) * 100;
            this.progressBar.style.width = `${progress}%`;
            this.progressBar.setAttribute('aria-valuenow', progress);
        }
    }

    navigateModule(direction) {
        const modules = Object.keys(window.moduleConfig.modules);
        const currentIndex = modules.indexOf(this.moduleId);
        
        let nextIndex;
        if (direction === 'next') {
            nextIndex = currentIndex + 1;
        } else {
            nextIndex = currentIndex - 1;
        }

        // Check if navigation is possible
        if (nextIndex >= 0 && nextIndex < modules.length) {
            window.location.href = `${modules[nextIndex]}.html`;
        }

        this.updateNavigationButtons();
    }

    updateNavigationButtons() {
        const modules = Object.keys(window.moduleConfig.modules);
        const currentIndex = modules.indexOf(this.moduleId);
        
        if (this.prevButton) {
            this.prevButton.disabled = currentIndex === 0;
        }
        if (this.nextButton) {
            this.nextButton.disabled = currentIndex === modules.length - 1;
        }
    }

    completeModule() {
        // Get completed modules from localStorage
        let completedModules = JSON.parse(localStorage.getItem('completedModules') || '[]');
        
        // Add current module if not already completed
        if (!completedModules.includes(this.moduleId)) {
            completedModules.push(this.moduleId);
            localStorage.setItem('completedModules', JSON.stringify(completedModules));
        }

        // Update UI
        document.querySelector('.module-content').classList.add('module-completed');
        
        // Navigate back to training page
        setTimeout(() => {
            window.location.href = '../training.html';
        }, 1000);
    }

    checkModuleCompletion() {
        const completedModules = JSON.parse(localStorage.getItem('completedModules') || '[]');
        if (completedModules.includes(this.moduleId)) {
            document.querySelector('.module-content').classList.add('module-completed');
        }
    }
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', () => {
    const moduleNav = new ModuleNavigation();
    moduleNav.initialize();
});
