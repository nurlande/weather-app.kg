import React from 'react';

class Result extends React.Component {
    render () {
        return (
            <div>
            {this.props.cityName &&
            <div>
            <p>Температура в {this.props.cityName}е {this.props.countryName} {this.props.celcius} Celcius градусов.</p>
            <p>Закат в вашем город в {this.props.zakat}</p>
            </div>
            }
            </div>
        )
    }
}

export default Result;