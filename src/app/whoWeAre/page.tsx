import Image from "next/image"
// import meeting from "@/app/open_position/assets/meeting.jpg"
import meeting from "./assets/main.png"
import pro from "./assets/profe.png"
import win from "./assets/win.png"

// import bgImage from "@../../../public/lopp.jpg"
// import Wrapper from "../components/Wrapper"
// import Jou from "@../../../public/business_journey_blue_theme.jpg"
// import stars from "@/../../public/growth.jpeg"



// const Page = () => {
//   return (
//     <>
//     <Wrapper>
//      <div className="grid grd-cols-1 ab:grid-cols-2 mt-12 px-3 ">
//     <div className=" px-10 ab:mt-24 col-span-1 mt-8 text-left">
//       <h1 className=" text-blue-600 font-bold text-5xl text-balance "> Need IT Solutions that Deliver?</h1>
//     <p className="text-2xl mt-5 text-gray-800">
//     At IMG, we specialize in providing innovative and effective IT solutions tailored to meet your unique needs.
//     </p>
//     </div>
//     <div className="flex justify-center col-span-1   mt-16 ">
//       <Image src={bgImage} alt="jo" width={500} height={500} className=" rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105" />
//     </div>
//      </div> 
//      </Wrapper>
//      <Image src={stars} alt="jo" width={150} height={150} className=" hidden lg:block rounded-xl  hover:transition duration-300"/>
//      <Wrapper>
//      <div className="text-center h-[65vh]">     
//      <h2 className="text-blue-600 text-5xl font-bold mt-[94px] lg:mt-0">ABOUT US</h2>
//       <p className="text-center mt-9 text-1xl px-7 border rounded-lg border-black py-3 text-balance bg-blue-400/50">Information Management Group, Inc. (IMG) was founded in 1987. We are a growing, debt-free small business specializing in the analysis, design, and application of information technology (IT) and communications solutions for government and commercial organizations worldwide. Over the course of our 30-year history, we have provided automation services throughout the United States and overseas; we provide cleared, experienced, and certified professionals for on-site IT and information assurance (IA) services to our customers. IMG is committed to helping our clients use technology to be more efficient, effective, and productive. Our people bring integrity, industry and customer knowledge, and technical excellence to every project. Developing solutions that integrate our experience and expertise with industry best practices ensures the highest level of quality is achieved. From maintaining service levels on a long-standing contract to meeting no-notice surge requirements, success comes from meeting your goals today and into the future.</p>
//      </div>
//     {/* <div className="grid grid-cols-2 mt-32 gap-8 px-10">
//     <div className=" col-span-1">
//       <h2 className="text-4xl font-bold text-blue-600">The IMG Journey</h2>
//       <p className="mt-6">Our award winning employees are supported by proven, time tested processes that have been captured in a constantly evolving knowledgebase that is used by every member of our staff to improve the quality of the service they deliver while minimizing risks to the customer’s mission. This commitment to constant process improvement and quality management throughout all facets of the company has enabled IMG to deliver consistent, repeatable and scalable award winning services to our customers.</p>
//      </div>
//      <div className="col-span-1 px-36">
//       <Image src={Jou} alt="IMG Journey" width={400} height={400}/>
//      </div>
//     </div> */}
//     </Wrapper>
//     </>
//   )
// }

// export default Page

import React from 'react'
import Wrapper from "../components/Wrapper"
import Footer from "../components/Footer"
import { MotionDiv } from "../components/MotionImg"

const page = () => {
  return (
    <div  className="">
       <Image src={meeting} alt="Meeting" className='brightness-0 relative w-full -top-28 z-6 h-[520px] sm:h-[580px] md:h-[680px]  object-cover ' />
       
       <div className='absolute  inset-0 mt-20 h-[1px] bg-gray-100 w-full flex '></div>
       <div className="flex flex-col h-[485px] sm:h-[545px] md:h-[650px] bg-black/40 justify-center items-center absolute  text-gray-100 inset-0 text-4xl sm:text-[50px] lg:text-6xl font-bold">
        <div className="max-w-screen-2xl mx-auto px-3 job6:px-6 xl:px-9">
          <h1 className=" py-2 text-center px-8" >About Us</h1>
       
       <p className="text-[15px]/[1.25] sm:text-[17px] lg:text-lg mt-5 font-semibold sm:w-[590px] text-center text-cyan-200">
     At IMG, we specialize in providing innovative and <span className="text-cyan-500">effective IT solutions</span> tailored to meet your unique needs.
     </p>
        </div>
        
       </div>   
       <MotionDiv
    initial={{
       x: -200,
       opacity: 0,
     }}
     transition={{ duration: 1.200 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }} className="max-w-screen-2xl mx-auto  about5:pl-6 xl:pl-9 relative grid gap-6 grid-cols-1 about3:grid-cols-2 -top-10">
         
            <div className="py-20 pr-3 hidden about3:block about2:pr-4 about1:pr-6">
              <h2 className="text-[30px]/[1.29] about4:text-[33px]/[1.29] about2:text-[34px]/[1.29] about1:text-4xl/[1.29] text-blue-600 font-bold">
                Information Management Group, Inc.<span className="text-gray-700"> (IMG) was founded in </span>1987.
              </h2>
              <p className="pt-6 text-gray-600 text-[14.5px]  about1:text-[15px] pr-3 about1:pr-6"> We are a growing, debt-free small business specializing in the analysis, design, and application of information technology (IT) and communications solutions for government and commercial organizations worldwide. Over the course of our 30-year history, we have provided automation services throughout the United States and overseas; we provide cleared, experienced, and certified professionals for on-site IT and information assurance (IA) services to our customers.</p>
              <p className="pt-2 text-gray-600 text-[14.5px]  about1:text-[15px] pr-3 about1:pr-6"> IMG is committed to helping our clients use technology to be more efficient, effective, and productive. Our people bring integrity, industry and customer knowledge, and technical excellence to every project. Developing solutions that integrate our experience and expertise with industry best practices ensures the highest level of quality is achieved. From maintaining service levels on a long-standing contract to meeting no-notice surge requirements, success comes from meeting your goals today and into the future.</p>
            </div>
            
            <div className="  items-center py-10 sm:py-20 about5:flex bg-[#191970]">
              <Image src={pro} alt="" className="pb-6 about5:pb-0 relative hidden mx-6 about5:mx-0 about5:block about5:right-5 h-[478px] about5:h-full object-cover about5:-top-0  about5:w-[500px] about3:w-[530px] about1:w-[620px]  border-[10px] border-cyan-400"/>
             <div className="about3:hidden block px-3 job6:px-6 about5:pr-6  xl:pr-9">
              <div className="flex justify-center">
  <h2 className="text-[22px]/[1.29] w-[545px] about6:w-full about8:text-[30px]/[1.29] about8:text-center about3:text-left about4:text-[33px]/[1.29] about2:text-[34px]/[1.29] about1:text-4xl/[1.29] text-blue-600 font-bold">
                Information Management Group, Inc.<span className="text-gray-300  about3:text-gray-700"> (IMG) was founded in </span>1987.
              </h2>
              </div>
           
              <div className="">
              <p className="pt-6 text-gray-300 about8:text-center about5:text-left about3:text-gray-600 text-[12.5px] about8:text-[13.5px] about4:text-[14.5px]  about1:text-[15px] about5:pr-3 about1:pr-6"> We are a growing, debt-free small business specializing in the analysis, design, and application of information technology (IT) and communications solutions for government and commercial organizations worldwide. Over the course of our 30-year history, we have provided automation services throughout the United States and overseas; we provide cleared, experienced, and certified professionals for on-site IT and information assurance (IA) services to our customers.</p>
              <p className="pt-2 text-gray-300 about8:text-center about5:text-left about3:text-gray-600 text-[12.5px] about8:text-[13.5px] about4:text-[14.5px]  about1:text-[15px] pb-8 about5:pb-0 about5:pr-3 about1:pr-6"> IMG is committed to helping our clients use technology to be more efficient, effective, and productive. Our people bring integrity, industry and customer knowledge, and technical excellence to every project. Developing solutions that integrate our experience and expertise with industry best practices ensures the highest level of quality is achieved. From maintaining service levels on a long-standing contract to meeting no-notice surge requirements, success comes from meeting your goals today and into the future.</p>
              </div>
          </div>
             <Image src={pro} alt="" className="relative block  about5:hidden about5:right-5 about7:h-[478px] about5:h-full object-cover about5:-top-0  about5:w-[500px] about3:w-[530px] about1:w-[620px]  border-[10px] border-cyan-400"/>
            </div>
        </MotionDiv> 

        {/* section 3   */}

 
  <MotionDiv
    initial={{
       x: 200,
       opacity: 0,
     }}
     transition={{ duration: 1.200 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }} className="max-w-screen-2xl my-10 sm:my-20 about6:my-36 about6:pt-14 pb-6 about3:bg-[#191970] gap-10 mx-auto  px-6 about6:pr-6 xl:pr-9 relative grid  grid-cols-1 about6:grid-cols-2  -top-10">
          <Image src={win} alt="win" className="relative hidden about6:block  object-cover about6:-top-14 about4:-top-24    border-[10px] border-cyan-400"/>
          
        <div>
          <h3 className="text-md text-blue-600 about3:text-cyan-200 about8:text-center about6:text-left">Winning services to our customers.</h3>
          <div className="flex justify-center">
            <h2 className="text-[22px]/[1.29]  sm:text-[30px]/[1.29]  about4:text-[33px]/[1.29] about2:text-[34px]/[1.29] about1:text-4xl/[1.29] text-gray-700 about8:text-center about6:text-left w-[445px] about6:w-full about3:text-gray-100 font-bold"><span className="">Our award winning employees </span>are supported by proven</h2>
          </div>
        
        <p className="pt-8 text-[12.5px] sm:text-[13.5px] about4:text-[14.5px] pb-8 about1:text-[15px]  text-gray-600 about8:text-center about6:text-left about3:text-gray-300"> Time tested processes that have been captured in a constantly evolving knowledgebase that is used by every member of our staff to improve the quality of the service they deliver while minimizing risks to the customer’s mission. This commitment to constant process improvement and quality management throughout all facets of the company has enabled IMG to deliver consistent, repeatable and scalable award winning services to our customers.</p>
        <Image src={win} alt="win" className="relative  about6:hidden  block  object-cover about6:-top-14 about4:-top-24  about7:h-[445px] border-[10px] border-cyan-400"/>
        </div>
     </MotionDiv>  

      <div className=''>

        <Footer/>
    </div> 
</div>
        
        

  )
}

export default page





