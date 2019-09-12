import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="formWrapper">
        <div className="formBody">
          <Input
            defaultValue="Номер"
            className="inputForm"
            value={this.props.item.id}
            inputProps={{
              'aria-label': 'description',
            }}
          />
          <Input
            defaultValue="Название"
            className="inputForm"
            value={this.props.item.title}
            inputProps={{
              'aria-label': 'description',
            }}
          />
          <Input
            defaultValue="Описание"
            className="inputForm"
            value={this.props.item.desc}
            inputProps={{
              'aria-label': 'description',
            }}
          />
        </div>
      </div>
    );
  }
}

export default Form;
