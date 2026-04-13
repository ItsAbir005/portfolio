const https = require('https');

const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/search/issues?q=author:ItsAbir005+type:pr&per_page=100',
    method: 'GET',
    headers: {
        'User-Agent': 'Node.js'
    }
};

https.get(options, (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            const owners = new Set();
            parsedData.items.forEach(item => {
                const parts = item.repository_url.split('/');
                owners.add(parts[parts.length - 2]);
            });
            console.log('Owners:', Array.from(owners));
        } catch (e) {
            console.error(e.message);
        }
    });
});
