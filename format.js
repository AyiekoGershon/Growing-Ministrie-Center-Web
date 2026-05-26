const fs = require('fs');
let html = fs.readFileSync('sunday-school-choir.html', 'utf8');

// The git version is already multi-line (has \n)
// Check if it's single-line
if (html.indexOf('\n') === -1) {
    // Single line - need to format it properly
    // Add newlines before key structural tags
    html = html.replace(/></g, '>\n<');
    html = html.replace(/>\s+</g, '>\n<');
}

fs.writeFileSync('sunday-school-choir.html', html);
console.log('Done.');
console.log('Lines:', html.split('\n').length);
