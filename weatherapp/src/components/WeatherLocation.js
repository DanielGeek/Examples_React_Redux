import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div>
        <Location city={'Venezuela Zulia'} />
        <WeatherData />
    </div>
);

export default WeatherLocation;