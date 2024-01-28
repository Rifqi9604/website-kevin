import React from "react";

export const Input = (props) => {
  const { label, onChange, name, type, value, error } = props;
  return (
    <>
      <label className="text-[12px] font-bold pb-2">{label}</label>
      <input
        onChange={onChange}
        name={name}
        type={type}
        value={value}
        className="w-[236px] h-[35px] border-slate-600 rounded-[4px] px-2 py-2  border-[1px]"
      />
      {error && <p className="text-red-500 text-[12px]">{error}</p>}
    </>
  );
};
