import React, { useRef, useEffect, useState } from "react";
import HomeContainer from "../component/home/HomeContainer";
import SponsorLogo from "../component/home/logoArea";
import OurService from "../component/OurService/OurService";
import Operations from "../component/operation/Operation";
import AboutNewCity from "../component/about/aboutNewCity";
import Testimonies from "../component/testimonies/testimonies";
import SendMail from "../component/testimonies/emailSection/emailInput";

function Home() {
  const targetRef = useRef(null);
  const observer = useRef(null);
  const current = targetRef.current;
  const [isIntersecting, setIsIntersecting] = useState(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting);
        setIsIntersecting(entry.isIntersecting);
      });
    });
    if (current) {
      observer.current.observe(current);
    }

    return () => {
      if (observer.current && current) {
        observer.current.unobserve(current);
      }
    };
  }, [current]);

  return (
    <div>
      <div ref={targetRef}>
        <HomeContainer />
      </div>
      <SponsorLogo />
      <OurService />
      <Operations />
      <AboutNewCity />
      <Testimonies />
      <SendMail />
    </div>
  );
}

export default Home;
