import React from 'react';

class Result extends React.Component {
    render () {
        return (
            <div>
            {this.props.cityName &&
            <div>
            <p>Температура в городе {this.props.cityName} {this.props.countryName} <br / >
            <b>{this.props.celcius}</b> Celcius градусов.</p>
            {/*<p>Рассвет в вашем городе в {this.props.rassvet}</p>
            <p>Закат в вашем городе в {this.props.zakat}</p>*/}
            <p>Уровень давления: {this.props.davlenie}</p>
            <p>Скорость ветра:  {this.props.veter} метров/cекунды</p>

            </div>
            }
            </div>
        )
    }
}

export default Result;