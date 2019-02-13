import React from "react";

const CheckBox = props => {
  let inputs = props.inputs;
  return (
    <div id={inputs.divId} className={inputs.divClass}>
      <input
        id={inputs.id}
        name={inputs.name}
        className={inputs.class}
        type={inputs.type}
        defaultChecked={inputs.checked || false}
        value={inputs.value}
        required={inputs.props.required}
        onClick={e => props.onChange(e)}
      />
      <label htmlFor={inputs.id} className="field-label field-label--checkbox">
        <span className="field-label__content">
          Ja, ich habe das Produktinformationsblatt , die Verbraucherinformationen, Informationen
          zum Widerrufsrecht und Versicherungsbedingungen sowie die Informationen zum Datenschutz
          und die Sicherheitshinweise gelesen und stimme zu!
        </span>
      </label>

      {/* <p className="p-error" /> */}
    </div>
  );
};
export default CheckBox;
