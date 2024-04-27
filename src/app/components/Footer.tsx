"use client"

import Image from 'next/image';
import link from "@/app/components/assets/Linked.png"
import face from "@/app/components/assets/face.png"
import X from "@/app/components/assets/x.png"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// import Image from "next/image";
// import logo99 from "@/../../public/IMG-Logo-4.png";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Navbar from "./theme-provider";

// const Footer = () => {
//   let pathname = usePathname();

//   return (
//     <footer className="bg-gray-900 text-white h-screen">
//       <div className="container mx-auto py-8">
//         <div className="flex justify-between items-center">
//           <div>
//             <Image
//               src={logo99}
//               alt="Money logo"
//               className="h-10 w-12 object-cover"
//             />
//           </div>
//           <nav className="flex gap-7 text-md font-semibold">
//             <ul className="flex gap-7">
//               <li>
//                 <Link
//                   href="/"
//                   className={`link ${
//                     pathname == "/" ? "text-blue-600" : "hover:text-blue-600"
//                   }`}
//                 >
//                   HOME
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/whoWeAre">
//                   <Navbar />
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contract-vehicles"
//                   className={`link ${
//                     pathname == "/contract-vehicles"
//                       ? "text-blue-600"
//                       : "hover:text-blue-600"
//                   }`}
//                 >
//                   CONTRACT VEHICLES
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/img-events"
//                   className={`link ${
//                     pathname == "/img-events"
//                       ? "text-blue-600"
//                       : "hover:text-blue-600"
//                   }`}
//                 >
//                   EVENTS
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/news"
//                   className={`link ${
//                     pathname == "/news" ? "text-blue-600" : "hover:text-blue-600"
//                   }`}
//                 >
//                   NEWS
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#jobopenigs"
//                   className={`link ${
//                     pathname == "/kk" ? "text-blue-600" : "hover:text-blue-600"
//                   }`}
//                 >
//                   JOB OPENINGS
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// components/Footer.js

import { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    // Add your subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black/90 text-white  py-8 pt-16 ">
      <div className=''>
        <div className="container  mx-auto">
        <div className="grid grid-cols-1 Foot2:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
            <h3 className="text-xl mb-4 hidden Foot2:block">Quick Links</h3>
          
            <Accordion type="single" className='block Foot2:hidden'collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h3 className="text-xl mb-4">Quick Links</h3></AccordionTrigger>
    <AccordionContent>
    <ul className="space-y-2">
    <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/whoWeAre" className="text-gray-400 hover:text-white transition duration-300">Who We Are</Link></li>
              <li><Link href="/Contract" className="text-gray-400 hover:text-white transition duration-300">Contract Vehicles</Link></li>
              <li><Link href="/Events" className="text-gray-400 hover:text-white transition duration-300">Events</Link></li>
              <li><Link href="/job-position" className=" text-gray-400 hover:text-white transition duration-300">Job Openings</Link></li>
              <li><Link href="/News" className=" text-gray-400 hover:text-white transition duration-300">News</Link></li>
              </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>
  <ul className="space-y-2 Foot2:block hidden">
              <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/whoWeAre" className="text-gray-400 hover:text-white transition duration-300">Who We Are</Link></li>
              <li><Link href="/Contract" className="text-gray-400 hover:text-white transition duration-300">Contract Vehicles</Link></li>
              <li><Link href="/Events" className="text-gray-400 hover:text-white transition duration-300">Events</Link></li>
              <li><Link href="/job-position" className=" text-gray-400 hover:text-white transition duration-300">Job Openings</Link></li>
              <li><Link href="/News" className=" text-gray-400 hover:text-white transition duration-300">News</Link></li>
            </ul>
          </div>


          <div className='  Foot2:hidden block'>
          <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger><h3 className="text-xl mb-4 ">Legal</h3></AccordionTrigger>
    <AccordionContent>
    <div className='flex flex-col gap-2 Foot1:flex-row '>
                <p><a href="#" className="text-gray-400 flex hover:text-white transition duration-300">Contact  <span className=' pl-2 hidden Foot1:block'>|</span></a></p>
              <p><a href="#" className="text-gray-400 hover:text-white transition  flex duration-300">Privacy Policy <span className=' pl-2 hidden Foot1:block'>|</span> </a></p>
              <p><a href="#" className="text-gray-400 hover:text-white transition  duration-300">Terms of Service </a></p>
              </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
              
              
            
            </div>
          <div>
          <div className='md:pb-24'>
                  <h3 className="text-xl mb-4">Connect with Us</h3>
            <div className="flex space-x-4 mb-4 ">
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <div className=" flex justify-center items-center w-[40px] rounded-md h-[40px] bg-blue-700"><Image src={link} alt="Linkedin gray icon" className='w-[28px] h-[28px]'/></div>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
              <div className=" flex justify-center items-center w-[40px] rounded-md h-[40px] bg-gray-300"><Image src={X} alt="X Twitter gray icon" className='w-[28px] h-[28px]'/></div>
              </a>
              
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <div className=" flex justify-center items-center w-[40px] rounded-md h-[40px] bg-blue-600"><Image src={face} alt="Facebook gray icon" className='w-[28px] h-[28px]'/></div>
              </a>
              
    

              {/* <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a> */}
            </div>
            <p className="text-gray-400">Follow us on social media for updates.</p>
            <div className=' mt-6 Foot2:block hidden'>
              <h3 className="text-xl mb-4 ">Legal</h3>
              <div className='flex flex-col gap-2 Foot1:flex-row '>
                <p><a href="#" className="text-gray-400 flex hover:text-white transition duration-300">Contact  <span className=' pl-2 hidden Foot1:block'>|</span></a></p>
              <p><a href="#" className="text-gray-400 hover:text-white transition  flex duration-300">Privacy Policy <span className=' pl-2 hidden Foot1:block'>|</span> </a></p>
              <p><a href="#" className="text-gray-400 hover:text-white transition  duration-300">Terms of Service </a></p>
              </div>
            
            </div>
          </div>
            
          </div>
          <div className='pb-10'>
            <h3 className="text-xl mb-4">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full text-black px-3 py-2 rounded-md border border-gray-700 focus:outline-none"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 mt-2">Subscribe to our newsletter for news and promotions.</p>
          </div>
          
    
        </div>
        <hr className="border-gray-800 my-6" />
        <p className="text-center text-gray-400">Copyright © 2013 Information Management Group, Inc., All Rights Reserved</p>
        <p className="text-center text-gray-400 mt-3">4050 Legato Road, Suite 200, Fairfax, Virginia 22033 • 703-573-5000</p>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
