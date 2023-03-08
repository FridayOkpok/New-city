import React from "react";
import ServiceText from "../../component/OurService/ServiceText";
import AllServices from "../../component/OurService/AllServices";
import SendMail from "../../component/testimonies/emailSection/emailInput";
import image1 from "../../component/about/Property1.png";
import image2 from "../../component/about/Property2.png";
import image3 from "../../component/about/Property3.png";

const services = [
  {
    header: "Residential Move",
    text: "Make your home move a breeze with our top-notch residential moving services. From packing and loading to transportation and unloading, we'll handle every detail to ensure a stress-free transition.Make your home move a breeze with our top-notch residential moving services. From packing and loading to transportation and unloading, we'll handle every detail to ensure a stress-free transition.Make your home move a breeze with our top-notch residential moving services. From packing and loading to transportation and unloading, we'll handle every detail to ensure a stress-free transition.",
    images: image1,
    backgroundColor: "#BBB3EA",
    position: "right",
  },
  {
    header: "Cooperate Move",
    text: "Lorem ipsum dolor sit amet consectetur. Amet eu nec ultricies tristique ac mauris sagittis. Nisl sed tellus diam posuere. In amet dictum elit accumsan pellentesque lectus enim. Pretium enim erat blandit morbi turpis tortor et. Orci vel elit nisi at sagittis id netus. In cras eu duis donec risus tincidunt odio. Aliquam augue maecenas purus velit phasellus gravida lobortis pellentesque.",
    images: image2,
    backgroundColor: " #F5F0C5",
    position: "left",
  },
  {
    header: "Interstate Move ",
    text: "Lorem ipsum dolor sit amet consectetur. Amet eu nec ultricies tristique ac mauris sagittis. Nisl sed tellus diam posuere. In amet dictum elit accumsan pellentesque lectus enim. Pretium enim erat blandit morbi turpis tortor et. Orci vel elit nisi at sagittis id netus. In cras eu duis donec risus tincidunt odio. Aliquam augue maecenas purus velit phasellus gravida lobortis pellentesque.",
    images: image3,
    backgroundColor: "#BBB3EA",
    position: "right",
  },
];

function Service() {
  const header = "Our Service";

  const content = services.map((services, index) => {
    return (
      <AllServices
        key={index}
        header={services.header}
        text={services.text}
        image={services.images}
        color={services.backgroundColor}
        position={services.position}
      />
    );
  });
  const type = true;

  return (
    <div className="about">
      <ServiceText header={header} />
      {content}
      <SendMail type={type} />
    </div>
  );
}

export default Service;
