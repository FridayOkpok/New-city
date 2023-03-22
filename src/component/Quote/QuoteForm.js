import React, { useRef, useEffect } from "react";
import "./quoteform.css";
import GetStartedForm from "./getStartedForm";

function QuoteForm() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  const fadeAnimation = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
        }
      });
    });

    const current = targetRef.current;
    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, []);
  console.log(isVisible);
  return (
    <div ref={targetRef} style={fadeAnimation} className="quoteform-container">
      <div className="quoteform-left">
        <div className="quoteservice-list">
          <ul>
            <li className="quoteservice-listitem">Residential</li>
            <li className="quoteservice-listitem">Cooperative</li>
            <li className="quoteservice-listitem">Interstate</li>
          </ul>
        </div>
        <GetStartedForm />
      </div>
      <div className="quoteform-right"> </div>
    </div>
  );
}

export default QuoteForm;
