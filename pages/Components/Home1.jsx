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
        <svg xmlns="http://www.w3.org/2000/svg"  className="self-center" height={250} width={350}>
          <g style={{ order: "-1" }}>
            <polygon
              transform="rotate(45 100 100)"
              stroke-width="1"
              stroke="#d3a410"
              fill="none"
              points="70,70 148,50 130,130 50,150"
              id="bounce"></polygon>
            <polygon
              transform="rotate(45 100 100)"
              stroke-width="1"
              stroke="#d3a410"
              fill="none"
              points="70,70 148,50 130,130 50,150"
              id="bounce2"></polygon>
            <polygon
              transform="rotate(45 100 100)"
              stroke-width="2"
              stroke=""
              fill="#414750"
              points="70,70 150,50 130,130 50,150"></polygon>
            <polygon
              stroke-width="2"
              stroke=""
              fill="url(#gradiente)"
              points="100,70 150,100 100,130 50,100"></polygon>
            <defs>
              <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
                <stop
                  style={{ stopColor: "#1e2026", stopOpacity: 1 }}
                  offset="20%"></stop>
                <stop
                  style={{ stopColor: "#414750", stopOpacity: 1 }}
                  offset="60%"></stop>
              </linearGradient>
            </defs>
            <polygon
              transform="translate(20, 31)"
              stroke-width="2"
              stroke=""
              fill="#b7870f"
              points="80,50 80,75 80,99 40,75"></polygon>
            <polygon
              transform="translate(20, 31)"
              stroke-width="2"
              stroke=""
              fill="url(#gradiente2)"
              points="40,-40 80,-40 80,99 40,75"></polygon>
            <defs>
              <linearGradient
                y2="100%"
                x2="0%"
                y1="-17%"
                x1="10%"
                id="gradiente2">
                <stop
                  style={{ stopCcolor: "#d3a51000", stopOpacity: 1 }}
                  offset="20%"></stop>
                <stop
                  style={{ stopColor: "#d3a51054", stopOpacity: 1 }}
                  offset="100%"
                  id="animatedStop"></stop>
              </linearGradient>
            </defs>
            <polygon
              transform="rotate(180 100 100) translate(20, 20)"
              stroke-width="2"
              stroke=""
              fill="#d3a410"
              points="80,50 80,75 80,99 40,75"></polygon>
            <polygon
              transform="rotate(0 100 100) translate(60, 20)"
              stroke-width="2"
              stroke=""
              fill="url(#gradiente3)"
              points="40,-40 80,-40 80,85 40,110.2"></polygon>
            <defs>
              <linearGradient
                y2="100%"
                x2="10%"
                y1="0%"
                x1="0%"
                id="gradiente3">
                <stop
                  style={{ stopColor: "#d3a51000", stopOpacity: 1 }}
                  offset="20%"></stop>
                <stop
                  style={{ stopColor: "#d3a51054", stopOpacity: 1 }}
                  offset="100%"
                  id="animatedStop"></stop>
              </linearGradient>
            </defs>
            <polygon
              transform="rotate(45 100 100) translate(80, 95)"
              stroke-width="2"
              stroke=""
              fill="#ffe4a1"
              points="5,0 5,5 0,5 0,0"
              id="particles"></polygon>
            <polygon
              transform="rotate(45 100 100) translate(80, 55)"
              stroke-width="2"
              stroke=""
              fill="#ccb069"
              points="6,0 6,6 0,6 0,0"
              id="particles"></polygon>
            <polygon
              transform="rotate(45 100 100) translate(70, 80)"
              stroke-width="2"
              stroke=""
              fill="#fff"
              points="2,0 2,2 0,2 0,0"
              id="particles"></polygon>
            <polygon
              stroke-width="2"
              stroke=""
              fill="#292d34"
              points="29.5,99.8 100,142 100,172 29.5,130"></polygon>
            <polygon
              transform="translate(50, 92)"
              stroke-width="2"
              stroke=""
              fill="#1f2127"
              points="50,50 120.5,8 120.5,35 50,80"></polygon>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Home1;
