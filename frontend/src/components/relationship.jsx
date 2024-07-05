import heart from "../images/love.webp";
const Relationship = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className=" flex flex-row gap-20  items-center">
        <img
          src={heart}
          alt=""
          className="w-[100px] h-[80px] -rotate-45 opacity-50"
        />
        <h2 className="text-[40px]">
          Looking for <span className="font-bold">some Relationship</span>
        </h2>
        <img
          src={heart}
          alt=""
          className="w-[150px] h-[120px] rotate-45 opacity-75"
        />
      </div>
      <div className="flex gap-24 pt-10">
        <div className="bg-blue-400 bg-opacity-70 w-[400px] h-[150px] rounded-tl-3xl rounded-br-3xl"></div>
        <div className="bg-blue-300 bg-opacity-70 w-[400px] h-[150px] rounded-tl-3xl rounded-br-3xl"></div>
      </div>
      <div className="flex gap-10 pt-10 pl-20">
        <div className="bg-red-300 bg-opacity-70 w-[450px] h-[150px] rounded-tl-3xl rounded-br-3xl"></div>
        <div className="bg-red-200 bg-opacity-70 w-[450px] h-[150px] rounded-tl-3xl rounded-br-3xl"></div>
      </div>
    </div>
  );
};

export default Relationship;
