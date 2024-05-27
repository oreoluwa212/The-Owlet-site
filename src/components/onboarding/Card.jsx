import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubmitBtn from "../buttons/SubmitBtn";
import WhiteBtn from "../buttons/WhiteBtn";
import FormInput from "../input/FormInput";

function Card({ h1, p }) {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
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
    if (!formData.fname) newErrors.fname = "First name is required";
    if (!formData.lname) newErrors.lname = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // window.location.href = "http://localhost:5174/";
      window.location.href = "https://the-owlet.vercel.app/";
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
        name="fname"
        id="fname"
        placeholder="Enter your first name"
        value={formData.fname}
        onChange={handleChange}
        error={errors.fname}
        errorMessage={errors.fname}
      />
      <FormInput
        type="text"
        name="lname"
        id="lname"
        placeholder="Enter your last name"
        value={formData.lname}
        onChange={handleChange}
        error={errors.lname}
        errorMessage={errors.lname}
      />
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
        placeholder="Create a password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        errorMessage={errors.password}
        defaultMessage="Must be at least 8 characters"
      />
      <div className="w-full font-semibold">
        <SubmitBtn onClick={handleSubmit} buttonText="Get Started" />
        <WhiteBtn buttonText="Sign up with Google" />
        <div className="pt-3 flex justify-center items-center">
          <p className="font-normal">
            Already have an account?
            <span className="text-primary font-bold pl-2">
              <Link to="/signin">Log in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;