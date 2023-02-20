import React, { useRef, useEffect } from "react";
import HomeContainer from "../component/home/HomeContainer";
import SponsorLogo from "../component/home/logoArea";
import OurService from "../component/OurService/OurService";
import Operations from "../component/operation/Operation";
import AboutNewCity from "../component/about/aboutNewCity";
import Testimonies from "../component/testimonies/testimonies";

function Home() {
  const targetRef = useRef(null);
  const observer = useRef(null);
  const current = targetRef.current;

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      console.log(entries);
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
      <HomeContainer />
      <div ref={targetRef}>
        <SponsorLogo />
        <OurService />
        <Operations />
        <AboutNewCity />
        <Testimonies />
      </div>
    </div>
  );
}

export default Home;
