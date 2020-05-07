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
        const transformedData = weatherData.data.map((__forecast) => {
            return {
                forecast:__forecast.weather.description,
                time:__forecast.valid_date
            };
        });
        return transformedData;
    } catch (e) {
        return [{}];
    }
}


module.exports = {
    mungeLocation, 
    mungeWeather
};
