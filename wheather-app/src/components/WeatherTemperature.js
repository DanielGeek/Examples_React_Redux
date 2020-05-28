import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        <WeatherIcons name="horizon-alt" size="2x" />
        <span>{ `${temperature} Cº`}</span>
    </div>
);

export default WeatherTemperature;