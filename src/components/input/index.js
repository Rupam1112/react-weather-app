import React, { useState } from "react";
import './input.css';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

const Input = ({ setSearch, setUnits, units }) => {
    const [city, setCity] = useState('');
    const handleSearch=()=>{
        if(city !=='') setSearch({q:city});
        setCity('');
    }
    const handleUnits=(e)=>{
        const selectedUnit= e.target.name;
        if(units!== selectedUnit){
            setUnits(selectedUnit);
        }
       
    }
    const handleLocation=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                let lat= position.coords.latitude;
                let lon= position.coords.longitude;
                setSearch({lat,lon});
            })
        }
    }
    return (
        <div className="input-wrapper">
            <div className="input">
                <input type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="search for city..."
                    className="input-box"
                />
                <UilSearch size={25} className="input-icons" onClick={handleSearch}/>
                <UilLocationPoint size={25} className="input-icons" onClick={handleLocation}/>
            </div>
            <div className="unit-wrapper">
                <button className="unit" name='metric'onClick={handleUnits} >°C</button>
                <p className="separator">|</p>
                <button className="unit"  name='imperial' onClick={handleUnits} >°F</button>
            </div>
        </div>)
}

export default Input;