/* eslint-env node */
const express = require('express');
const cors = require('cors');

const app = express();
app.use('/node_modules', express.static('node_modules'));
app.use('/', express.static('app'));
app.use(cors());
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
app.use(
    cors({
        origin: ['https://localhost:1234', 'https://localhost:8080'],
        methods: 'GET,POST,PUT,DELETE',
        credentials: true,
    })
);
app.listen(1234, () => console.log(
    'Express server running at http://127.0.0.1:1234'));