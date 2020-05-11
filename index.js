const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const request = require('superagent');
const cors = require('cors');

const { mungeLocation, mungeWeather } = require('./utils.js');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.get('/location', async(req, res) => {
    

    try {
        const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_KEY}&q=${req.query.search}&format=json`);
        
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
    // console.log('hello world');
    try {
        const data = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}key=${process.env.WEATHER_KEY}`);
        const mungedData = mungeWeather(data.body);
        
        res.json(mungedData);
    } catch (e) {
        res.json({
            status: 500,
            responseText: 'Sorry, something went wrong',
            e,
        });
    }
});




app.get('*', (req, res) => {
    res.status(404).json({
        error:'no such route!',
    });
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));