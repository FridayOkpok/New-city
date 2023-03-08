import React from "react";
import AboutNewCity from "../../component/about/aboutNewCity";
import ItemMoved from "../../component/about/movedDetails";
import ServiceText from "../../component/OurService/ServiceText";
import ServiceQuestion from "../../component/OurService/ServiceQuestion";
import AboutTestimonies from "../../component/testimonies/aboutTestimonies";

const About = () => {
  const header = "About Us";
  const color = "#BBB3EA";

  return (
    <div className="about">
      <ServiceText header={header} />
      <AboutNewCity color={color} />
      <ItemMoved />
      <ServiceQuestion />
      <AboutTestimonies />
    </div>
  );
};

export default About;
