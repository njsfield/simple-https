const https = require('https');
const fs    = require('fs');
const read  = fs.readFileSync;
const svr   = https.createServer;
const port  = 8000;
const log   = console.log;

// Get keys
const options = { 
    key:  read('./certs/key.pem'),
    cert: read('./certs/cert.pem')
}

svr(options, (req, res) =>{ 
    res.writeHead(200);
    res.end("hello world\n");
}).listen(port, () => { 
    log(`Server listening at https://localhost:${port}`);
});


