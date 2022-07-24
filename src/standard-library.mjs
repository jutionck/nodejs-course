// Jika kita membuat sebuah file dengan extension .js maka ketika melakukan ini tidak akan bisa
import os from 'os';

// Solusinya adalah rename file dengan extensi .mjs
console.info(os.platform());
console.table(os.cpus());
