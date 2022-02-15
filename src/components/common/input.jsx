import React from "react";

const Input = ({ name, label, error, placeholder, ...rest }) => {
  return (
    <div className="row mb-3">
      <label className="col-sm-2 col-form-label col-form-label-lg" htmlFor={name}>{label}</label>
      <div className="col-sm-5">
        <input {...rest} id={name} name={name} className="form-control form-control-lg" placeholder={placeholder} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Input;
