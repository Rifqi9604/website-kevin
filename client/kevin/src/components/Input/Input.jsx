// Input.js

import React from "react";

const Input = (props) => {
  const { label, name, type, value, onChange, error } = props;
  return (
    <div className="flex flex-col gap-4">
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        placeholder={`Type here`}
        className="input input-bordered input-primary w-full max-w-sm"
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
