import React from 'react'
import Wrapper from '../components/Wrapper'
import { Network } from 'lucide-react'
import Net from "@../../../public/network.png"
import Image from "next/image"
import Support from "@../../../public/kkk-removebg-previe.png"
import Folder from "@../../../public/kkk-removebg.png"
import Mangment from "@../../../public/management.png"
import cyber from "@../../../public/cyber-security.png"
import system from "@../../../public/system-administration.png"
import visual from "@../../../public/database-management.png"
import Footer from '../components/Footer'
import { MotionDiv } from '../components/MotionImg'

const Box = [
    {
        id:1,
        img:"/network.png",
        heading:"Network Management",
        points1: "NIPRNet, SIPRNet, & JWICS trouble ticket management",
        points2: "New Software testing & release",    
        points3: "Hotfix & patch implementation",
       
        
        
    },
    {
        id:2,
        img:"/support.png", 
        heading:"Help Desk",
        points1: "Trouble ticket implementation & management",
        points2: "System outage troubleshooting",
        points3: "Tier I, II, III support",
    
        
       
       
    },
    
    {
        id:3,
        img:"/folder.png",
        heading:"Database Administration",   
        points1: "User access/ account management",
        points2: "System performance optimization" , 
        points3: "Server migration",
        points4: "Oracle/ SQL ",
       
       
       
    },
    
    {
        id:4,
        img:"/management.png",
        heading:"System Engineer/ Administration",    
        points1: "Systems install, upgrade, & replacement",   
        points2: "Active Directory/ Sharepoint/ Exchange",
        points3: "Server back-ups VMware/Virtualization",
        points4: "Disaster Recovery plans/ COOP"
    },
    {
        id:5,
        img:"/cyber-security.png", 
        heading:"Cyber Security",   
        points1: "Computer Network Defense (CND)", 
        points2: "Certification & Accreditation",
        points3:"Vulnerability Assessments",
        points4: "Network Security",
        points5: "CompuSec",
       
    },
    {
        id:6,
        img:"/system-administration.png",
        heading:"Network Infrastucture",
        points1: "Defense Switch Networks (DNS)/Router/Switch installation & Voice over Internet Protocol (VoIP)",
        points2: "CAT 5, CAT5E, CAT 6, single mode, multi-mode fibers, terminations/firewall & connectors",
        
    },
    {
        id:7,
        img:"/database-management.png",
        heading:"Visual Information & Managed Print Services",      
        points1:"Digital Press Large Volume Production", 
        points2:"Binding and Post Production Services",
        points3: "Video Teleconference Support",
        points4:"Large Format Print Production",
        points5:"Mounting and Laminating ",
        points6: "Multimedia Production", 
        points7: "Photography",
        points8: "Videography"
 },
    

]
const Page = () => {
  return (
   <>
   <Wrapper>
    
   <div className=''>
   <h2 className="text-[22px]/[1.29] sm:text-3xl//[1.29] md:text-4xl/[1.29] lg:text-6xl/[1.22] font-[630] text-blue-600 about8:text-center md:px-[139px] lg:px-[159px] mt-14 py-1 pl-5"><span className='about8:py-1 about8:pl-5  bg-blue-50 rounded-lg'>Empowering Peo</span>ple. Improving Results</h2>
      <p className='mt-6 about8:text-center px-[15px] sm:px-[65px] text-[13px] sm:text-[14.5px] about4:text-[16.5px]  about1:text-lg text-gray-600 lg:px-[165px] '>IMG is committed to helping our clients use technology to be more efficient, effective, and productive. 
        Our people bring integrity, technical excellence, and industry and customer knowledge to every project. 
        Developing solutions that integrate our experience and expertise with industry best practices ensures we 
        achieve the highest level of quality. From maintaining service levels on a longstanding contract to meeting 
        no-notice surge requirements, our success comes from meeting your goals today.</p>
   </div>

</Wrapper>

   <div className='hidden lg:flex justify-between'>
   <Image src={Support} alt="" className=''/>
    <Image src={Folder} alt="" className="" />
   </div>
<Wrapper>
        <div className='mt-16 sm:mt-24 lg:mt-0 text-left bg-blue-50/100 mb-4 sm:mx-6 pt-5 rounded-2xl'>
            <h2 className='text-[22px]/[1.29] lg:text-5xl sm:text-3xl md:text-4xl font-semibold  mt-12 sm:mt-16 text-balance text-center px-5 lg:px-[136px]'>IT Operations and <span className='text-blue-600'>Management </span>Services</h2>
            <div className='flex justify-center'>
            <div className='w-[95%] grid  my-16 grid-cols-1 md:grid-cols-2 div1:grid-cols-3 gap-10 '>
            {
                Box.map((items,i,key) => {
                    return (
                      <MotionDiv initial={{
                        opacity: 0,
                        y: -100
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} className='  border rounded-lg  bg-white shadow-xl border-gray-300/50 px-5 pb-11'
                    key={items.id}>
                          <ol className='mt-10 text-[16px] sm:text-[18px]'>
                          <li className=''> <Image src={items.img} alt="Icons" width={30} height={30} className=' text-center'/></li>
                           <li className='text-[20px] sm:text-2xl  mt-7 text-blue-600 font-semibold text-left'> {items.heading}</li>
                           <li className='mt-5 '>{items.points1}</li>
                           <li>{items.points2}</li>
                           <li>{items.points3}</li>
                           <li>{items.points4}</li>
                           <li>{items.points5}</li>
                           <li>{items.points6}</li>
                           <li>{items.points7}</li>
                           <li>{items.points8}</li>

                        </ol>
                      </MotionDiv>
                    )
                })
            }
            </div>
          </div>
        </div>
   
   </Wrapper>

   <div className='mt-16'>

<Footer/>
</div>
   </>
  )
}

export default Page
