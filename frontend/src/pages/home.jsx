import Customer from "../components/customer"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import Relationship from "../components/relationship"
import Soulmeet from "../components/soulmeet"
import HowItWork from "../components/work"

const Home = () => {
  return (
    <div className="flex flex-col  z-10">
        <Navbar className="fixed top-0"/>
        <div className="mt-16">
          
        <Hero/>
        <HowItWork  />
        <Relationship/>
        <Soulmeet/>
        <Customer/>
        </div>
    </div>
  )
}

export default Home