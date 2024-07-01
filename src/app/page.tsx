
import FirstTemplate from "./components/Templates/firstTemplate";
import Carousel from "./components/organism/Carousel";
import Navbar from "./components/organism/Navbar";
import Section4 from "./components/organism/Section4";
import Section5 from "./components/organism/Section5";

export default function Home() {
  return (
    <main>
      
      <Navbar/>
      <Carousel/>
      <FirstTemplate/>
      <Section4/>
      <Section5/>
    </main>
  );
}
