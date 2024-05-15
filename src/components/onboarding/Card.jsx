import { Link } from "react-router-dom";
import { logo } from "../../assets";
import SubmitBtn from "../buttons/SubmitBtn";
import WhiteBtn from "../buttons/WhiteBtn";
import FormInput from "../input/FormInput";

function Card({ h1, p }) {
  return (
    <div className="bg-white border w-[90%] lgss:w-[30%] rounded-[12px] flex flex-col justify-center items-center  px-10 py-5">
      <img src={logo} alt="" />
      <h1 className="font-semibold text-[1.2rem]">{h1}</h1>
      <p className="text-[1rem]">{p}</p>
      <FormInput
        type={"text"}
        name={"first name"}
        id={"fname"}
        placeholder={"Enter your first name"}
      />
      <FormInput
        type={"text"}
        name={"last name"}
        id={"lname"}
        placeholder={"Enter your last name"}
      />
      <FormInput
        type={"text"}
        name={"email"}
        id={"email"}
        placeholder={"Enter your email"}
      />
      <FormInput
        type={"password"}
        name={"email"}
        id={"email"}
        placeholder={"Create a password"}
      />
      <div className="w-full flex justify-start items-start mb-2">
        <p className="text-left text-secondary pt-1">
          Must be at least 8 characters
        </p>
      </div>
      <div className="w-full font-semibold">
        <SubmitBtn buttonText={"Get Started"} />
        <WhiteBtn buttonText={"Sign up with Google"} />
        <div className="pt-5 flex justify-center items-center">
          <p className="font-normal">
            Already have an account?{" "}
            <span className="text-primary font-bold pl-2">
              <Link to="/signin">Log in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card