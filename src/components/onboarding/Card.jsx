import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SubmitBtn from "../buttons/SubmitBtn";
import WhiteBtn from "../buttons/WhiteBtn";
import FormInput from "../input/FormInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function SignUpPage({ h1, p }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
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
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.country) newErrors.country = "Country is required";
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
      setLoading(true);
      try {
        const response = await axios.post(
          "https://theowletapp.com/server/api/v1/users/auth/register",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        toast.success("Registration successful!");
        navigate("/signin");
      } catch (error) {
        console.error(error);
        setErrors({ api: "Registration failed. Please try again." });
        toast.error("Registration failed. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="lgss:bg-white lgss:border w-[90%] md:w-[50%] lgss:w-[35%] rounded-[12px] flex flex-col justify-center items-center px-8 py-5">
      <ToastContainer />
      <h1 className="font-semibold text-[1.2rem]">{h1}</h1>
      <p className="text-[1rem]">{p}</p>
      <FormInput
        type="text"
        name="first_name"
        id="first_name"
        placeholder="Enter your first name"
        value={formData.first_name}
        onChange={handleChange}
        error={errors.first_name}
        errorMessage={errors.first_name}
      />
      <FormInput
        type="text"
        name="last_name"
        id="last_name"
        placeholder="Enter your last name"
        value={formData.last_name}
        onChange={handleChange}
        error={errors.last_name}
        errorMessage={errors.last_name}
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
        type="text"
        name="country"
        id="country"
        placeholder="Enter your country code e.g 234"
        value={formData.country}
        onChange={handleChange}
        error={errors.country}
        errorMessage={errors.country}
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

      {errors.api && <p className="text-red-500">{errors.api}</p>}

      <div className="w-full font-semibold">
        <SubmitBtn
          onClick={handleSubmit}
          buttonText="Get Started"
          loading={loading}
        />
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

export default SignUpPage;
