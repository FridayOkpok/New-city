import React, { useRef, useEffect } from "react";
import HomeContainer from "../component/home/HomeContainer";
import SponsorLogo from "../component/home/logoArea";
import OurService from "../component/OurService/OurService";

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
      </div>
    </div>
  );
}

export default Home;
