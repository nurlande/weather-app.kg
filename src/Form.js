import React from 'react';

class Form extends React.Component {
    render () {
        return (
            <div className="container">
            <h3 className="page-header">Выберите город чтобы узнать погоду</h3>
            <form onSubmit = {this.props.pogoda}>
            <select className="form-control" name="city">
              <option value="Bishkek">Бишкек</option>
              <option value="Karakol">Каракол</option>
              <option value="Osh">Ош</option>
              <option value="Batken">Баткен</option>
              <option value="Talas">Талас</option>
              <option value="Jalal-Abad">Джалал-Абад</option>
              <option value="Naryn">Нарын</option>
            </select>
            <button type="submit" className="btn btn-primary btn-block">Показать погоду</button>
            </form>
            </div>
        )
    }
}

export default Form;