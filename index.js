const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const request = require('superagent');
const cors = require('cors');
const { mungeLocation, mungedWeather } = require('./utils.js');
// const locationData = require('./data/geo.json');
// const weatherData = require('./data/weather.json');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());


app.get('/location', async(req, res) => {
    

    try {
        const data = await request.get('https://us1.locationiq.com/v1/search.php?key=e66a268895dc7a&q=Portland&format=json');
        
        const mungedData = mungeLocation(data.body);
        res.json(mungedData);
    } catch (e) {
        res.json({
            status: 500,
            responseText: 'Banana!!',
            e,
        });
    }
    

});

app.get('/weather', async(req, res) => {
    try {
        const data = await req.get('');
        const mungedData = mungedWeather(data.body);

        res.json(mungedData);
    } catch (e) {
        res.json({
            status: 500,
            responseText: 'Sorry, something went wrong',
            e,
        });
    }
});

// error for any unknown location
app.get('*', (req, res) => {
    res.status(404).json({
        error:'no such route!',
    });
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));