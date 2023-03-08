import React from "react";
import HomeContainer from "../component/home/HomeContainer";
import SponsorLogo from "../component/home/logoArea";
import OurService from "../component/OurService/OurService";
import Operations from "../component/operation/Operation";
import AboutNewCity from "../component/about/aboutNewCity";
import Testimonies from "../component/testimonies/testimonies";
import SendMail from "../component/testimonies/emailSection/emailInput";

function Home() {
  const color = ``;
  const type = false;

  return (
    <div>
      <div>
        <HomeContainer />
      </div>
      <SponsorLogo />
      <OurService />
      <Operations />
      <AboutNewCity color={color} />
      <Testimonies />
      <SendMail type={type} />
    </div>
  );
}

export default Home;
