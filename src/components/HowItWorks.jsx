import { illustration1, illustration2, illustration3 } from "../assets";
import InstaCard from "./cards/InstaCard";
import HeaderH1 from "./textComponent/HeaderH1";

function HowItWorks({ h2 }) {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10 px-[8%] my-10">
      <div className="flex flex-col lgss:justify-center lgss:items-center w-full">
        <h1 className="uppercase text-primary text-[1.3rem] font-semibold">
          HOW IT WORKS
        </h1>
        <HeaderH1 h1="Place an order in 3 easy steps" />
        <div className="flex w-full lgss:flex-row flex-col justify-between items-center gap-12 pt-8">
          <InstaCard
            h2={"Sign up for free"}
            number={"01"}
            img={illustration1}
            p="The first step is to sign up for an account on the website by giving some basic personal data. You'll get an activation email after registration; click on it to confirm your account, then follow the instructions in the email to log in."
          />
          <InstaCard
            h2={"Fund your account"}
            number={"02"}
            img={illustration2}
            p="Once you've signed in, click on the 'Fund Account' section, choose a payment option, and add funds to your account. Adding fund to your account enables you to buy instagram followers or other social media services from the-owlet.com"
          />
          <InstaCard
            h2={h2}
            number={"03"}
            img={illustration3}
            p={
              "Look through the many packages that we offer. We provide a few cheap plans that just give a few YouTube views as well as a few expensive ones that give a lot of views. Whatever your requirements are, you can pick a package that meets them."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
