import React, { Component } from 'react';
import { FormInput } from './hooks/form-hook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormInput required={false} type="text" label="Name" />
        <FormInput required={true} type="email" label="Your Email"/>
        <FormInput required={true} type="number" label="Pin"/>
      </div>
    );
  }
}

export default App;
