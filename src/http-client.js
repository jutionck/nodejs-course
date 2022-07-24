const https = require('https');

const endpoint = 'https://jsonplaceholder.typicode.com/posts';
const request = https.request(endpoint, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}, (response) => {
    response.addListener('data', (data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
});

request.end();
