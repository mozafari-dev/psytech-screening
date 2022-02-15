import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div class="row mb-3">
      <label htmlFor={name}>{label}</label>
      <div class="col-sm-10">
        <select name={name} id={name} {...rest} className="form-control">
          <option value="" />
          {options.map(option => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Select;
