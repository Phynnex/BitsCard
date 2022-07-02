import React from "react";
import sync from "../../assets/image/mobileApp/sync.svg";
import { FeaturesData } from "./data";

const Features = () => {
  return (
    <div className="container d-flex">
      {FeaturesData.map((feature, key) => (
        <div key={key}>
          <div className="d-flex justify-content-center mb-3">
            <img src={feature.icon} alt="sync" />
          </div>
          <div className="w-100 mx-auto">
            <div className="text-center ">
              <h4 className="text-white">{feature.title}</h4>
            </div>
            <div className="w-75 mx-auto">
              <p className=" text-center">{feature.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
