import { FaFacebookMessenger, FaLink, FaSearchLocation } from "react-icons/fa";
import imageOne from "../images/communication.jpg";
import imageTwo from "../images/date.webp";
const Soulmeet = () => {
  return (
    <>
      <div className="flex pt-10 gap-20 items-center justify-center pb-20 ">
        <div className="flex ">
          <img src={imageOne} alt="" className="w-[400px] h-[400px]" />
          <div className="bg-white shadow-md w-[300px] h-[300px] rounded-md -mx-10 flex items-center justify-center">
            <img src={imageTwo} alt="" className="w-[200px] h-[200px] " />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-[30px]">Soulmeet - Guarantee</h1>
          <h2 className="font-semibold text-[25px]">
            A Trusted Online Dating Site For <br /> Polygamy Matchmaking
          </h2>
          <p className="w-[400px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            fugit dignissimos ducimus culpa eius quidem hic quas nihil voluptas
            officia accusantium sed nostrum, earum id provident itaque possimus
            quae! Vel.
          </p>
          <button className="w-[110px] h-[50px] bg-blue-500 text-white rounded-lg">
            Join now
          </button>
        </div>
      </div>
      <div className="flex flex-col  bg-blue-200 bg-opacity-50 pt-10 h-[800px] w-[100%] gap-5">
        <h1 className="font-bold text-[45px] pl-44 opacity-85">Soulmeet - Guarantee</h1>
        <h2 className="font-semibold text-[35px] pl-44">
          How it works step by step
        </h2>
        <div className="flex gap-10 pl-20 pt-36">
          <div className="h-[350px] w-[350px] rounded-lg shadow-md bg-white flex flex-col ">
            <div className="pt-10">
            <FaLink className="text-orange-500 pl-5 w-10 h-10 " />
            <p className="pl-5 text-[23px] font-bold">Join soulmeet.com</p>
            <p className="pl-5 w-[350px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              suscipit alias eaque, exercitationem facere laborum explicabo in
              odit, officiis magnam eos autem voluptatem. Iure fugit dolore quis
              maiores molestiae! Repellendus.
            </p>
            </div>
          </div>
          <div className="h-[350px] w-[350px] rounded-lg shadow-md bg-white my-16">
          <div className="pt-10">
            <FaSearchLocation className="text-orange-500 pl-5 w-10 h-10 " />
            <p className="pl-5 text-[23px] font-bold">Browse Members</p>
            <p className="pl-5 w-[350px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              suscipit alias eaque, exercitationem facere laborum explicabo in
              odit, officiis magnam eos autem voluptatem. Iure fugit dolore quis
              maiores molestiae! Repellendus.
            </p>
            </div>

          </div>
          <div className="h-[350px] w-[350px] rounded-lg shadow-md bg-white">
          <div className="pt-10">
            <FaFacebookMessenger className="text-orange-500 pl-5 w-10 h-10 " />
            <p className="pl-5 text-[23px] font-bold">Start Communicating</p>
            <p className="pl-5 w-[350px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              suscipit alias eaque, exercitationem facere laborum explicabo in
              odit, officiis magnam eos autem voluptatem. Iure fugit dolore quis
              maiores molestiae! Repellendus.
            </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Soulmeet;
