const readline = require('readline');
const process = require('process');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question('What you\'re name ? ', (name) => {
    console.info(`Hai ${name}`);
    input.close();
});
