import React, { Component } from "react";
import InputText from ".././InputText/InputText";
import birthInputs from "../.././data/birthDate";

class BirthDate extends Component {
  state = {
    birthInputs: birthInputs,
    day: "",
    month: "",
    year: ""
  };

  formatDate = () => {
    let day = this.state.day;
    let month = this.state.month;
    let year = this.state.year;
    let birthDate = `${year}-${month}-${day}`;
    return birthDate;
  };
  handleFieldChange = () => {
    this.props.onChange({
      target: {
        name: this.props.input.name,
        value: this.formatDate()
      }
    });
  };
  handleDateChange = e => {
    if (e.target.name === "customerBirthdayDay") {
      this.setState(
        {
          day: e.target.value
        },
        () => {
          this.handleFieldChange();
        }
      );
    }
    if (e.target.name === "customerBirthdayMonth") {
      this.setState(
        {
          month: e.target.value
        },
        () => {
          this.handleFieldChange();
        }
      );
    }
    if (e.target.name === "customerBirthdayYear") {
      this.setState(
        {
          year: e.target.value
        },
        () => {
          this.handleFieldChange();
        }
      );
    }
  };

  render() {
    let fields = this.state.birthInputs;
    let birthDateFields = Object.values(fields).map((input, i) => {
      if (input.name === "customerBirthdayDay") {
        input.value = this.state.day;
      }
      if (input.name === "customerBirthdayMonth") {
        input.value = this.state.month;
      }
      if (input.name === "customerBirthdayYear") {
        input.value = this.state.year;
      }
      return birthDateFields;
    });
    return (
      <fieldset>
        <div className="bd24_checkout-form-field form-field--memorable-date form-field--birthday">
          <legend>
            <span>Gebutsdatum * </span>
          </legend>
          <div id="birthdate" className="bd24_checkout-form__birthdate form__birthdate">
            <div className="form__input form__input--select field-birthdate_day">
              <InputText onChange={this.handleDateChange} inputs={fields.customerBirthdayDay} />
            </div>
            <div className="form__input form__input--select field-birthdate_month">
              <InputText onChange={this.handleDateChange} inputs={fields.customerBirthdayMonth} />
            </div>
            <div className="form__input form__input--select field-birthdate_year">
              <InputText onChange={this.handleDateChange} inputs={fields.customerBirthdayYear} />
            </div>
          </div>
          <input id="birthday-backend-date" type="hidden" />
        </div>
      </fieldset>
    );
  }
}

export default BirthDate;
