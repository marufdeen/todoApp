import React, { useState } from "react";

const SelectField = ({
  name,
  label,
  error,
  datasets,
  onChange,
  ...otherProps
}) => {
  const sets = [...new Set(datasets)];

  const [state, setState] = useState(false);

  const onFocus = () => {
    setState(true);
  };

  const onClick = (value) => {
    const target = { name, value };
    onChange({ target });
    setState(false);
  };

  return (
    <div className="col-md-3 position-relative">
      <label htmlFor={name} className="form-label custom-label">
        {label}
      </label>
      <input
        onFocus={onFocus}
        type="text"
        autoComplete="off"
        name={name}
        onChange={onChange}
        {...otherProps}
        className="form-control form-control-md"
        id={name}
      /> 
      {state && (
        <section className="select-field position-absolute w-100">
          {otherProps.value && (
            <div className="select-field-option">type: {otherProps.value}</div>
          )}
          {sets.map(
            (eachSet) =>
              eachSet.includes(otherProps.value) && (
                <div
                  key={eachSet}
                  className="select-field-option"
                  onClick={() => onClick(eachSet)}
                >
                  {eachSet}
                </div>
              )
          )}
        </section>
      )}
    </div>
  );
};

export default SelectField;
