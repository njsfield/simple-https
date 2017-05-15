const port = 8000;
const log  = console.log;

// Start
require('./src/server').listen(port, () => {
    log(`Server listening at https://localhost:${port}`);
});
