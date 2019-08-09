import React from 'react';

class Result extends React.Component {
    render () {
        return (
            <div>
            {this.props.cityName &&
            <div>
            <p>{this.props.cityName} is {this.props.celcius} Celcius.</p>
            <p>You country is {this.props.countryName}</p>
            </div>
            }
            </div>
        )
    }
}

export default Result;