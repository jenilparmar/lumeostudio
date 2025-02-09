import Home1 from "./Components/Home1";
import Home2 from "./Components/Home2";
import Home3 from "./Components/Home3";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <div className="h-fit">
        <Navbar />
        <Home1 />
        <Home2/>
        <Home3/>
      </div>
    </>
  );
}
