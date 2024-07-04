import { FaHeart } from "react-icons/fa";
import imageOne from "../images/talking.png";
const HowItWork = () => {
  return (
    <div className="bg-red-100 bg-opacity-35 w-full h-[700px] flex flex-col items-center">
      <h2 className="font-bold text-[30px] pt-10">How it works</h2>
      <div className="flex pl-10 gap-36 items-center flex-wrap ">
        <img src={imageOne} alt="" className="w-[400px] h-[350px]" />
        <div className="flex gap-10 items-center justify-center flex-wrap">
          <div className="w-[180px] h-[250px]  rounded-[40%] bg-white bg-opacity-55 text-center flex flex-col items-center justify-center p-4">
            <FaHeart />
            <h3 className="font-bold text-[20px]">Dating with benefits</h3>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex
              nemo excepturi
            </p>
          </div>
          <div className="flex flex-col gap-10 ">
          <div className="w-[180px] h-[250px]  rounded-[40%] bg-white bg-opacity-55 text-center flex flex-col items-center justify-center p-4">
            <FaHeart />
            <h3 className="font-bold text-[20px]">Dating with benefits</h3>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex
              nemo excepturi
            </p>
          </div>
          <div className="w-[180px] h-[250px]  rounded-[40%] bg-white bg-opacity-55 text-center flex flex-col items-center justify-center p-4">
            <FaHeart />
            <h3 className="font-bold text-[20px]">Dating with benefits</h3>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex
              nemo excepturi
            </p>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
