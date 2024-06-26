import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function FormInput({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  error,
  errorMessage,
  defaultMessage,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full relative -z-1">
      <input
        className={`-z-1 border w-full p-2 outline-none rounded-[8px] ${
          error ? "border-red-500" : ""
        }`}
        type={type === "password" && showPassword ? "text" : type}
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
      {type === "password" && (
        <span
          className="absolute right-3 top-3 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
      )}
      <p
        className={`text-xs mt-1 ${error ? "text-red-500" : "text-secondary"}`}
      >
        {error ? errorMessage : defaultMessage}
      </p>
    </div>
  );
}

export default FormInput;