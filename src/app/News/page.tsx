import Image from "next/image"
import build from  "@/../public/hhm.png"
import img from "@/../public/mm.jpg"

import Link from "next/link"
import { Noto_Sans_Buhid } from "next/font/google"
import Footer from "../components/Footer"
import { MotionDiv, MotionImg } from "../components/MotionImg"

const poppins = Noto_Sans_Buhid({
  weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal', subsets: ['latin']
})

const page = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto  about5:pl-6 xl:pl-9 relative grid about5:gap-6 grid-cols-1 about3:grid-cols-2 ">

        <MotionDiv
    initial={{
       x: -100,
       opacity: 0,
     }}
     transition={{ duration: 0.87 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }}   className="py-[90px] pr-3 hidden about3:block about2:pr-4 about1:pr-6">
          <p className={` ${poppins.className}`}><span className="text-blue-600  font-semibold text-[13px] tracking-wider  uppercase"><span className="py-1 pl-5  bg-cyan-100 ">Stay Informed</span>, Stay Inspired</span></p>
          <h2 className="text-[30px]/[1.29] about4:text-[48px]/[1.22] about2:text-[50px]/[1.22] about1:text-[52px]/[1.24] text-gray-700 font-bold">
            Welcome to the <span className=" text-blue-600">IMG Newsroom</span>
          </h2>
          <p className="pt-6 text-gray-600 text-[14.5px]  about1:text-[15px] pr-3 about1:pr-6"> Stay Updated with the Latest News and Updates from IMG. Explore our comprehensive coverage of industry trends, company announcements, and insights from our team of experts. Discover how IMG is shaping the future and making headlines. Join us on our journey to inform, inspire, and innovate.</p>

        </MotionDiv>

        <div className="  items-center py-10 sm:py-20 jobo6:flex bg-[#191970]">
          <MotionImg
    initial={{
       x: 100,
       opacity: 0,
     }}
     transition={{ duration: 0.87 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }} src="/hhm.png" alt="" className="jobo6:block hidden about5:pb-0 relative  mx-6 about5:mx-0  right-5 object-cover about5:-top-0 w-[266px] jobo5:w-[366px] jobo4:w-[500px] about3:w-[530px] about1:w-[530px]  border-[10px] border-cyan-400" />
          <div className="about3:hidden block px-3 job6: about5:pr-6  xl:pr-9">
            <div className="flex flex-col justify-center">
              
            <p className={` ${poppins.className}`}><span className="text-blue-600  font-semibold text-[10px] jobo4:text-[13px] tracking-wider  uppercase"><span className="py-1 pl-5  bg-cyan-400 ">Stay Informed,</span> Stay Inspired</span></p>
              <h2 className="text-[26px]/[1.22] text-gray-100 sm:text-[30px]/[1.22] jobo4:text-[40px]/[1.22]  about3:text-left about4:text-[46px]/[1.22] about2:text-[34px]/[1.29] about1:text-4xl/[1.29] gray-100  font-bold">
                Welcome to the<span className="text-cyan-100">  IMG Newsroom</span>
              </h2>
            </div>

            <div className="">
              <p className="pt-6 text-gray-300 pb-8 text-left about3:text-gray-600 text-[12.5px] about8:text-[12.5px] about4:text-[14.5px]  about1:text-[15px] pr-3 about1:pr-6"> Stay Updated with the Latest News and Updates from IMG. Explore our comprehensive coverage of industry trends, company announcements, and insights from our team of experts. Discover how IMG is shaping the future and making headlines. Join us on our journey to inform, inspire, and innovate.</p>
              <Image src={build} alt="" className="jobo6:hidden block about5:pb-0 relative  mx-6 about5:mx-0 right-7 jobo6:right-5 object-cover about5:-top-0 h-[300px] jobo6:w-[266px] jobo5:w-[366px] jobo4:w-[500px] about3:w-[530px] about1:w-[530px]  border-[10px] border-cyan-400" />
            </div>
          </div>
          {/* <Image src={build} alt="" className="relative block  about5:hidden about5:right-5 about7:h-[478px] about5:h-full object-cover about5:-top-0  about5:w-[500px] about3:w-[530px] about1:w-[620px]  border-[10px] border-cyan-400" /> */}
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-[7px] about8:px-4 job4:px-8 md:px-16  pt-20">
       <h2 className="text-3xl about8:text-5xl font-semibold mx-2 border-b-2 border-blue-600 mb-10">News</h2>
        <div className="bg-gray-100  px-5 mb-16 py-12 rounded-lg w-full ">
          <div className="flex justify-center pb-8">
            <h3 className="text-[16px] about8:text-[19px] job4:text-2xl w-[800px] text-center text-gray-700 font-bold">Information Management Group Earns <span className="text-blue-600">Place on Washington Business Journal&apos;s Cybersecurity Companies</span> List</h3>
          </div>
      
        <div className="bg-white flex justify-center">
        <Image src={img}  alt="" className="w-[800px]  "/>
        </div>
        
        <p className="border rounded-b-lg text-gray-600 text-[11.3px] about8:text-[13px] job4:text-[14px] md:text-[16px] border-gray-400 pt-11 pb-6 px-[7px] about8:px-4 sm:px-7 border-t-0 ">Information Management Group (IMG), a privately-owned small business, is thrilled to announce its remarkable recognition in Washington Business Journals&apos; prestigious Cybersecurity Companies List, featured in the October 13, 2023, issue. This acknowledgment underscores IMG&apos;s exceptional expertise and dedication to the cybersecurity sector. IMG&apos;s ability to secure its place on this renowned list showcases the remarkable skills and dedication of its team, highlighting the company&apos;s ability to compete with industry giants. This recognition is a testament to the resilience, innovation, and unwavering commitment of small businesses to the cybersecurity landscape. IMG is dedicated to assisting our clients in harnessing technology for improved efficiency, effectiveness, and productivity. Our team members contribute integrity, technical prowess, and a wealth of industry and customer insights to each project. We prioritize developing solutions that seamlessly blend our experience and expertise with industry best practices, resulting in the highest quality outcomes. Whether it&apos;s maintaining service levels on long-term contracts or swiftly meeting unforeseen surge requirements, our success stems from our ability to meet your immediate objectives.

<br/>For more information about Information Management Group reach out to us at <Link href="https://www.imgva.com/contact-us" className="text-blue-600">https://www.imgva.com/contact-us</Link>.</p><p></p>
        </div>
    </div>
<div className="mt-16">
  <Footer/>
</div>
   
    </>
  )
}

export default page
