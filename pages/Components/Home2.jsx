import React from 'react';

const Home2 = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-10'>
       <div className='self-center'>
       <h3 className='self-center text-4xl'>What You'll be Getting?</h3>
        <div className="text5 w-96 self-center my-1 h-[2px] rounded-2xl bg-gradient-to-r from-blue-600 via-yellow-200 to-pink-600"></div>

       </div>
        <div className='w-full px-20 flex flex-row justify-center'>
            <div className='w-1/2 rounded-full h-96 ' style={{
                backgroundImage: "url(https://images.deepai.org/art-image/87b4bf86b6dc4e04ae05635cbbf2685b/a-women-using-a-laptop-staning.jpg)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}></div>
        <div className='w-1/2 self-center flex flex-col items-start gap-4 text-2xl'>
          <p>✔️Customized designs tailored to your brand and vision.</p>
          <p>✔️Fast-loading websites optimized for user experience.</p>
          <p>✔️SEO-optimized builds to boost your online visibility.</p>
          <p>✔️Affordable pricing without compromising quality.</p>
          <p>✔️Reliable and ongoing support to ensure your satisfaction.</p>
        </div>
        </div>
        
    </div>
  );
}

export default Home2;
