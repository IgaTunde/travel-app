import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Location from "./images/location.svg";

const Card = (props) => {
 useEffect(() => {
   AOS.init({duration: 1000});
 }, []);

  return (
    <div className="px-[2.5rem] flex items-center mt-[2.81rem]">
      <div className="mr-[1.19rem]" data-aos="fade-up-right">
        <img src={`${props.item.img}`} alt="" />
      </div>

      {/* right div */}
      <div className="text-[0.64rem]">
        <div className="flex ">
          <img src={Location} alt="" className="" />
          <h5
            className=" tracking-[0.11rem] ml-[0.35rem]"
            data-aos="fade-up-left"
          >
            {props.item.location}
            <span className="ml-[0.75rem] border-b-2 text-[#918E9B]">
              View on Google Maps
            </span>
          </h5>
        </div>
        <h2 className="text-[1.6rem] font-bold my-[0.44rem]" data-aos="fade-down-left">
          {props.item.title}
        </h2>
        <h3 className="font-bold mb-[0.56rem]">{props.item.date}</h3>
        <p className="leading-[0.96rem] w-[20rem]">{props.item.description}</p>
      </div>
    </div>
  );
};

export default Card;
