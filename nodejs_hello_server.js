// server.js - Backend Server
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static('public'));

// API endpoint that returns "Hello World"
app.get('/api/hello', (req, res) => {
    res.json({ 
        message: 'Hello World from Backend!',
        timestamp: new Date().toISOString(),
        server: 'Node.js/Express'
    });
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
