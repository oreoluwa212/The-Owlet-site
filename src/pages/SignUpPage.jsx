import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BoardingNavMenu from "../components/onboarding/BoardingNavMenu";
import FormInput from "../components/input/FormInput";
import SubmitBtn from "../components/buttons/SubmitBtn";
import WhiteBtn from "../components/buttons/WhiteBtn";
import ClipLoader from "react-spinners/ClipLoader";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    password: "",
  });

  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoadingCountries(true);
        const response = await fetch(
          "https://theowletapp.com/server/api/v1/list/country"
        );
        const data = await response.json();
        if (data.success) {
          setCountries(data.data);
        } else {
          toast.error("Failed to fetch countries");
        }
      } catch (error) {
        toast.error("An error occurred while fetching countries");
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "country") {
      const selectedCountry = countries.find(
        (country) => country.name === value
      );
      setFormData({
        ...formData,
        country: selectedCountry ? selectedCountry.dial_code : "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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
        console.log("Response:", response.data);

        if (response.data.success) {
          toast.success("Registration successful!");
          setTimeout(() => {
            navigate(`/signin`);
          }, 1000);
        } else {
          toast.error("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        if (
          error.response &&
          error.response.data.message === "Validation errors"
        ) {
          setErrors({ email: "Email is already in use" });
        } else {
          setErrors({ api: "Registration failed. Please try again." });
        }
        toast.error("Registration failed. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-[rgb(249,250,251)] overflow-hidden h-screen">
      <ToastContainer />
      <BoardingNavMenu />
      <div className="lgss:bg-white lgss:border w-[90%] md:w-[50%] lgss:w-[30%] rounded-[12px] flex flex-col gap-3 mx-auto mt-10 justify-center items-center px-8 py-5">
        <h1 className="font-semibold text-[1.2rem]">Create an account</h1>
        <p className="text-[1rem]">Sign up in less than 2 minutes.</p>
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
        <div className="w-full font-semibold">
          {loadingCountries ? (
            <div className="flex justify-center">
              <ClipLoader
                size={35}
                color={"#123abc"}
                loading={loadingCountries}
              />
            </div>
          ) : (
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={handleChange}
              className="block w-full p-2 font-normal border border-gray-300 rounded-md outline-none placeholder:"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          )}
        </div>
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
    </div>
  );
};

export default SignUpPage;
