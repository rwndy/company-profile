import React from "react";
import { ImageHelper } from "@/components/atoms";

const About = () => {
  return (
    <section id="about" className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 px-4 mt-8 w-full">
      <div className="relative w-full h-[374px]">
        <ImageHelper
          source="/assets/illustrations/workingspace.png"
          fill={true}
          style={{ objectFit: "cover" }}
          alt="illustration-workingspace"
          fallbackSrc="/assets/illustrations/fallback-img.jpg"
          priority
          className="rounded-lg"
        />
      </div>
      <div className="w-full">
        <h3 className="text-4xl sm:text-2xl font-semibold mt-8 mb-8">About Us</h3>
        <p className="text-sm sm:text-lg md:text-lg text-left">
          At The Company Agency, we believe in the power of creativity and
          technology to bring your brand to life. with a team of seasoned
          experts, we craft digital experience that resonate, inspire, and
          elevate your business to new heights. Our journey is fueled by a
          commitment to excellence and a relentless pursuit of cutting-edge
          solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
