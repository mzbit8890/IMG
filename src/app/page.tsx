import Acheivments from "./components/Acheivments"

import TextAndBoxesSection from "./components/Fetures"
import Fetures from "./components/Fetures"
import Footer from "./components/Footer"

import Header from "./components/Header"
import Hero from "./components/Hero"
import OurMission from "./components/OurMission"

const page = () => {
  return (
 <>
    <div className="relative bg-blue-50/80 -top-20 ">
      <div className=" bg-blue-50/80  about8:px-4 home4:px-11 ">
        <Hero />
      </div>
      <div className="  ">
        <OurMission />
      </div>

      <section id="#wbj2023" className=" ">
        {/* <Fetures /> */}
        <TextAndBoxesSection />
      </section>

      <div className="h-screen mt-16 ">
        <Acheivments />
      </div>

    

    </div>  
 </>
  )
}

export default page
