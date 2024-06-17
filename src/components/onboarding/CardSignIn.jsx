import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import SubmitBtn from "../buttons/SubmitBtn";
import WhiteBtn from "../buttons/WhiteBtn";
import FormInput from "../input/FormInput";

function SignInPage({ h1, p }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://theowletapp.com/server/api/v1/auth/login",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        toast.success("Login successful!");
        navigate("/dashboard"); // Assuming there's a dashboard route
      } catch (error) {
        console.log(error);
        setErrors({ api: "Login failed. Please try again." });
        toast.error("Login failed. Please try again.");
      }
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
      />

      {errors.api && <p className="text-red-500">{errors.api}</p>}

      <div className="w-full font-semibold">
        <SubmitBtn onClick={handleSubmit} buttonText="Sign In" />
        <WhiteBtn buttonText="Sign in with Google" />
        <div className="pt-3 flex justify-center items-center">
          <p className="font-normal">
            Don't have an account?
            <span className="text-primary font-bold pl-2">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
