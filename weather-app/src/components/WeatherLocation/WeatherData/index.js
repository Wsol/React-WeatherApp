import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'
import './styles.css';
import {
CLOUD,
CLOUDY,
SUN,
RAIN,
SNOW,
WINDY,
FOG,
} from './../../../constants/weathers'
const WeatherData=()=>(
    <div className="WeatherDataCont">
        <WeatherTemperature 
        temperature={20}
        weatherState={RAIN}
        />
        <WeatherExtraInfo  humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
   
);

export default WeatherData;