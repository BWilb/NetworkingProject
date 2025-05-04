const express = require('express');
const app = express();

// Your middleware and routes go here
app.get('/', (req, res) => {
    res.send('Hello from WebStorm project on GCP!');
});

// 👇 Put this at the end
app.listen(22, '0.0.0.0', () => {
    console.log('Server is running on port 80 and accessible externally.');
});
