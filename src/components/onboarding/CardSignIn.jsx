import { Link } from "react-router-dom";
import { logo } from "../../assets";
import SubmitBtn from "../buttons/SubmitBtn";
import WhiteBtn from "../buttons/WhiteBtn";
import FormInput from "../input/FormInput";

function CardSignIn({ h1, p }) {
  return (
    <div className="lgss:bg-white lgss:border w-[90%] md:w-[50%] lgss:w-[35%] rounded-[12px] flex flex-col justify-center items-center px-8 py-5">
      <img src={logo} alt="" />
      <h1 className="font-semibold text-[1.2rem]">{h1}</h1>
      <p className="text-[1rem]">{p}</p>
      <FormInput
        type={"text"}
        name={"email"}
        id={"email"}
        placeholder={"Enter your email"}
      />
      <FormInput
        type={"password"}
        name={"password"}
        id={"password"}
        placeholder="Enter your password"
      />
      <div className="w-full flex justify-between items-center m-2 text-sm">
        <div className="flex justify-center items-center gap-2">
          <input type="checkbox" />
          <p className="text-left text-secondary pt-1">Remember for 30 days</p>
        </div>
        <div className="text-primary font-semibold">
          <a href="#">Forgot password</a>
        </div>
      </div>
      <div className="w-full font-semibold">
        <SubmitBtn buttonText={"Sign in"} />
        <WhiteBtn buttonText={"Sign in with Google"} />
        <div className="pt-5 flex justify-center items-center">
          <p className="font-normal">
            Don&apos;t have an account?
            <span className="text-primary font-bold pl-2">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardSignIn;
