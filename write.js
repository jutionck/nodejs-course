const fs = require('fs');

const writeFile = (file, content) => {
    fs.writeFileSync(file, content);
}

module.exports = { writeFile }
