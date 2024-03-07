import React from 'react';
import './header.css';
const Header = ({ setSearch }) => {
    const cities = [{
        id: 1,
        title: 'London'
    }, {
        id: 2,
        title: 'Sydney'
    }, {
        id: 3,
        title: 'Tokyo'
    }, {
        id: 4,
        title: 'Toronto'
    }, {
        id: 5,
        title: 'Paris'
    }];

    return (
        <div className="header">
            {cities.map((city) => (
                <button
                    key={city.id}
                    className="city" onClick={() => setSearch({ q: city.title })}
                >
                    {city.title}
                </button>
            ))}
        </div>
    )
}
export default Header;