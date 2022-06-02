const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=5823938a2409c7e2dd6c9915e9ed68c4&query=${latitude},${longitude}`;

	request({ url, json: true }, (error, response) => {
		if (error) {
			callback(
				"Unable to connect to weather service!",
				undefined
			);
		} else if (!response.body) {
			callback("Unable to find location", undefined);
		} else {
			callback(undefined, {
				locationName: response.body.location.name,
				locationRegion: response.body.location.region,
				locationCountry: response.body.location.country,
				temperature: response.body.current.temperature,
				feelsLike: response.body.current.feelslike,
				precip: response.body.current.precip,
				wind: response.body.current.wind_speed,
				windDir: response.body.current.wind_dir,
				description:
					response.body.current.weather_descriptions[0],
				lastUpdate: response.body.current.observation_time,
				weatherIcon: response.body.current.weather_icons[0],
			});
		}
	});
};

module.exports = forecast;
