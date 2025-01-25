import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home2 = () => {
  // Refs for animating elements
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const imageRef = useRef(null);
  const listRef = useRef([]);

  useEffect(() => {
    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );

    // Animate the line
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
    );

    // Animate the image
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
    );

    // Animate the list items sequentially
    gsap.fromTo(
      listRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 1,
      }
    );
  }, []);

  return (
    <div className='w-full h-screen flex flex-col gap-10'>
      <div className='self-center'>
        <h3
          ref={headingRef}
          className='self-center md:text-4xl'
        >
          What You'll be Getting?
        </h3>
        <div
          ref={lineRef}
          className='text5 md:w-96 self-center my-1 h-[2px] rounded-2xl bg-gradient-to-r from-blue-600 via-yellow-200 to-pink-600'
        ></div>
      </div>
      <div className='w-full md:px-20 flex flex-col md:flex-row justify-center'>
        <div
          ref={imageRef}
          className='w-10/12 self-center md:w-1/2  h-96'
          style={{
            backgroundImage:
              "url(https://images.deepai.org/art-image/87b4bf86b6dc4e04ae05635cbbf2685b/a-women-using-a-laptop-staning.jpg)",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className='w-10/12 md:w-1/2 self-center flex flex-col items-start gap-4 text-lg text-center md:text-2xl'>
          {[
            '✔️Customized designs tailored to your brand and vision.',
            '✔️Fast-loading websites optimized for user experience.',
            '✔️SEO-optimized builds to boost your online visibility.',
            '✔️Affordable pricing without compromising quality.',
            '✔️Reliable and ongoing support to ensure your satisfaction.',
          ].map((text, index) => (
            <p
              key={index}
              ref={(el) => (listRef.current[index] = el)}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home2;
