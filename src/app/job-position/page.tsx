import React from 'react'
import Wrapper from '../components/Wrapper'
import Image from 'next/image'
import Buss from "@../../../public/munazza0909i9-removebg-preview.png"
import icims from "@/../public/icims.png"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Footer from '../components/Footer'
import { MotionDiv } from '../components/MotionImg'


const Jobpage = () => {
  return (
<>
<Wrapper>
      <div className='bg-blue-600  border rounded-3xl  bl:grid bl:grid-cols-2  flex flex-col justify-center items-center '>
         <MotionDiv
             initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}  className='px-4 bl:col-span-1 text-left'>
          <Image src={Buss} alt='bussiness-man'/>
          </MotionDiv>

  < MotionDiv
             initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{ duration: 1.1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}  className='bl:col-span-1 text-left about8:text-center mt-5 sm:pr-7 text-white'>
    <h2 className='bl:text-4xl/snug sm:text-3xl text-[22px]/[1.29] about8:text-2xl font-semibold sm:px-7 px-3'> Welcome to our employment section
    Here you can view our current job openings and apply for positions online.</h2>
<p className='mt-8 text-[14px] about8:text-[18px] text-white/80 px-3 pb-5'>Come join IMG’s team! Our teams live our core values across our organization. We respect self, others and the world around us. Our integrity drives us to deliver results to our employees and our customers. We value the synergy of teamwork. 
We value the impact diversity has towards developing a solution. We are continually learning to improve our skills. We value commitment to completing the work. We take ownership over our results. </p>
      </MotionDiv>
      </div>
      {/* <div className='bg-blue-600 border rounded-3xl bl:grid bl:grid-cols-2  bl:text-left'>

{/* Image Section */}
{/* <div className='flex col-span-1 items-center '>
  <Image src={Buss} alt='bussiness-man'/>
</div> */}

{/* Text Section */}
{/* <div className='p-4'>
  <h2 className='text-white text-center sm:text-left text-3xl mt-20 col-span-1 font-semibold mb-4'>Welcome to our employment section</h2>
  <p className='text-white/80 text-center sm:text-left mb-6'>
    Come join IMG’s team! Our teams live our core values across our organization. We respect self, others and the world around us. Our integrity drives us to deliver results to our employees and our customers. We value the synergy of teamwork. We value the impact diversity has towards developing a solution. We are continually learning to improve our skills. We value commitment to completing the work. We take ownership over our results.
  </p>
</div>

</div> */} 

    <div className=' '>

<h2 className='sm:text-4xl text-[25px] about8:text-3xl mt-32 font-semibold text-gray-800 text-center'>Join Our Team-<span className='text-blue-600'>Centric</span>
<br  className='mt-7'/><span className='text-blue-600'>Environment</span> & Make an Impact
</h2> 
{/* 
<div className='text-center mt-12 mx-32  border rounded-lg  shadow-2xl'>
  
  <p className=' py-10 px-16 pb-12 text-gray-600'>You have talent, drive and capabilities. We have a team centric environment designed to provide efficient and effective solutions to our customers.
  If you are interested in learning more about our organization, please submit your resume to an open position. If we do not have a current opening that interests you, please feel free to network with our Talent Acquisition team on LinkedIn. You may also submit a profile for general consideration.
   Please note: If you have applied with us in the past your profile may already exist in the system. You will be able to reset your username and password.
Do you know somebody whom you feel would be interested in joining our team? Please refer him/her to us!</p>

</div> */}
<div className='text-left sm:text-center mt-8 md:mt-12 about8:mx-4 md:mx-8 lg:mx-32 border rounded-lg shadow-xl about8:shadow-2xl'>
  <p className='py-6 md:py-10 px-4 md:px-8 lg:px-16 text-[13px] about8:text-[16px] pb-8 md:pb-12 text-gray-600'>
    You have talent, drive, and capabilities. We have a team-centric environment designed to provide efficient and effective solutions to our customers. If you are interested in learning more about our organization, please submit your resume to an open position. If we do not have a current opening that interests you, please feel free to network with our Talent Acquisition team on LinkedIn. You may also submit a profile for general consideration. Please note: If you have applied with us in the past, your profile may already exist in the system. You will be able to reset your username and password. Do you know somebody whom you feel would be interested in joining our team? Please refer him/her to us!
  </p>
</div>

 </div>

<div className=''>
<div >

{/* <h2 className='text-4xl/tight mt-12 font-bold text-gray-800 text-center gap-3'>Get The<span className='text-blue-600'> Jobs</span>
<br/><span className='text-blue-600'>Easily</span> & Fast
</h2>  */}
<h2 className='sm:text-5xl/tight text-4xl/tight mt-20 about8:mt-32 font-bold text-gray-800 text-center gap-3'>Job Listin<span className='text-blue-600'>gs</span>
{/* <br/><span className='text-blue-600'>Easily</span> & Fast */}
</h2> 
<p className='text-center text-[13px] about8:text-[16px] mt-1'>You can  <Link href='/open_position' className='text-blue-600 underline'>view all open positions</Link> or use the following search form to find jobs that suit your specific career interests.</p>
</div>
<div>
 <div className='flex gap-3 about8:gap-6'>
 <div className='rounded-full border mt-14 shadow-md shadow-gray-400 h-[60px] about8:h-[80px]  w-[90%] px-2 about8:px-5 py-2 about8:py-5'><Input className="border-0 outline-none
                  focus-visible:ring-0 focus-visible:ring-transparent" placeholder='Start your Job Search here'/>
</div>
<button className='sm:px-14 py-5 px-10 bg-blue-600 hover:bg-blue-500 hover:shadow-2xl mt-14 text-white rounded-full'>Search</button>

 </div>
<div className='flex sm:gap-7 gap-2'>
<Select>
  <SelectTrigger className="w-[280px] focus-visible:ring-0 focus-visible:ring-transparent h-[60px] rounded-full shadow-md shadow-gray-400 border mt-8 about8:mt-14 sm:px-5  py-5">
    <SelectValue placeholder="Select the Category"/>
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="All">(All)</SelectItem>
  <SelectItem value="AccountingFinanceContractsAdmin">Accounting/Finance/Contracts Administration</SelectItem>
<SelectItem value="BusinessDevelopment">Business Development</SelectItem>
<SelectItem value="CyberSecurity">Cyber Security</SelectItem>
<SelectItem value="HumanResources">Human Resources</SelectItem>
<SelectItem value="Logistics">Logistics</SelectItem>
<SelectItem value="Management">Management</SelectItem>
<SelectItem value="NetworkingTelecommunications">Networking & Telecommunications</SelectItem>
<SelectItem value="OperationsManagement">Operations Management</SelectItem>
<SelectItem value="Other">Other</SelectItem>
<SelectItem value="PrintProductionServices">Print Production Services</SelectItem>
<SelectItem value="TechnicalServicesOperations">Technical Services & Operations</SelectItem>
<SelectItem value="VisualCommunicationServices">Visual Communication Services</SelectItem>

  </SelectContent>
</Select>
  <Select>
  <SelectTrigger className="w-[280px] focus-visible:ring-0 focus-visible:ring-transparent h-[60px] rounded-full  mt-8 about8:mt-14 shadow-md shadow-gray-400 border  sm:px-5 py-5">
    <SelectValue  placeholder="Select the Location"/>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="All">(All)</SelectItem>
<SelectItem value="CurrentLocation">(Current Location)</SelectItem>
<SelectItem value="ZipCode">(Zip Code)</SelectItem>
<SelectItem value="US-Remote">US-Remote (Home Office)</SelectItem>
<SelectItem value="US-CA-ElSegundo">US-CA-El Segundo</SelectItem>
<SelectItem value="US-CA-SantaBarbara">US-CA-Santa Barbara</SelectItem>
<SelectItem value="US-CA-SantaClara">US-CA-Santa Clara</SelectItem>
<SelectItem value="US-CO-ColoradoSprings">US-CO-Colorado Springs</SelectItem>
<SelectItem value="US-DC-Washington">US-DC-Washington</SelectItem>
<SelectItem value="US-GA-FortStewart">US-GA-Fort Stewart, GA</SelectItem>
<SelectItem value="US-ID-Scoville">US-ID-Scoville</SelectItem>
<SelectItem value="US-MD-AnnapolisJunction">US-MD-Annapolis Junction</SelectItem>
<SelectItem value="US-MD-Columbia">US-MD-Columbia</SelectItem>
<SelectItem value="US-MD-FortMeade">US-MD-Fort Meade</SelectItem>
<SelectItem value="US-NC">US-NC</SelectItem>
<SelectItem value="US-NY-Schenectady">US-NY-Schenectady</SelectItem>
<SelectItem value="US-PA-WestMifflin">US-PA-West Mifflin</SelectItem>
<SelectItem value="US-VA-Chantilly">US-VA-Chantilly</SelectItem>
<SelectItem value="US-VA-Fairfax">US-VA-Fairfax</SelectItem>
<SelectItem value="US-VA-FortBelvoir">US-VA-Fort Belvoir</SelectItem>
<SelectItem value="US-VA-Springfield">US-VA-Springfield</SelectItem>

  </SelectContent>
</Select>
</div>

  </div>
  <div></div>
  <div></div>
</div>

<div className="  text-center pb-9  relative mt-12">
        <Link href="https://team.icims.com/jobseekerhelp" target="_blank" className="font-serif text-[15px] underline font-semibold text-blue-600">Application FAQs</Link>
        <div className="flex justify-center">
          <Image src={icims} alt="Icims image" className="w-[90px]"/>
        </div>
        
        <h3 className="text-[13px] pb-4 ">Software Powered by <span className="text-blue-600">iCIMS</span> </h3>
        <Link className="font-semibold font-serif  text-blue-600 underline text-[13px] " target="_blank" href="https://team.icims.com/jobseekerhelp?utm_source=platform&utm_medium=link&utm_content=page1&utm_campaign=platform%20help">www.icims.com</Link>
        </div>
       
    </Wrapper>
    <div className='mt-16'>

        <Footer/>
    </div>
   
</>
  )
}

export default Jobpage

