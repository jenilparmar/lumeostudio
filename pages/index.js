import Head from 'next/head';
import Home1 from "./Components/Home1";
import Home2 from "./Components/Home2";
import Home3 from "./Components/Home3";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>

      <Head>
        <title>Transform Your Online Presence with Lumeo Studio</title>
        <meta name="description" content="Lumeo Studio specializes in creating responsive, fast, and visually stunning websites. Unleash your online business today!" />
        <meta name="keywords" content="web development, SEO, responsive design, fast websites, Lumeo Studio, online presence" />
        <meta name="author" content="Lumeo Studio" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Transform Your Online Presence with Lumeo Studio" />
        <meta property="og:description" content="Lumeo Studio specializes in creating responsive, fast, and visually stunning websites. Unleash your online business today!" />
        <meta property="og:image" content="/images/lumeo-studio-banner.jpg" />
        <meta property="og:url" content="https://www.lumeostudio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transform Your Online Presence with Lumeo Studio" />
        <meta name="twitter:description" content="Lumeo Studio specializes in creating responsive, fast, and visually stunning websites. Unleash your online business today!" />
        <meta name="twitter:image" content="/images/lumeo-studio-banner.jpg" />
      </Head>
      <Head>
 
  <link rel="icon" className='rounded-full' type="image/png" href="/LS.jpg" />
  <title>Transform Your Online Presence with Lumeo Studio</title>
  <meta name="description" content="Lumeo Studio specializes in creating responsive, fast, and visually stunning websites. Unleash your online business today!" />
</Head>
      <div className="h-fit">
        <Navbar />
        <Home1 />
        <Home2 />
        <Home3 />
      </div>
    </>
  );
}
