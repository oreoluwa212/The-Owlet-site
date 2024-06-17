import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitBtn from "../buttons/SubmitBtn";
import WhiteBtn from "../buttons/WhiteBtn";
import FormInput from "../input/FormInput";

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length === 0) {
  //     setLoading(true);
  //     try {
  //       const response = await axios.post(
  //         "https://theowletapp.com/server/api/v1/users/auth/login",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       console.log("Response:", response);
  //       const data = response.data;
  //       console.log("Data:", data);
  //       toast.success(response.message);

  //       // Construct query parameters with user details
  //       // const queryParams = new URLSearchParams({
  //       //   firstName: data.user.firstname,
  //       //   lastName: data.user.lastname,
  //       //   email: data.user.email,
  //       // }).toString();

  //       // Redirecting with query parameters
  //       navigate(
  //         `http://localhost:5174?firstname=${data.user.first_name}&lastname=${data.user.last_name}&email=${data.user.email}`
  //       );
  //       setTimeout(() => {
  //         // window.location.href = `http://localhost:5174?${queryParams}`;
  //         // window.location.href = `https://the-owlet.vercel.app?${queryParams}`;
  //       }, 1000);
  //     } catch (error) {
  //       console.error("Error:", error);
  //       setErrors({
  //         api: "Login failed. Please check your credentials and try again.",
  //       });
  //       toast.error(
  //         "Login failed. Please check your credentials and try again."
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   } else {
  //     setErrors(validationErrors);
  //   }
  // };

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
        console.log("Data:", data);

        toast.success(response.message);

        // Construct query parameters with user details
        const queryParams = new URLSearchParams({
          firstName: data.data.user.firstname,
          lastName: data.data.user.lastname,
          email: data.data.user.email,
        }).toString();

        // window.location.assign(`http://localhost:5174?${queryParams}`);
        window.location.assign(`https://the-owlet.vercel.app?${queryParams}`);
      } catch (error) {
        console.error("Error:", error);
        setErrors({
          api: "Login failed. Please check your credentials and try again.",
        });
        toast.error(
          "Login failed. Please check your credentials and try again."
        );
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
      {errors.api && <p className="text-red-500">{errors.api}</p>}
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
