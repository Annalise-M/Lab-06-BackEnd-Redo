function mungeLocation(locationData) {
    try {
        const transformedData = locationData.map((location) => {
            
            return {
                formatted_query : location.display_name,
                latitude : location.lat,
                longitude : location.lon
            };
        });
        return transformedData;
    } catch (e) {
        return {};
    }
}

function mungeWeather(weatherData) {
    try {
        const transformedData = weatherData.map((weather) => {
            return {
                forecast: weather,
                datetime: weather.valid_date
            };
        });
        return transformedData;
    } catch (e) {
        return [{}];
    }
}

function mungeTrails(trailsData) {
    try {
        const transformedData = trailsData.map((trails) => {
            return {
                formatted_query : trails.display_name,
                latitude : location.lat,
                longitude : location.lon
            };
        });
        return transformedData;
    } catch (e) {
        return [{}];
    }
}

module.exports = {
    mungeLocation, 
    mungeWeather,
    mungeTrails
};
