import React from "react";

const InputText = props => {
  let inputs = props.inputs;
  return (
    <div id={inputs.divId} className={inputs.divClass}>
      <label htmlFor={inputs.id} className="field-label form__label">
        <span className="field-label__content">{inputs.label}</span>
      </label>
      <input
        className={`form__input ${inputs.class}`}
        id={inputs.id}
        name={inputs.name}
        type={inputs.type}
        value={inputs.value}
        onChange={e => props.onChange(e)}
        required={inputs.props.required}
      />
    </div>
  );
};

export default InputText;
