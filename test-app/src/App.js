import React, { Component } from 'react';
import './App.css';
import Table from './components/table/Index.js'
import Form from './components/form/Index.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      item: []
    };
    this.updateData = this.updateData.bind(this);
  }
  updateData = (value) => {
    this.setState({item: value})
  };
  render() {
    return (
      <div className="appWrapper">
        <Table updateData={this.updateData} item={this.props.items} />
        <Form item={this.state.item}/>
      </div>
    );
  }
}

export default App;
