const fs = require('fs');

let html = fs.readFileSync('sunday-school-choir.html', 'utf8');

// First, let's extract the JavaScript parts so we don't mess with them
const script1Start = html.indexOf('<script src=');
const script1End = html.indexOf('</script>', script1Start) + '</script>'.length;
const script2Start = html.indexOf('<script>', script1End);
const script2End = html.indexOf('</script>', script2Start) + '</script>'.length;

const beforeScripts = html.substring(0, script1Start);
const script1 = html.substring(script1Start, script1End);
const betweenScripts = html.substring(script1End, script2Start);
const script2Content = html.substring(script2Start + '<script>'.length, script2End - '</script>'.length);
const afterScripts = html.substring(script2End);

// Format the HTML parts (non-JS)
function formatHTML(html) {
    // Add newlines after common block tags
    let result = html;
    
    // Add newline after DOCTYPE
    result = result.replace('<!DOCTYPE html>', '<!DOCTYPE html>\n');
    
    // Add newlines after opening tags
    const openTags = ['<html', '<head', '<body', '<main', '<footer', '<section', '<nav', '<div', '<header', '<ul', '<li'];
    for (const tag of openTags) {
        result = result.replaceAll(tag + '>', tag + '>\n    ');
    }
    
    // Add newlines before closing tags
    const closeTags = ['</html>', '</head>', '</body>', '</main>', '</footer>', '</section>', '</nav>', '</div>', '</header>', '</ul>'];
    for (const tag of closeTags) {
        result = result.replaceAll(tag, '\n' + tag);
    }
    
    // Clean up excessive newlines
    result = result.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    return result;
}

// For simplicity, let's just add newlines at key structural points
function addStructuralNewlines(html) {
    let result = html;
    
    // After DOCTYPE
    result = result.replace('<!DOCTYPE html>', '<!DOCTYPE html>\n');
    // After <html lang="en">
    result = result.replace('<html lang="en">', '<html lang="en">\n');
    // After <head>
    result = result.replace('<head>', '<head>\n');
    // Before </head>
    result = result.replace('</head>', '\n</head>\n');
    // After <body>
    result = result.replace('<body>', '<body>\n');
    // Before </body>
    result = result.replace('</body>', '\n</body>\n');
    // Before </html>
    result = result.replace('</html>', '\n</html>\n');
    
    // Style tag
    result = result.replace('<style>', '<style>\n');
    result = result.replace('</style>', '\n    </style>\n    ');
    
    return result;
}

// Rebuild the file
let newHtml = beforeScripts;
newHtml = addStructuralNewlines(newHtml);
newHtml += '\n    ' + script1 + '\n    ';
newHtml += '\n    ' + '<script>\n' + script2Content + '\n    </script>\n';
newHtml += afterScripts;

fs.writeFileSync('sunday-school-choir.html', newHtml);
console.log('Done. File rewritten with proper line breaks.');
