import Wrapper from "./Wrapper"
import Image from "next/image"
import mission from "@/app/components/assets/mission.png" 
import AboutOurTeam from "@../../../public/create_about_our_team_with_hd_where_2_or_3_peopl.jpg"
import AboutTech from "@../../../public/create_an_office_beutifull_girl_standing_in_an_o.jpg"
import mis from "@../../../public/p.png"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeftIcon } from "lucide-react"
import Link from "next/link"
import { MotionDiv, MotionImg } from "./MotionImg"

const OurMission = () => {
  return (
    //  <div className="flex gap-5 grid-cols-1 flex-col md:flex-row md:grid-cols-3">
    //   {/* Images */}

    //   <Image src={AboutOurTeam} alt="About Our Team" className="border rounded-md md:col-span-1 object-cover md:h-[340px] md:w-[310px] lg:h-[380px] lg:w-[340px] xl:h-[480px] xl:w-[440px]"/>
     
    //         <div className="md:col-span-1 grid items-center">
    //            <div className="px-4">
    //            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800  text-left">Our Mission</h2>
    //             <p className="mt-7 text-sm lg:text-base text-gray-900 text-left" >IMG is committed to helping our clients use technology to be more efficient, effective, 
    //                 and productive. Our people bring integrity, industry and customer knowledge, and technical
    //                  excellence to every project. Our success comes from our focus on delivering solutions that
    //                   meet our clients’ requirements today and into the future, with a commitment to total 
    //                   customer satisfaction.</p>
    //                   <div className="py-4 lg:py-8">
    //                   <h2 className="text-lg font-semibold">Read more about our team</h2>
    //             <Button variant={"outline"} className="mt-3 md:px-8 md:py-3 lg:px-11 lg:py-6 text-[16px]">Learn more</Button>
    //                   </div>
    //            </div>
    //         </div>
    //   {/* Images */}
    //   <p className="grid  md:items-center md:col-span-1">
    //   <Image src={AboutTech} alt="Technology" className="border rounded-md"/>

    //   </p>
      
    // </div>

<div>


    <div className="">
{/* <Image src={mission} alt="Mission image" className=" w-full h-[639px] object-cover "/>
      <div className="absolute px-11 top-0 left-0 h-[639px] w-full bg-blue-600/80"></div> */}
      {/* <div className=" px-11  h-[639px] bg-gradient-to-r from-[#191970] to-white w-full"> */}
      
  </div>
  <div className="w-1/2 bg-white flex justify-center items-center relative">
    {/* Content for right half */}
  </div>
  <div className="flex justify-center items-center">
  <div className="relative w-full max-w-screen-2xl flex">
    <div className="lg:block hidden w-4/5 bg-[#191970] h-[665px]"></div>
    <div className="lg:block hidden bg-white h-[645px]"></div>
    <div className="lg:absolute lg:inset-0 bg-[#191970] lg:bg-white/0 flex about8:px-4 home4:px-11">
    <div className="max-w-screen-2xl mx-auto px-4 about8:px-6 xl:px-9">
      <div>
        
      </div>
        <div className="lg:flex lg:flex-row flex flex-col  lg:justify-start items-center gap-6 miss4:gap-8 miss2:gap-10 miss1:gap-12">
          <MotionDiv 
             initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="mt-[80px] head3:mt-[90px] lg:mt-[135px]">
            <div>
              
            </div>
            <h2 className="text-[22px]/[1.17] head3:text-[30px]/[1.17] about8:text-[45px] miss4:text-[48px] lg:text-left text-center miss3:text-[54px] miss2:text-6xl hover:cursor-default font-bold text-yellow-500 ">
            Our <span className="text-white/90">Mission</span>
        </h2><div>
          
        </div>
        <p className="text-[15px]  lg:text-left text-center hover:cursor-default pt-6   text-white/90">IMG is committed to helping our clients use technology to be more efficient, effective, and productive. Our people bring integrity, industry and customer knowledge, and technical excellence to every project. Our success comes from our focus on delivering solutions that meet our clients’ requirements today and into the future, with a commitment to total customer satisfaction.</p>
         <Link href="/whoWeAre" className="flex justify-center lg:justify-start"> <button className="mt-10  hover:scale-105 hover:duration-300 h-[40px] w-[170px] hover:bg-yellow-500/95 flex bg-yellow-500 items-center justify-center"><h3 className="ml-4 mr-[22px] text-white/95  font-bold">Read More</h3><div className="bg-white  h-[38px] px-3 flex items-center"><ArrowRight/></div></button></Link>
          </MotionDiv>
      
          < MotionImg
             initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} src="/p.png" alt="Mission Picture" className=" relative mt-[15px] lg:mt-[128px] miss3:mt-[84px] object-cover w-[500px] miss4:w-[540px] miss3:w-[619px] miss2:w-[659px] miss1:w-[689px] h-[409px] miss3:h-[489px]"/>
          <Link href="/whatWeDo" className="flex lg:hidden justify-center"><button className="mt-10 h-[50px] absolute bottom-[1.99rem]  lg:bottom-[6.99rem] miss3:bottom-[3.99rem] lg:right-3 miss3:right-14 miss2:right-5 mx-2 miss6:mx-3 miss5:w-[370px] flex bg-white border shadow-lg items-center justify-center"><h3 className="ml-4 mr-[14px] miss6:mr-[22px] text-gray-500 text-[12px] miss6:text-[14px] miss5:text-[16px] font-bold">Read More about What We Do</h3><div className="bg-yellow-500 h-[62px] miss6:h-[66px] px-3 miss6:px-5 flex items-center"><ArrowRight color="white"/></div></button></Link>
          <Link href="/whatWeDo" className="hidden lg:flex "><button className="mt-10 flex h-[50px] absolute lg:top-no lg:bottom-[6.99rem] miss3:bottom-[3.99rem] lg:right-3 miss3:right-14 miss2:right-5 w-[370px]  bg-white border shadow-lg items-center justify-center"><h3 className="ml-4 mr-[22px] text-gray-500 font-bold">Read More about What We Do</h3><div className="bg-yellow-500 h-[60px] miss6:h-[66px]  px-5 flex items-center"><ArrowRight color="white"/></div></button></Link>
          
       
        </div>
        </div> 
    </div>
  </div>
</div>
</div>
   
    // </div>
  )
}

export default OurMission
{/* <div className=" h-[639px] w-full flex relative">
  <div className="w-3/4 px-11 bg-[#191970] flex justify-center items-center relative">
    // {/* Content for left half */} 
    // <div className="max-w-screen-2xl mx-auto px-4 about8:px-6 xl:px-9">
    //     <div className="grid grid-cols-2 gap-10 ">
    //       <div className="mt-32">
    //         <h2 className="text-6xl font-bold text-white/90">
    //         Our <span className="text-cyan-200">Mission</span>
    //     </h2>
    //     <p className="text-lg pt-6 text-white">IMG is committed to helping our clients use technology to be more efficient, effective, and productive. Our people bring integrity, industry and customer knowledge, and technical excellence to every project. Our success comes from our focus on delivering solutions that meet our clients’ requirements today and into the future, with a commitment to total customer satisfaction.</p>
    //       </div>
      
    //       <Image src={mis} alt="Mission Picture" className="relative left-60 mt-20 object-cover h-[489px]"/>
   
       
    //     </div>
    //     </div> 
      // </div>
    //  */}