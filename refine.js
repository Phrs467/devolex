const fs = require('fs');
const path = require('path');

const dir = 'd:\\Pedro\\Devolex\\devolex\\src\\components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace rounded corners
    content = content.replace(/rounded-\[24px\]/g, 'rounded-none');
    content = content.replace(/rounded-\[20px\]/g, 'rounded-sm');
    content = content.replace(/rounded-\[18px\]/g, 'rounded-sm');
    content = content.replace(/rounded-\[12px\]/g, 'rounded-none');
    content = content.replace(/rounded-\[10px\]/g, 'rounded-none');
    content = content.replace(/rounded-xl/g, 'rounded-sm');
    content = content.replace(/rounded-lg/g, 'rounded-sm');
    
    // Replace big shadows with fine borders or no shadow
    content = content.replace(/shadow-\[.*?\]/g, 'shadow-none');
    
    // Remove the blurry background glows (AI template vibe)
    content = content.replace(/<div className="absolute inset-0 bg-blue-500\/10 blur-\[100px\] rounded-full" \/>/g, '');
    content = content.replace(/<div className="absolute top-0 left-0 w-64 h-64 bg-white\/5 rounded-full -translate-x-1\/2 -translate-y-1\/2 blur-2xl" \/>/g, '');
    content = content.replace(/<div className="absolute bottom-0 right-0 w-96 h-96 bg-black\/10 rounded-full translate-x-1\/3 translate-y-1\/3 blur-3xl" \/>/g, '');

    fs.writeFileSync(file, content);
});
