import React from "react";
import SignInNavMenu from "../components/onboarding/SignInNavMenu";
import CardSignIn from "../components/onboarding/CardSignIn";

const SignInPage = () => {
  return (
    <div className="bg-[rgb(249,250,251)] pb-10 h-screen">
      <SignInNavMenu />
      <div className="w-full flex justify-center pt-16">
        <CardSignIn h1="Welcome back" p="Please enter your details." />
      </div>
    </div>
  );
};

export default SignInPage;
