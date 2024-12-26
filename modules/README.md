# FASE-1 Module Structure

This directory contains all the training modules for the FASE-1 platform.

## Current Modules

1. Cardiac Care
2. CPR and AED
3. Choking
4. Asthma
5. Seizures
6. Environmental Emergencies
7. Poisoning
8. Bleeding Control
9. Basic Life Support
10. Fractures
11. Childbirth

## Directory Structure

```
modules/
├── template.html          # Base template for all module pages
├── cardiac.html           # Cardiac emergency module
├── cpr-aed.html           # CPR and AED module
├── choking.html           # Choking response module
├── asthma.html            # Asthma management module
├── seizures.html          # Seizure response module
├── environmental.html     # Environmental emergencies module
├── poisoning.html         # Poisoning response module
├── bleeding-control.html  # Bleeding control module
├── basic_life_support.html # Basic life support module
├── fractures.html         # Fracture management module
└── childbirth.html        # Childbirth emergency module
```

## Module Development Guidelines

1. Each module should:
   - Follow the template.html structure
   - Include proper `data-module-id` and `data-section-id` attributes
   - Implement all required sections (theory, practice, quiz)
   - Include appropriate media resources

2. Resource Guidelines:
   - Images: Use .jpg/.png format, optimized for web
   - Videos: Use .mp4 format, compressed appropriately
   - Keep resource files under 5MB when possible

3. Quiz Implementation:
   - Minimum 10 questions per module
   - Mix of multiple choice and true/false
   - Clear feedback for incorrect answers
   - 80% passing score requirement

4. Progress Tracking:
   - All sections must include proper tracking attributes
   - Prerequisites must be defined in `moduleConfig.js`
   - Progress saves automatically to localStorage

## Adding New Modules

1. Create a new HTML file in this directory
2. Copy `template.html` as a base
3. Customize content for the specific emergency type
4. Update main README.md to include the new module
5. Ensure all tracking and navigation scripts are properly implemented
