import  { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import globe from "./images/globe.svg";

const Navbar = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <nav
      className="bg-[#F55A5A] flex items-center justify-center text-white"
      data-aos="fade-down"
      data-aos-duration="1000" 
    >
      <img src={globe} alt="globe" className="mr-[0.44rem] py-[1rem]" />
      <h3 className="text-[0.9rem] font-[500] tracking-[-0.07rem]">
        my travel journal.
      </h3>
    </nav>
  );
};

export default Navbar;
