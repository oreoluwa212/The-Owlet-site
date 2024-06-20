import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitBtn from "../buttons/SubmitBtn";
import WhiteBtn from "../buttons/WhiteBtn";
import FormInput from "../input/FormInput";
import Cookies from "js-cookie";

function CardSignIn({ h1, p }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://theowletapp.com/server/api/v1/users/auth/login",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data;
        if (response.status === 200 && data.success) {
          toast.success(data.message || "Login successful!");

          const userData = {
            firstName: data.data.user.firstname,
            lastName: data.data.user.lastname,
            email: data.data.user.email,
          };
          Cookies.set("userData", JSON.stringify(userData), {
            expires: 7,
            path: "/",
          });
          setTimeout(() => {
            // window.location.assign(`http://localhost:5174`);
            window.location.assign(`https://the-owlet.vercel.app`);
          }, 2000);
        } else {
          toast.error(
            data.message ||
              "Login failed. Please check your credentials and try again."
          );
          setErrors({
            api:
              data.message ||
              "Login failed. Please check your credentials and try again.",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        if (error.response && error.response.status === 401) {
          setErrors({ api: "Invalid credentials. Please try again." });
          toast.error("Invalid credentials. Please try again.");
        } else {
          setErrors({
            api: "Login failed. Please check your credentials and try again.",
          });
          toast.error(
            "Login failed. Please check your credentials and try again."
          );
        }
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="lgss:bg-white lgss:border w-[90%] md:w-[50%] lgss:w-[30%] rounded-[12px] flex flex-col justify-center items-center px-8 py-5">
      <ToastContainer />
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
      <div className="w-full font-semibold">
        <SubmitBtn
          onClick={handleSubmit}
          buttonText="Sign in"
          loading={loading}
        />
        <WhiteBtn buttonText="Sign in with Google" />
      </div>
      <div className="pt-5 flex justify-center items-center">
        <p className="font-normal">
          Don&apos;t have an account?
          <span className="text-primary font-bold pl-2">
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default CardSignIn;
