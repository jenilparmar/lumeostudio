import React, { useEffect } from "react";
import { gsap } from "gsap";

const Home1 = () => {
  useEffect(() => {
    // Animate the text elements one by one
    gsap.from(".text1", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(".text2", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1,
      ease: "power3.out",
    });

    gsap.from(".text3", {
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: 1.5,
      ease: "power3.out",
    });

    gsap.from(".text4", {
      opacity: 0,
      
      duration: 0.5,
      delay: 2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-between px-20">
      <div className="mt-20 h-full flex flex-col text-4xl font-bold md:text-left text-center">
        <p className="text-2xl md:text-7xl text1">The only</p>
        <h2 className="text-5xl md:text-9xl bg-gradient-to-r from-blue-600 via-yellow-200 to-pink-600 inline-block text-transparent bg-clip-text text2">
          Web App
        </h2>
        <p className="text-2xl md:text-7xl text3">you need!</p>
        <p className="text-sm md:text-2xl font-medium mt-4 text3">
          "Elevate Your Professionalism"
        </p>
      </div>
      <div className="h-full self-center"> dg</div>
    </div>
  );
};

export default Home1;
