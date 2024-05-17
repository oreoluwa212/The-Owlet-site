import React from "react";
import BoardingNavMenu from "../components/onboarding/BoardingNavMenu";
import Card from "../components/onboarding/Card";

const SignUpPage = () => {
  return (
    <div className="bg-[rgb(249,250,251)] overflow-hidden h-screen">
      <BoardingNavMenu />
      <div className="w-full flex justify-center lgss:pt-10 pt-4">
        <Card h1="Create an account" p="Sign up in less than 2 minutes." />
      </div>
    </div>
  );
};

export default SignUpPage;
