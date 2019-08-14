import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Form from './Form';
import Result from './Result';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';


const API_KEY = "f9ca8c0dae08a06bcb199e9ef0431ca0";



class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunset: undefined,
        sunrise: undefined,
        pressure: undefined,
        wind: undefined
    }

    getPogoda = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);
        var sunset = data.sys.sunset;
        var sunrise = data.sys.sunrise;
        var date = new Date();
        date.setTime(sunset);
        date.setTime(sunrise);
        var sunset_date = date.getHours() + ":"+ date.getMinutes()+":"+date.getSeconds();
        var sunrise_date = date.getHours() + ":"+ date.getMinutes()+":"+date.getSeconds();

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunrise: sunrise_date,
            sunset: sunset_date,
            wind: data.wind.speed
        });
    }
    render () {
        return(
        <div className="full-page">
            <Header />
            <div className="container body">
            <div className="row">
            <div className="col-sm-4">
            <Sidebar />
            </div>
            <div className="col-sm-8">
            <div className="row">
            <div className="col-sm-6">
            <Form pogoda = {this.getPogoda}/>
            </div>
            <div className="col-sm-6">
            <Result
            celcius= { this.state.temp}
            cityName = { this.state.city}
            countryName = { this.state.country}
            zakat = {this.state.sunset}
            rassvet = {this.state.sunrise}
            davlenie = {this.state.pressure}
            veter = {this.state.wind}
            />
            </div>
            </div>
            </div>
            </div>
            </div>
            <Footer />
         </div>
            )
    }
}

export default App;
