/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './form-input.styles.scss';

function FormInput({ handleChange, name, type, value, label, required }) {
  const isLabelRequired = label;
  const applyInputShrinkClass = value.length;

  const labelElementClassname = applyInputShrinkClass
    ? 'form-input-label shrink'
    : 'form-input-label';

  let labelElement = '';

  if (isLabelRequired) {
    labelElement = <label className={labelElementClassname}>{label}</label>;
  }

  return (
    <div className="group">
      <input
        className="form-input"
        name={name}
        type={type}
        value={value}
        lablel={label}
        required={required}
        onChange={handleChange}
      />
      {labelElement}
    </div>
  );
}

export default FormInput;
