import React from "react";

const createFormField = (
  id,
  placeholder,
  name,
  type,
  handleChange,
  handleBlur,
  emailValue,
  style
) => {
  return (
    <div>
      <input
        id={id}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={emailValue}
        className={style}
      />
    </div>
  );
};
export default createFormField;
