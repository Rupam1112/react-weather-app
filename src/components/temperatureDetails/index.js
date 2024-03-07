import React from 'react';
import './temperatureDetails.css';
import '../../App.css';
import { getIconUrl , formatToLocalTime } from '../../service/weather';
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons';
const TemperatureDetails = ({ weather: { temp, humidity, weather, feels_like, wind ,icon ,temp_max,temp_min,rise,set,timezone} }) => {

    return (
        <div>
            <div className="weather">
                <p>{weather}</p>
            </div>

            <div className="weather-details">
                <img
                    src={getIconUrl(icon)}
                    alt=""
                    className="img"
                />
                <p className="temp">{`${temp.toFixed()}°`}</p>
                <div className="feel-humidity-wind-wrapper">
                    <div className="feel-humidity-wind">
                        <UilTemperature size={18} className="mr" />
                        Real Feel:
                        <span style={{ fontWeight: '600', marginLeft: '0.25rem' }} >{`${feels_like.toFixed()}°`}</span>
                    </div>
                    <div className="feel-humidity-wind">
                        <UilTear size={18} className="mr" />
                        Humudity:
                        <span style={{ fontWeight: '600', marginLeft: '0.25rem' }} >{humidity}%</span>
                    </div>
                    <div className="feel-humidity-wind">
                        <UilWind size={18} className="mr" />
                        Wind:
                        <span style={{ fontWeight: '600', marginLeft: '0.25rem' }} >{wind}km/ph</span>
                    </div>
                </div>
            </div>
            <div className="weather-details">
                <UilSun />
                <p style={{ fontWeight: '300' }} >Rise:
                    <span style={{ fontWeight: '600', marginLeft: '0.25rem' }} >{formatToLocalTime(rise,timezone,'hh:mm a')}</span></p>
                <p style={{ fontWeight: '200' }}>|</p>
                <UilSunset />
                <p style={{ fontWeight: '300' }} >Set:
                    <span style={{ fontWeight: '600', marginLeft: '0.25rem' }} >{formatToLocalTime(set,timezone,'hh:mm a')}</span></p>
                <p style={{ fontWeight: '200' }}>|</p>
                <UilArrowUp />
                <p style={{ fontWeight: '300' }} >High:
                    <span style={{ fontWeight: '600', marginLeft: '0.25rem' }} >{`${temp_max}`}</span></p>
                <p style={{ fontWeight: '200' }}>|</p>
                <UilArrowDown />
                <p style={{ fontWeight: '300' }} >Low:
                    <span style={{ fontWeight: '600', marginLeft: '0.25rem' }} >{`${temp_min}`}</span></p>
            </div>

        </div>
    )
}
export default TemperatureDetails;