import Image from "next/image"
import image1 from "../img/image1.jpg"
import benefits from "../img/benefits.jpg"
import thegirl from "../img/good.jpg"
import Footer from "../components/Footer"
import { MotionDiv } from "../components/MotionImg"

let map = [
    {
        id:1,
        img: "/money-matters.jpg",
        heading: "Money matters",
        para: "Our company offers competitive salaries, a 401(K) with company match and vesting schedule, as well as spot awards and performance-based increases."
    },
    {   
        id:2,
        img: "/learning.png",
        heading: "Career development and continuous learning",
        para: "On-the-job training, certification reimbursement, and professional development opportunities are provided by the company."
    },
    {
        id:3,
        img: "/team2.png",
        heading: "Building a stronger IMG team",
        para: "Employee referral bonus is offered upon hire and retention. Access to fitness facilities is provided depending on job location."
    },
    {
        id:4,
        img: "/time.png",
        heading: "When you need time off",
        para: "IMG employees accrue PTO based on tenure, starting out at 15 days per year. IMG observes 11 holidays per year, although paid holidays may vary by work site and/or contract."
    },
    { 
        id:5,
        img: "/life.png",
        heading: "Life’s unpredictable moments",
        para: "Health Care: PPO and HSA medical plans, Dental, Vision, Life Insurance, Optional Supplemental Insurance, Short-Term Disability, Long-Term Disability, Health Flex Spending Account (FSA), Dependent Care Flex Spending Account (FSA), Voluntary Benefits, Flex-Scheduling; based on job requirements, Telecommuting; based on job requirements, Employee Assistance Program (EAP)."
    },
  
]

const page = () => {
    return (
        <>
            <div className="bg-[#191970] relative  -top-20" >
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-9">
                    <MotionDiv initial={{
                        opacity: 0,
                        y: -100
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}  className="flex justify-start sm:pl-10 lg:pl-28 pt-[100px]">
                        <Image src={image1} alt="" className="object-cover rounded-xl lg:h-[584px] w-full lg:w-[784px]" priority/>
                    </MotionDiv>
                    <div className="flex about8:ml-28 sm:ml-0 justify-end div2:pr-36 xl:pr-46">
                        
                        <MotionDiv
    initial={{
       x: 100,
       opacity: 0,
     }}
     transition={{ duration: 0.87 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }}  className="bg py-8 about8:py-12 sm:pt-12 sm:py-0 px-3 sm:px-8 lg:pt-16 lg:px-12 text-gray-400 bg-gray-800  relative -top-4 about8:-top-20 sm:-top-24 lg:-top-56 rounded-lg ">
                            <div className=" sm:h-[320px] sm:w-[384px] lg:h-[389px] lg:w-[484px]">
                            <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-white">Benefits Program</h1>
                            <p className="text-[13px] about8:text-sm sm:text-base pt-5 lg:pt-7">IMG&apos;s success is founded on our employees.  IMG&apos;s record of successful contract performance and customer service is the result of the professional competence and dedication of our fully certified and experienced people.
                                We respect and understand our employees&apos; need for work/life balance. IMG offers a competitive, comprehensive benefits package in order to care for the “whole person.”</p>
                        </div>
                        </MotionDiv>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-2xl relative -top-64 mx-auto px-6 lg:px-9  pt-52 sm:pt-64 grid grid-cols-1 lg:grid-cols-2">
                <div className="cols-span-1   sm:px-10">
                <h2 className="text-xl about8:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold pt-16 text-gray-800">Tired Referral Bonus Program</h2>
                <p className="pt-5 sm:pr-9 text-[13px] about8:text-base sm:text-lg text-gray-500">IMG encourages all employees to refer qualified job applicants for available job openings. When making referrals, instruct the applicant to list the employee&apos;s name on their employment application as the referral source. IMG will pay a referral bonus in accordance with the award schedule when an individual introduces a job candidate to the Company, and that candidate is hired.</p>
               <div className="flex justify-center lg:justify-start">
               <Image src={benefits} alt="" className="pt-9 "/>
               </div>
                </div>
                <div className="lg:justify-self-end justify-self-center rounded-full">
                <Image src={thegirl} alt="" className="pt-9 rounded-full  object-cover h-[384px] w-[384px] sm:h-[584px] sm:w-[584px]"/>
              
                </div>
                
                
            </div>
                <div></div>
            <div className="max-w-screen-2xl relative -top-72 mx-auto px-6 lg:px-16 justify-center pt-24 sm:pt-32 grid grid-cols-1 lg:grid-cols-2">
                {
                    map.map((item,key)=>{
                        return(
                              <MotionDiv
                              initial={{
                                 x: 100,
                                 opacity: 0,
                               }}
                               transition={{ duration: 0.87 }}
                               whileInView={{ opacity: 3, x: 0 }}
                               viewport={{ once: true }} 
                               
                               className="flex col-span-1  pt-10" key={item.id}>
                        <Image src={item.img} alt="" className="rounded-full w-12 h-12 about8:w-16 about8:h-16 sm:w-24 sm:h-24" width={100} height={100}/>
                        <div className="pl-3 about8:pl-6 sm:pl-10 sm:px-10 sm:pt-6" >
                            <h2 className="uppercase text-balance text-lg sm:text-xl text-gray-700">{item.heading}</h2>
                            <p className="pt-3 text-[13px] about8:text-sm sm:text-lg text-balance text-gray-500">{item.para}</p>
                        </div>
                    
                        
                    </MotionDiv>
                        )
                    })
                }
                  
                    
                    
                        
                 
                </div>
                <Footer/>
        </>
    )
}

export default page
