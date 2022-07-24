const fs = require('fs/promises');

// Read file
const filePath = './src/file-system.js'
const buffer = fs.readFile(filePath);

buffer.then(r => {
    console.info(r.toString());
});

fs.writeFile('assets/file.txt', 'Test menulis file lagi').then(r => {
    console.log(r)
});
