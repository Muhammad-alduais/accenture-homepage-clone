const fs = require('fs');
const path = require('path');

function findFilesRecursively(dir, extensions) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function searchInFile(filePath, patterns) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = [];
    
    for (const pattern of patterns) {
      const regex = new RegExp(pattern, 'g');
      let match;
      while ((match = regex.exec(content)) !== null) {
        matches.push({
          pattern: pattern,
          match: match[0],
          line: content.substring(0, match.index).split('\n').length
        });
      }
    }
    
    return matches;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return [];
  }
}

// Main execution
const srcDir = 'src';
const extensions = ['.tsx', '.ts'];
const purplePatterns = ['purple-600', 'purple-500', 'purple-700', 'purple-400'];

console.log('Searching for purple color classes in TypeScript/TSX files...\n');

try {
  const files = findFilesRecursively(srcDir, extensions);
  let foundFiles = 0;
  
  for (const file of files) {
    const matches = searchInFile(file, purplePatterns);
    
    if (matches.length > 0) {
      foundFiles++;
      console.log(`📁 ${file}:`);
      
      for (const match of matches) {
        console.log(`  Line ${match.line}: ${match.match}`);
      }
      console.log('');
      
      // Limit to first 10 files as requested
      if (foundFiles >= 10) {
        break;
      }
    }
  }
  
  if (foundFiles === 0) {
    console.log('No purple color classes found in TypeScript/TSX files.');
  } else {
    console.log(`Found purple color classes in ${foundFiles} file(s).`);
  }
  
} catch (error) {
  console.error('Error:', error.message);
}