import React, { Component } from 'react';
import Form from './weatherform.js';
import './weatherapp.css';
import Header from './weatherheader.js';
import Data from './weatherdata.js';
const key = "41725dca2b4b0c4dec4cfbbabba4af72";
class Weather extends Component {
    constructor() {
        super()
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        }
    }
    getweather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${key}`);
        const data = await api_call.json();
        if (city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp - 273,
                city: data.name,
                humidity: data.main.humidity,
                description: data.weather[0].description,
            })
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter values"
            })
        }
    }
    render() {
        const value=Math.round(this.state.temperature);
        return <div className='main'>
            <div className='title'>
            <img src="https://img.icons8.com/ios/50/000000/cloud.png"/>
            <img src="https://img.icons8.com/ios/50/000000/bright-moon.png"/>
            <img src="https://img.icons8.com/ios/50/000000/cloud-lighting.png"/>
            <img src="https://img.icons8.com/ios/50/000000/partly-cloudy-night.png"/>
            <img src="https://img.icons8.com/ios/50/000000/partly-cloudy-day.png"/>
            <img src="https://img.icons8.com/ios/50/000000/clouds.png"/>
            <Header /> 
            </div>
            <div className='form'>
                <Form getweather={this.getweather} />
            </div>
            <div className='weather'>
                <Data
                temperature={value}
                city={this.state.city}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
            />
            </div>

        </div>
    }
}

export default Weather;





















