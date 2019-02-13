import React from "react";

const InputSelect = props => {
  let inputs = props.inputs;
  return (
    <div id={inputs.divId} className={inputs.divClass}>
      <label htmlFor={inputs.id} className="field-label form__label">
        <span className="field-label__content">{inputs.label}</span>
      </label>
      <select
        name={inputs.name}
        id={inputs.id}
        className={`form__select small ${inputs.class}`}
        required={inputs.props.required}
        onChange={e => props.onChange(e)}
      >
        {inputs.options.map((option, i) => {
          return (
            <option
              htmlFor={option.label}
              key={i}
              value={option.value}
              onClick={e => props.onChange(e)}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputSelect;
