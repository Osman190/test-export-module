import React from "react";

const InputRadio = props => {
  const inputs = props.inputs;

  const options = inputs.options.map(option => {
    return (
      <div className="field-radio-wrapper" key={option.key}>
        <label htmlFor={option.id} className="field-label">
          <span className="field-label__content">{option.label}</span>
        </label>
        <input
          id={option.id}
          type={inputs.type}
          name={inputs.name}
          className={option.class}
          value={option.value}
          required={inputs.props.required}
          defaultChecked={option.checked}
          onClick={e => props.onChange(e)}
        />
      </div>
    );
  });

  return (
    <div id={inputs.id} className="radios-wrapper">
      {options}
    </div>
  );
};

export default InputRadio;
