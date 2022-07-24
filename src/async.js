function samplePromise() {
    return Promise.resolve('Bulan');
}

// const name = await samplePromise()
// console.log(name) // error karena file bukan async.js -> ubah ke .mjs

// Solusi
const getName = async () => {
    const name = await samplePromise()
    console.log(name) // error karena file bukan async.js -> ubah ke .mjs
}

getName()
