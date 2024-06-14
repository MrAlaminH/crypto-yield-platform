import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div id="about" className="bg-gray-900">
      <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
        <div className="space-y-16">
          <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
            <div className="w-full md:w-1/4 space-y-4">
              <h3 className="font-medium text-3xl text-blue-500">
                Advanced Facial Recognition
              </h3>
              <p className="text-white">
                The product is equipped with an advanced facial recognition
                system that can accurately identify and authenticate individuals
                based on their unique facial features. This feature provides
                enhanced security by allowing access only to authorized users
              </p>
            </div>
            <div className="mx-auto w-1/2 md:w-1/3">
            <img src="/aboutUs.svg" alt="" />
            </div>
          </div>
          <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
            <div className="w-full md:w-1/4 space-y-4">
              <h3 className="font-medium text-3xl text-blue-500">
                Multi-Device Synchronization
              </h3>
              <p className="text-white">
                Multi-Device Synchronization Description: This product offers
                seamless synchronization across multiple devices. Users can
                easily sync their data, settings, and preferences across devices
                such as smartphones, tablets, and computers.
              </p>
            </div>
            <div className="mx-auto w-1/2 md:w-1/3">
                    <img src="/about.svg" alt="" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
