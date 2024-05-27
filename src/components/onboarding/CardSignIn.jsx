import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubmitBtn from "../buttons/SubmitBtn";
import WhiteBtn from "../buttons/WhiteBtn";
import FormInput from "../input/FormInput";

function CardSignIn({ h1, p }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      window.location.href = "https://the-owlet.vercel.app/";
      // window.location.href = "http://localhost:5174/";
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="lgss:bg-white lgss:border w-[90%] md:w-[50%] lgss:w-[35%] rounded-[12px] flex flex-col justify-center items-center px-8 py-5">
      <h1 className="font-semibold text-[1.2rem]">{h1}</h1>
      <p className="text-[1rem]">{p}</p>
      <FormInput
        type="text"
        name="email"
        id="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        errorMessage={errors.email}
      />
      <FormInput
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        errorMessage={errors.password}
        defaultMessage="Must be at least 8 characters"
      />
      <div className="w-full flex justify-between items-center m-2 text-sm">
        <div className="flex justify-center items-center gap-2">
          <input type="checkbox" />
          <p className="text-left text-secondary pt-1">Remember for 30 days</p>
        </div>
        <div className="text-primary font-semibold">
          <a href="#">Forgot password</a>
        </div>
      </div>
      <div className="w-full font-semibold">
        <SubmitBtn onClick={handleSubmit} buttonText="Sign in" />
        <WhiteBtn buttonText="Sign in with Google" />
        <div className="pt-5 flex justify-center items-center">
          <p className="font-normal">
            Don&apos;t have an account?
            <span className="text-primary font-bold pl-2">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardSignIn;
