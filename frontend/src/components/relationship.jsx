import heart from "../images/love.webp"
const Relationship = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
       <div className=" flex flex-row gap-20  items-center">
       <img src={heart} alt="" className="w-[100px] h-[80px] -rotate-45 opacity-50" />
       <h2 className="text-[40px]">Looking for <span className="font-bold">some Relationship</span></h2>
       <img src={heart} alt="" className="w-[150px] h-[120px] rotate-45 opacity-75" />
       </div>
    </div>
  )
}

export default Relationship