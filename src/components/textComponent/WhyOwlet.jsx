import { useLocation } from "react-router-dom";
import {
  Pattern1,
  Pattern2,
  Pattern3,
  Pattern4,
  Pattern5,
  Pattern6,
  PatternImg1,
  PatternImg2,
  PatternImg3,
  PatternImg4,
  PatternImg5,
  PatternImg6,
} from "../../assets";
import WhyImgComponent from "../WhyImgComponent";
import HeaderH1 from "./HeaderH1";

function WhyOwlet({ h3 }) {
  const location = useLocation();
  const isInstagram = location.pathname === "/instagram";
  const isHome = location.pathname === "/";
  const isYoutube = location.pathname === "/youtube";
  return (
    <div className="pt-16 pb-5 lgss:w-[90%] w-full flex flex-col justify-center lgss:items-center">
      {isInstagram || isHome ? (
        <>
        <div className="px-5">
        <h3 className="text-primary font-semibold uppercase">{h3}</h3>
          <HeaderH1 h1="Why choose The Owlet" />
        </div>
          <WhyImgComponent
            a={"Check out our Services"}
            pattern={Pattern1}
            className="w-full flex lgss:flex-row flex-col-reverse justify-between lgss:items-center"
            patternImg={PatternImg1}
            p="Customize your social media growth effortlessly. Access a wide
              range of services &#8211; likes, followers, views &#8211; at your
              fingertips. Adjust orders anytime to suit your exact needs."
            h1="Take full control"
          />
          <WhyImgComponent
            a={"Create an account"}
            className="w-full flex lgss:flex-row-reverse flex-col-reverse justify-between lgss:items-center"
            pattern={Pattern2}
            patternImg={PatternImg2}
            h1="Effortless growth, maximum security"
            p="Our user-friendly platform provides comprehensive campaign insights in one place. Focus on creating content while we ensure secure and effective growth delivery."
          />
          <WhyImgComponent
            a={"Contact our Support"}
            className="w-full flex lgss:flex-row flex-col-reverse justify-between lgss:items-center"
            pattern={Pattern3}
            patternImg={PatternImg3}
            h1="24/7 support"
            p="Reach out anytime via 24/7 live chat on Whatsapp or email. Our dedicated team is here to empower your success."
          />
        </>
      ) : isYoutube ? (
        <>
        <div className="lgss:w-[80%] lgss:text-center">
          <div className="px-[5%]">
          <h3 className="text-primary font-semibold uppercase">{h3}</h3>
          <HeaderH1 h1="Why choose The Owlet for buying Youtube views and subscribers?" />
          </div>
          </div>
          <WhyImgComponent
            a={"Place an Order now"}
            pattern={Pattern4}
            className="w-full flex lgss:flex-row flex-col-reverse justify-between lgss:items-center"
            patternImg={PatternImg4}
            p="As soon as you finish the transaction, we begin processing your order. Your order is finished within the time frame indicated for delivery on the service&appos;s page."
            h1="Lightning-fast delivery"
          />
          <WhyImgComponent
            a={"Check out our Services"}
            className="w-full flex lgss:flex-row-reverse flex-col-reverse justify-between lgss:items-center"
            pattern={Pattern5}
            patternImg={PatternImg5}
            h1="What you order is what you get"
            p="We're widely acclaimed as the industry's best by top global websites. Count on us for reliability and fulfilling our commitments. Buying YouTube views and subscribers from us guarantees profitable results."
          />
          <WhyImgComponent
            a={"Check out Refund policy"}
            className="w-full flex lgss:flex-row flex-col-reverse justify-between lgss:items-center"
            pattern={Pattern6}
            patternImg={PatternImg6}
            h1="Guarantee of refund"
            p="If we are unable to deliver your item within the estimated delivery time, we promise to issue a refund (if it is more than three days). Please see our Refund Policy for more information."
          />
          <WhyImgComponent
            a={"Create an account"}
            className="w-full flex lgss:flex-row-reverse flex-col-reverse justify-between lgss:items-center"
            pattern={Pattern2}
            patternImg={PatternImg2}
            h1="Effortless growth, maximum security"
            p="Our user-friendly platform provides comprehensive campaign insights in one place. Focus on creating content while we ensure secure and effective growth delivery."
          />
          <WhyImgComponent
            a={"Contact our Support"}
            className="w-full flex lgss:flex-row flex-col-reverse justify-between lgss:items-center"
            pattern={Pattern3}
            patternImg={PatternImg3}
            h1="24/7 support"
            p="Reach out anytime via 24/7 live chat on Whatsapp or email. Our dedicated team is here to empower your success."
          />
        </>
      ) : null}
    </div>
  );
}

export default WhyOwlet;
