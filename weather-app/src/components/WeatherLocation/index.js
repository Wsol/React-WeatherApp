import React, {Component} from 'react';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
}from './../../constants/weathers';



 const data ={
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

// const data2 ={
//     temperature: 15,
//     weatherState: WINDY,
//     humidity: 20,
//     wind: '10 m/s',
// }

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city: "San Pedro Sula",
            data: data,
        }
    }



    

    handleUpdateClick = () =>{
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data:newWeather
            });             
        });

        // console.log("actualizado");

        // this.setState({
        //     city: "Tegucigalpa",
        //     data: data2
        // });
    }

    render(){
        const{city, data} = this.state;
        return(
            <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        );        
    }
}

export default WeatherLocation;