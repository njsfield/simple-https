const https = require('https');
const fs    = require('fs');
const read  = fs.readFileSync;
const svr   = https.createServer;

// Read keys
const options = {
    key:  read('./certs/key.pem'),
    cert: read('./certs/cert.pem')
}

// Main export
module.exports = svr(options, (req, res) =>{
    res.writeHead(200);
    res.end("hello world\n");
})
