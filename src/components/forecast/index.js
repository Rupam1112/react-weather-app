import React from 'react';
import './forecast.css';
import '../../App.css';
import { getIconUrl } from '../../service/weather';
const Forecast = ({ title, forecast }) => {

    return (
        <div>

            <div className='forecast-header'>
                <span className='label'>{title}</span>
            </div>
            <hr className='divider' />

            <div className='forecat-container'>
            {forecast.map((data) => {
                return (
                        <div className='forecast'>
                            <span className='forecast-time' > {data.title}</span>
                            <img
                                src={getIconUrl(data.icon)}
                                alt=""
                                className="img"
                            />
                            <span className='temp'>{data.temp.toFixed()}°</span>
                        </div>
                )
            }
            )}
            </div>
        </div>
    )
}
export default Forecast;