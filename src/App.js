import React, { Component } from "react";
import FormContainer from "./containers/FormContainer";
import "./App.css";

import inputs from "./data/checkout";
import categories from "./data/categories";

class App extends Component {
  state = {
    inputs,
    categories
  };

  getValues = data => {
    let values = {};
    let dataObject = Object.values(data);

    dataObject.map(item => {
      return (values[item.name] = item.value);
    });

    return this.validation(values);
  };

  validation = values => {
    let items = Object.values(values);
    let errors = 0;
    items.map(item => {
      if (item === "") {
        errors++;
      }
      return errors > 0 ? false : true;
    });
  };

  onSubmit = data => {
    return this.getValues(data);
  };

  render() {
    return (
      <div id="bd24-checkout-container">
        <FormContainer
          inputs={this.state.inputs}
          parts={this.state.categories}
          onSubmit={data => {
            this.onSubmit(data);
          }}
        />
      </div>
    );
  }
}

export default App;
