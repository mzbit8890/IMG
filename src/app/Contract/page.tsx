"use client"
import React, { useState } from 'react'
import Image from "next/image"
import IMG from "@../../../public/contract_vehicles.jpg"
import Wheels from "@../../../public/lopp.png"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Wrapper from '../components/Wrapper'
import Footer from '../components/Footer'


const page = () => {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto px-6 xl:px-9'>

{/* <div className='ol:flex flex-col justify-center pr-9'>
<div className='grid ol:grid-cols-2  grid-cols-1 pl-36'>
    <div className='col-span-1 mt-20'>
        <h2 className='sma:text-6xl text-3xl font-bold text-blue-600 '><span className='text-black'>CON</span>TRACT <span className='text-black'>VEHICLES</span></h2>
     <div className='sma:flex justify-center items-center'><Image src={Wheels} alt=""  className='height=[500px] sma:w-[500px] w-[300px] mt-9'/></div>
        </div>

     <div className='col-span-1 sma:px-5 sma:flex '> <Image src={IMG} alt="Contract Vehicles sma:w-[400px] sma:h-[400px] h-[200px] w-[200px]"  className='mt-7  border rounded-md'/></div>
    </div> 
</div> */}

<div className=''>
  <div className='grid ol:grid-cols-2 grid-cols-1 items-center '>
    <div className='col-span-1 mt-20'>
     
      <h2 className='miss2:text-6xl  iol:text-5xl gyt:text-3xl rtu:text-2xl text-xl font-bold  flex justify-center ol:pl-32 '>
        CON<span className='text-blue-600'>TRACT</span><span>&nbsp;</span> VEHICLES<span>&nbsp;</span><span>&nbsp;</span>
      </h2>
  
      <div className='flex justify-center items-center'>
        <Image src={Wheels} alt="" className='miss2:w-[500px] sma:w-[400px] w-[300px] mt-9'/>
      </div>
    </div>
    <div className='col-span-1 sma:px-5 flex' style={{ margin: '0 auto' }}> 
      <Image src={IMG} alt="Contract Vehicles" className='mt-7 border rounded-md sma:w-[400px] sma:h-[400px] h-[200px] w-[200px]' />
    </div>
  </div>
</div>







{/*  

<div className='mr-7 ml-7 hy9:mr-10 hy9:ml-10 md:mr-14 md:ml-14 lg:mr-20 lg:ml-20  border-gray-600'>
<div className='mt-3 sm:mt-5 md:mt-7 lg:mt-9'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h1 className='text-[12px] swr:text-sm  kop:text-[15px] bhy:text-[17px] vgt:text-xl text-gray-700'>INFORMATION MANAGEMENT COMMUNICATIONS SERVICES (IMCS) IV</h1></AccordionTrigger>
    <AccordionContent>
    <p className='text-12px nkm:text-[14px]'>Under the U.S. Army Network Enterprise Technology Command (NETCOM) Information Management Communication Services (IMCS) IV will provide:</p>
          <ol className="list-decimal ml-8 mb-4 text-12px nkm:text-[14px]">
            <li>Telecommunications Support for C4IM (Command, Control, Communications, Computers, and Information Management) Unified Capabilities</li>
            <li>Information Technology Services (ITS)</li>
            <li>Land Mobile Radio (LMR) Network Management</li>
            <li>Inside/Outside Plant (to include Tier I and II support)</li>
          </ol>
          <p>IMCS will provide parts, supplies, tools, and vehicles to operate and maintain Network Enterprise Center (NEC) classified and unclassified communication system initiatives and support efforts including Army modernization, Army directives and initiatives, emerging technologies, network enhancements, technology refresh, and organization restructuring.</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>
<div className='mt-11'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger> <h1 className='text-[12px] swr:text-sm  kop:text-[15px] bhy:text-[17px] vgt:text-xl text-gray-700'>SOLUTIONS FOR INFORMATION TECHNOLOGY ENTERPRISE III (SITE III)</h1></AccordionTrigger>
    <AccordionContent>
   <p>The 10-year SITE III IDIQ contract provides a centralized and synchronized IT acquisition capability to meet worldwide security requirements and technical support services through system design, development, fielding and sustainment of global intelligence and Command and Control assets. SITE III facilitates worldwide coverage for integrated IT intelligence requirements and technical support services to DIA and National Geospatial-Intelligence Agency. SITE III also supports business process reengineering and development, performance measures and metrics, feasibility studies, IT systems architecture development and planning, research, design, engineering and development of systems, and fielding and installation of systems with capabilities developed during the design and engineering phase.</p>
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className='mt-11'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h1 className='text-[12px] swr:text-sm  kop:text-[15px] bhy:text-[17px] vgt:text-xl text-gray-700'>RESPONSIVE STRATEGIC SUPPORT SERVICES (RS3)</h1></AccordionTrigger>
    <AccordionContent>
    <p>Responsive Strategic Sourcing for Services (RS3) Office Mission: Provide Federal and State Government Agencies and Organizations world class contract management, administrative and procurement service support for their Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance (C4ISR) mission requirements.</p>
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className='mt-11'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h1 className='text-[12px] swr:text-sm  kop:text-[15px] bhy:text-[17px] vgt:text-xl text-gray-700'>GSA MULTIPLE AWARD SCHEDULE (MAS) SIN 54151S</h1></AccordionTrigger>
    <AccordionContent>
    <p>Under the MAS Program, GSA issues long-term government wide contracts that provide federal, state, and local government buyers access to commercial products, services and solutions. 54151S IT Professional Services for database planning and design; systems analysis, integration, and design; programming, conversion and implementation support; network services, data/records management, and testing.</p>
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className='mt-11'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger> <h1 className='text-[12px] swr:text-sm  kop:text-[15px] bhy:text-[17px] vgt:text-xl text-gray-700'>SEAPORT NEXT GENERATION (NEXGEN)</h1></AccordionTrigger>
    <AccordionContent>
    <p>SeaPort-NxG is the Navy's electronic platform for acquiring support services in 23 functional areas including Engineering, Financial Management, and Program Management. The Navy Systems Commands (NAVSEA, NAVAIR, NAVWAR, NAVFAC, and NAVSUP), the Office of Naval Research (ONR), Military Sealift Command (MSC), and the United States Marine Corps (USMC) compete their service requirements amongst 2400+ SeaPort-NxG Indefinite Delivery Indefinite Quantity (IDIQ) multiple award contract holders. </p>
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className='mt-11'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger> <h1 className='text-[12px] swr:text-sm  kop:text-[15px] bhy:text-[17px] vgt:text-xl text-gray-700'>NAVAL NUCLEAR PROPOSULION</h1></AccordionTrigger>
    <AccordionContent>
    <p>
    Part of a joint program, Naval Reactors, that is overseen by the Department of Energy’s National Nuclear Security Administration and the Department of the Navy. The contract includes Naval Nuclear Propulsion work at the Navy Nuclear Laboratory (NNL) sites in New York, Pennsylvania and Idaho.
    </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>
</div>

   */}

  
 
    <div className='mr-2 ml-2 hy9:mr-10 hy9:ml-10 md:mr-14 md:ml-14 lg:mr-20 lg:ml-20 border-gray-600'>
      <div className='mt-3 sm:mt-5 md:mt-7 lg:mt-9'>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className='text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-700'>INFORMATION MANAGEMENT COMMUNICATIONS SERVICES (IMCS) IV</h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className='text-[10px]/[1.22] about8:text-[13px] md:text-base lg:text-lg'>
                Under the U.S. Army Network Enterprise Technology Command (NETCOM) Information Management Communication Services (IMCS) IV will provide:
              </p>
              <ol className="list-decimal ml-2 mb-2 about8:ml-8 about8:mb-4 text-[10px]/[1.22] about8:text-[12px] md:text-base lg:text-lg">
                <li>Telecommunications Support for C4IM (Command, Control, Communications, Computers, and Information Management) Unified Capabilities</li>
                <li>Information Technology Services (ITS)</li>
                <li>Land Mobile Radio (LMR) Network Management</li>
                <li>Inside/Outside Plant (to include Tier I and II support)</li>
              </ol>
              <p className='text-[10px]/[1.22] about8:text-[13px] md:text-base lg:text-lg'>
                IMCS will provide parts, supplies, tools, and vehicles to operate and maintain Network Enterprise Center (NEC) classified and unclassified communication system initiatives and support efforts including Army modernization, Army directives and initiatives, emerging technologies, network enhancements, technology refresh, and organization restructuring.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='mt-3 sm:mt-5 md:mt-7 lg:mt-9'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger> <h1 className='text-[12px] swr:text-sm  kop:text-[15px] bhy:text-[17px] vgt:text-xl text-gray-700'>SOLUTIONS FOR INFORMATION TECHNOLOGY ENTERPRISE III (SITE III)</h1></AccordionTrigger>
    <AccordionContent>
   <p className='text-[10px]/[1.22] about8:text-sm md:text-base lg:text-lg'>The 10-year SITE III IDIQ contract provides a centralized and synchronized IT acquisition capability to meet worldwide security requirements and technical support services through system design, development, fielding and sustainment of global intelligence and Command and Control assets. SITE III facilitates worldwide coverage for integrated IT intelligence requirements and technical support services to DIA and National Geospatial-Intelligence Agency. SITE III also supports business process reengineering and development, performance measures and metrics, feasibility studies, IT systems architecture development and planning, research, design, engineering and development of systems, and fielding and installation of systems with capabilities developed during the design and engineering phase.</p>
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className='mt-3 sm:mt-5 md:mt-7 lg:mt-9'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h1 className='text-[12px] swr:text-sm  kop:text-[15px] bhy:text-[17px] vgt:text-xl text-gray-700'>RESPONSIVE STRATEGIC SUPPORT SERVICES (RS3)</h1></AccordionTrigger>
    <AccordionContent>
    <p className='text-[11px]/[1.22] about8:text-sm md:text-base lg:text-lg'>Responsive Strategic Sourcing for Services (RS3) Office Mission: Provide Federal and State Government Agencies and Organizations world class contract management, administrative and procurement service support for their Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance (C4ISR) mission requirements.</p>
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className='mt-3 sm:mt-5 md:mt-7 lg:mt-9'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h1 className='text-[12px] swr:text-sm  kop:text-[15px] bhy:text-[17px] vgt:text-xl text-gray-700'>GSA MULTIPLE AWARD SCHEDULE (MAS) SIN 54151S</h1></AccordionTrigger>
    <AccordionContent>
    <p className='text-[11px]/[1.22] about8:text-sm md:text-base lg:text-lg'>Under the MAS Program, GSA issues long-term government wide contracts that provide federal, state, and local government buyers access to commercial products, services and solutions. 54151S IT Professional Services for database planning and design; systems analysis, integration, and design; programming, conversion and implementation support; network services, data/records management, and testing.</p>
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className='mt-3 sm:mt-5 md:mt-7 lg:mt-9'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger> <h1 className='text-[12px] swr:text-sm  kop:text-[15px] bhy:text-[17px] vgt:text-xl text-gray-700'>SEAPORT NEXT GENERATION (NEXGEN)</h1></AccordionTrigger>
    <AccordionContent>
    <p className='text-[11px]/[1.22] about8:text-sm md:text-base lg:text-lg'>SeaPort-NxG is the Navy&apos;s electronic platform for acquiring support services in 23 functional areas including Engineering, Financial Management, and Program Management. The Navy Systems Commands (NAVSEA, NAVAIR, NAVWAR, NAVFAC, and NAVSUP), the Office of Naval Research (ONR), Military Sealift Command (MSC), and the United States Marine Corps (USMC) compete their service requirements amongst 2400+ SeaPort-NxG Indefinite Delivery Indefinite Quantity (IDIQ) multiple award contract holders. </p>
    </AccordionContent>
  </AccordionItem>
</Accordion></div>
<div className='mt-3 sm:mt-5 md:mt-7 lg:mt-9'>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger> <h1 className='text-[12px] swr:text-sm  kop:text-[15px] bhy:text-[17px] vgt:text-xl text-gray-700'>NAVAL NUCLEAR PROPOSULION</h1></AccordionTrigger>
    <AccordionContent>
    <p className='text-[11px]/[1.22] about8:text-sm md:text-base lg:text-lg'>
    Part of a joint program, Naval Reactors, that is overseen by the Department of Energy&apos;s National Nuclear Security Administration and the Department of the Navy. The contract includes Naval Nuclear Propulsion work at the Navy Nuclear Laboratory (NNL) sites in New York, Pennsylvania and Idaho.
    </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>
    </div>

      
     


</div>
<div className='mt-16'>

<Footer/>
</div>
    </>

  )
}

export default page
