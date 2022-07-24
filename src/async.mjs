function samplePromise() {
    return Promise.resolve('Bulan');
}

const name = await samplePromise()
console.log(name)
