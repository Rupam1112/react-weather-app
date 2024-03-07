import React from 'react';
import './timeAndLocation.css';
import { formatToLocalTime } from '../../service/weather';
const TimeAndLocation = ({weather:{name,country,dt,timezone}}) => {
    return (
        <div>
            <div className="local-date-time-wrapper">
                <p className="local-date-time">{formatToLocalTime(dt, timezone)} </p>
            </div>

            <div className="location-wrapper">
                <p className="location">{`${name}, ${country}`}</p>
            </div>
        </div>
    )
}
export default TimeAndLocation;