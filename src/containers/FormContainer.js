import React, { Component } from "react";
import CheckBox from ".././components/CheckBox/CheckBox";
import InputText from "../components/InputText/InputText";
import InputSelect from ".././components/InputSelect/InputSelect";
import InputRadio from ".././components/InputRadio/InputRadio";
import BirthDate from ".././components/BirthDate/BirthDate";
// import Button from "../components/Button/";

class FormContainer extends Component {
  state = {
    inputs: this.props.inputs,
    parts: this.props.parts
  };

  onChange = e => {
    let target = e.target;
    let mainInputs = { ...this.state.inputs, ...this.props.birthInputs };
    let data = Object.values(mainInputs);
    data.map(item => {
      if (item.type === "checkbox") {
        return target.checked ? (item.value = "yes") : (item.value = "no");
      } else {
        return item.name === target.name ? (item.value = target.value) : null;
      }
    });
    this.setState({ data });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.props.onSubmit) this.props.onSubmit(this.state.inputs);
  };

  renderForm = () => {
    const self = this;
    const inputs = blocks => {
      let mainForm = blocks.map((block, i) => {
        const rows = block.keys.map((chain, i) => {
          let inputsField = chain.map((key, i) => {
            let fields = self.state.inputs[key];
            if (
              typeof fields.conditional === "undefined" ||
              !fields.conditional ||
              self.state.inputs[fields.conditional.fieldName].value === fields.conditional.value
            ) {
              switch (fields.type) {
                case "select":
                  return <InputSelect onChange={this.onChange} inputs={fields} key={i} />;
                case "text":
                  return <InputText onChange={this.onChange} inputs={fields} key={i} />;
                case "birthDate":
                  return <BirthDate onChange={this.onChange} inputs={fields} key={i} />;
                case "radio":
                  return <InputRadio onChange={this.onChange} inputs={fields} key={i} />;
                case "checkbox":
                  return <CheckBox onChange={this.onChange} inputs={fields} key={i} />;
                default:
                  return "";
              }
            }
            return null;
          });
          return (
            <div className="form__fields-row" key={i}>
              {inputsField}
            </div>
          );
        });
        return (
          <div className={block.class} key={i}>
            <p className="form__title">{block.title}</p>
            <div>{rows}</div>
          </div>
        );
      });
      return mainForm;
    };

    const blocks = () => {
      let parts = { ...this.state.parts };
      let keys = Object.values(parts).map(item => {
        return item;
      });
      return keys;
    };

    return [inputs(blocks())];
  };

  render() {
    return (
      <div className="bd24-checkout-container__form-wrapper">
        <h3>Payment Method</h3>
        <form
          id="customer-data-form"
          className="form checkout-form"
          action="#"
          method="post"
          onSubmit={e => {
            this.onSubmit(e);
          }}
        >
          {this.renderForm()}
          <div className="bd24__checkout-actions">
            <br />
            <button className="form__btn submit" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormContainer;
