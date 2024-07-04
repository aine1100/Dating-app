import imageOne from "../images/date.webp";
import imageTwo from "../images/dating.jpg";
import { useState } from "react";

const Hero = () => {
  const [selectedIAm, setSelectedIAm] = useState("");
  const [selectedSeekingFor, setSelectedSeekingFor] = useState("");

  const iAmOptions = ["Men", "Women"];
  const seekingForOptions = ["Men", "Women"];

  const handleIAmChange = (event) => {
    setSelectedIAm(event.target.value);
  };

  const handleSeekingForChange = (event) => {
    setSelectedSeekingFor(event.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${imageOne})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex justify-center items-center flex-wrap gap-5 w-full h-[600px] md:h-[700px] lg:h-[800px]"
    >
      <form
        action=""
        className="bg-white rounded-2xl h-[350px] w-[90%] sm:w-[350px] text-center flex flex-col"
      >
        <h2 className="bg-[#cf759f] text-white rounded-tr-2xl rounded-tl-2xl h-10 flex justify-center items-center font-bold">
          Find your match
        </h2>
        <div className="pt-10 px-5 sm:px-10">
          <p className="flex justify-between font-medium">
            <span>I am:</span>
            <span>Seeking for:</span>
          </p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              {iAmOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="radio"
                    id={`iAm-${option}`}
                    name="iAm"
                    value={option}
                    checked={selectedIAm === option}
                    onChange={handleIAmChange}
                    className="mr-1"
                  />
                  <label htmlFor={`iAm-${option}`}>{option}</label>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {seekingForOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="radio"
                    id={`seekingFor-${option}`}
                    name="seekingFor"
                    value={option}
                    checked={selectedSeekingFor === option}
                    onChange={handleSeekingForChange}
                    className="mr-1"
                  />
                  <label htmlFor={`seekingFor-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex pt-2 gap-5 px-5 sm:px-10">
          <div className="flex flex-col gap-3">
            <p className="font-semibold">Age</p>
            <input
              type="text"
              className="w-16 h-10 border-slate-400 border-2 rounded-md outline-none bg-slate-200"
            />
          </div>
          <div className="flex gap-3 pt-9">
            <p>to</p>
            <input
              type="text"
              className="w-16 h-10 border-slate-400 border-2 rounded-md outline-none bg-slate-200"
            />
          </div>
        </div>
        <div className="flex gap-5 px-5 sm:px-10 pt-5">
          <div className="gap-3 flex">
            <input type="checkbox" className="h-5 w-5" />
            <p>Online only</p>
          </div>
          <div className="gap-3 flex">
            <input type="checkbox" className="h-5 w-5" />
            <p>With photo</p>
          </div>
        </div>
        <div className="flex gap-5 px-5 sm:px-10 pt-5 items-center">
          <button className="border-none h-12 w-20 text-white rounded-md bg-blue-500 text-center">
            Search
          </button>
          <div>
            <p>
              Or <span className="text-blue-500">Advanced setting</span>
            </p>
          </div>
        </div>
      </form>
      <div className="bg-black bg-opacity-75 max-w-full md:max-w-[600px] max-h-[380px] rounded-3xl p-5 text-white flex flex-col sm:h[800px]">
        <p className="text-[24px] md:text-[30px] pl-5 md:pl-10 pt-5">
          Find your <br />
          <span className="font-bold">Perfect match today</span>
        </p>
        <p className="pl-5 md:pl-10 opacity-75 pt-5 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          corporis nostrum deleniti labore quisquam nihil sunt aliquid quos,
          impedit obcaecati, eius eligendi blanditiis. Incidunt alias sunt
          deserunt consequatur laboriosam itaque.
        </p>
        <p className="pl-5 md:pl-10 pt-2 text-sm md:text-base">Available on</p>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex gap-5 pl-5 md:pl-10 pt-3 pb-4">
            <div className="bg-black rounded-md w-full md:w-[200px] h-[60px] text-center flex items-center flex-col">
              <p className="pt-2 text-xs md:text-sm">Download on apple</p>
              <div className="flex gap-2 items-center">
                <img src={imageTwo} alt="" className="w-5 h-5 rounded-2xl" />
                <p className="font-semibold text-xs md:text-sm">App store</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 pl-5 md:pl-10 pt-3 pb-4">
            <div className="bg-black rounded-md w-full md:w-[200px] h-[60px] text-center flex items-center flex-col">
              <p className="pt-2 text-xs md:text-sm">Download on apple</p>
              <div className="flex gap-2 items-center">
                <img src={imageTwo} alt="" className="w-5 h-5 rounded-2xl" />
                <p className="font-semibold text-xs md:text-sm">App store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
