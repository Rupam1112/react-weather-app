import { DateTime } from 'luxon';

const API_KEY = 'ADD_YOUR_KEY';
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

const getDataFromAPI = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
    return fetch(url).then((res) => res.json());
}

const formatWeather = (data) => {
    let obj = {
        lat: data.coord.lat,
        lon: data.coord.lon,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        rise: data.sys.sunrise,
        set: data.sys.sunset,
        country: data.sys.country,
        wind: data.wind.speed,
        weather: data.weather[0].main,
        icon: data.weather[0].icon,
        name: data.name,
        dt: data.dt

    }

    return obj;

}

const formatForecat = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })

    hourly = hourly.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    })


    return { timezone, daily, hourly };

}

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc , dd LLL yyyy' | Local Time : 'hh:mm a") => {
    let time = DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
    return time;
}


const getWeatherData = async (searchParams) => {
    const data = await getDataFromAPI('weather', searchParams);
    const weather = formatWeather(data);
    const lat = weather.lat;
    const lon = weather.lon;
    const forecast = await getDataFromAPI('onecall', { lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units });
    const formatted_forecast = formatForecat(forecast);
    return { ...formatted_forecast, ...weather };

};

const getIconUrl = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`;
}



export default getWeatherData;
export { formatToLocalTime, getIconUrl };