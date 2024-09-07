import React, { useEffect, useState } from "react";

export default function Feature() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("api/feature.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="max-w-6xl  mt-24  mb-16 md:mx-auto mx-4">
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 flex items-center flex-col  lg:w-[350px] w-auto"
          >
            <img src={feature.imgSrc} alt={feature.imgAlt} className="mb-8" />
            <h3 className="text-xl text-white font-bold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray text-center w-[200px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
