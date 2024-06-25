import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitBtn from "../buttons/SubmitBtn";
import WhiteBtn from "../buttons/WhiteBtn";
import FormInput from "../input/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { loggedInUser } from "../../store/UserSlice";

function CardSignIn({ h1, p }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      dispatch(loggedInUser(formData));
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    if (user) {
      toast.success("Login successful!");
      setTimeout(() => {
        let auth = localStorage.getItem("token");
        localStorage.removeItem("token");
        // window.location.assign(`http://localhost:5174/?auth=${auth}`);
        window.location.assign(`https://the-owlet.vercel.app/?auth=${auth}`);
      }, 2000);
    }
    if (error) {
      toast.error(error);
    }
  }, [user, error]);

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
