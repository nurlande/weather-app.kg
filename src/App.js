import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Form from './Form';
import Result from './Result';
import 'bootstrap/dist/css/bootstrap.css';


const API_KEY = "f9ca8c0dae08a06bcb199e9ef0431ca0";



class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined
    }

    getPogoda = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country
        });
    }
    render () {
        return(
        <div>
            <Header />
            <div className="container">
            <div className="row">
            <div className="col-sm-4">
            <Sidebar />
            </div>
            <div className="col-sm-8">
            <div className="row">
            <div className="col">
            <Form pogoda = {this.getPogoda}/>
            </div>
            <div className="col">
            <Result
            celcius= { this.state.temp}
            cityName = { this.state.city}
            countryName = { this.state.country}
            />
            </div>
            </div>
            </div>
            </div>
            </div>
         </div>
            )
    }
}

export default App;
