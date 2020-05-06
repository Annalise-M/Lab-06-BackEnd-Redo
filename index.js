const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/location?:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    response.json({ hello: 'world' });
});

app.get('/weather', (request, response) => {
    console.log('you hit the weather route');
    response.json({ hello: 'weather' });
});


app.listen(PORT, () => console.log(`running on port ${PORT}`));
