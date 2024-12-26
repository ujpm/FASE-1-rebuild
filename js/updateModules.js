const fs = require('fs');
const path = require('path');

// Read the template file
const templatePath = path.join(__dirname, '../modules/module-template.html');
const template = fs.readFileSync(templatePath, 'utf8');

// Get all HTML files in the modules directory
const modulesDir = path.join(__dirname, '../modules');
const files = fs.readdirSync(modulesDir)
    .filter(file => file.endsWith('.html') && file !== 'module-template.html');

// Helper function to extract module content
function extractModuleContent(html) {
    const contentStartMatch = html.match(/<div class="module-content[^>]*>/);
    const contentEndMatch = html.match(/<\/div>\s*<!-- End Module Content -->/);
    
    if (!contentStartMatch || !contentEndMatch) {
        return null;
    }

    const startIndex = contentStartMatch.index;
    const endIndex = contentEndMatch.index + contentEndMatch[0].length;
    
    return html.substring(startIndex, endIndex);
}

// Process each module file
files.forEach(file => {
    const filePath = path.join(modulesDir, file);
    const moduleHtml = fs.readFileSync(filePath, 'utf8');
    
    // Extract module content
    const moduleContent = extractModuleContent(moduleHtml);
    if (!moduleContent) {
        console.log(`Skipping ${file} - could not extract module content`);
        return;
    }
    
    // Create new module HTML with navigation
    let newHtml = template;
    
    // Replace module content placeholder
    newHtml = newHtml.replace('<!-- Module Content Here -->', moduleContent);
    
    // Update title
    const titleMatch = moduleHtml.match(/<title>(.*?)<\/title>/);
    if (titleMatch) {
        newHtml = newHtml.replace('<title>[Module Title] - FASE-1</title>', titleMatch[0]);
    }
    
    // Write updated file
    fs.writeFileSync(filePath, newHtml);
    console.log(`Updated ${file}`);
});
