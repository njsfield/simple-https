## Notes

- [x] Initial Setup

- [Cert generation for HTTPS]((https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server/))
```
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem

mv cert.pem certs/cert.pem && key.pem certs/key.pem
```
- [ ] Start Server: `npm run start`
- [ ] Visit `https://localhost:8000`, then Proceed to localhost;
[!proceed](docs/proceed.png)


