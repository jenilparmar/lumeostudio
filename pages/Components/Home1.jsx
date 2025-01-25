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

    gsap.from(".text5", {
      opacity: 0,
      width: "0%",
      duration: 2,
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
  }, []);

  return (
    <div className="h-fit mb-20 flex flex-col md:flex-row justify-between px-20">
      <div className="mt-20 h-full flex flex-col text-4xl font-bold md:text-left text-center">
        <p className="text-2xl md:text-7xl text1">The only</p>
        <h2 className="text-5xl md:text-9xl bg-gradient-to-r from-blue-600 via-yellow-200 to-pink-600 inline-block text-transparent bg-clip-text text2">
          Web App
        </h2>
        <div className="text5 w-full my-2 h-[4px] rounded-2xl bg-gradient-to-r from-blue-600 via-yellow-200 to-pink-600"></div>
        <p className="text-2xl md:text-7xl text3">you need!</p>
        <p className="text-sm md:text-2xl font-medium mt-4 text3">
          "Elevate Your Professionalism"
        </p>
      </div>
      <div className=" h-60 md:h-full w-1/2  mt-8 flex flex-col  justify-center self-center md:self-start">
      <div
          
          className='w-full self-center md:w-full h-96 '
          style={{
            backgroundImage:
              "url(https://iili.io/2sZfSuS.png)",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home1;
