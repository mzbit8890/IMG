"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import logo99 from "@/../../public/IMG-Logo-4.png";
import Wrapper from "./Wrapper";
import home from "./assets/home.png";
import events from "./assets/events.png";
import job from "./assets/job.png";
import news from "./assets/news.png";
import who from "./assets/who.png";
import contract from "./assets/contract.png";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import Navbar from "./theme-provider";

const Header = () => {
    const pathname = usePathname(); // This should be inside the functional component

    // Now you can use `pathname` to determine the header color
    let headerColor = 'text-gray-700'; // Default color

    switch (true) {
    
        
        case pathname.includes("/open_position/Job_ID"):
            headerColor = 'text-gray-300' ;
            break;
        case pathname.includes("/whoWeAre"):
            headerColor = 'text-gray-300';
            break;
        case pathname.includes("/benefits"):
            headerColor = 'text-gray-300';
            break;
    
       
        // Add more cases for other conditions as needed
        default:
            headerColor = 'text-gray-700'; // Default color
    }

    return (
        <Wrapper>
            <header className="relative top-1 z-10 ">
                <div>
                    <div>
                        <nav>
                            <ul className="hidden lg:flex justify-between items-center mx-auto">
                                <li>
                                    <Link className="flex gap-2 items-center" href="/">
                                        <Image src={logo99} alt="Money logo" className="h-10 w-12 object-cover" />
                                    </Link>
                                </li>
                                <div className={`flex gap-7 text-md  font-[500] ${headerColor}`}>
                                    <li><Link href="/" className={`hover:text-blue-600  link ${pathname === "/" ? "text-blue-600" : "link"}`}>HOME</Link></li>
                                    <li><Link href="/whoWeAre" className={`hover:text-blue-600 uppercase link ${pathname === "/whoWeAre" ? "text-blue-600" : "link"}`}><Navbar/></Link></li>
                                    <li><Link href="/Contract" className={`hover:text-blue-600  link ${pathname === "/Contract" ? "text-blue-600" : "link"}`}>CONTRACT VEHICLES</Link></li>
                                    <li><Link href="/Events" className={`hover:text-blue-600  link ${pathname === "/Events" ? "text-blue-600" : "link"}`}>EVENTS</Link></li>
                                    <li><Link href="/News" className={`hover:text-blue-600  link ${pathname === "/News" ? "text-blue-600" : "link"}`}>NEWS</Link></li>
                                    <li><Link href="/job-position" className={`hover:text-blue-600  link ${pathname === "/job-position" ? "text-blue-600" : "link"}`}>JOB OPENINGS</Link></li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <nav>
                            <ul className="flex lg:hidden justify-between">
                                <li>
                                    <Link className="flex gap-2 items-center" href="/">
                                        <Image src={logo99} alt="Money logo" className="h-9 w-10 object-cover" />
                                    </Link>
                                </li>
                                <Sheet>
                                    <SheetTrigger>{(pathname === "/whoWeAre" || pathname === "/benefits" ) ? <AlignLeft color='white' /> : <AlignLeft />}</SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <ul className="flex-col items-between flex-1">
                                                <div className={`flex  text-md  flex-col `}>
                                                <Link className="flex gap-2 items-center" href="/">
                                        <Image src={logo99} alt="Money logo" className="h-10 w-12 object-cover" />
                                        <p className=' text-[12px] about8:text-[14px] head2:text-[16px] text-blue-600'>Info. Management Group, Inc.</p>
                                    </Link>
                                                    <li className='mt-6 '>
                                                        <Link href="/" className={` ${pathname === "/" ? "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 bg-black/10 rounded-2xl w-[250px]  flex gap-3 head3:gap-6" : "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]  flex gap-3 head3:gap-6"} `}><Image src={home} alt="Home Icon" className='w-[20px] h-[20px]'/><h3>Home</h3></Link></li>
                                                   
                                                         <li className='flex'><Link href="/whoWeAre" className={` ${pathname === "/whoWeAre" ? "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 bg-black/10 rounded-2xl w-[250px]  flex gap-3 head3:gap-6" : "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]  flex gap-3 head3:gap-6"} `}><Image src={who} alt="Home icon" className='w-[25px] h-[25px]'/><h3 className='relative right-[10px]'><Navbar/></h3></Link></li>
                                                    
                                                   
                                                    <li className='flex'><Link href="/Contract" className={` ${pathname === "/Contract" ? "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 bg-black/10 rounded-2xl w-[250px]  flex gap-3 head3:gap-6" : "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]  flex gap-3 head3:gap-6"} `}><Image src={contract} alt="Contract vehicles icon" className='w-[20px] h-[20px]'/><h3>Contract Vehicles</h3></Link></li>
                                                    <li className='flex'><Link href="/Events" className={` ${pathname === "/Events" ? "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 bg-black/10 rounded-2xl w-[250px]  flex gap-3 head3:gap-6" : "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]  flex gap-3 head3:gap-6"} `}><Image src={events} alt="Events icon" className='w-[20px] h-[20px]'/><h3>Events</h3></Link></li>
                                                    <li className='flex'><Link href="/News" className={` ${pathname === "/News" ? "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 bg-black/10 rounded-2xl w-[250px]  flex gap-3 head3:gap-6" : "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]  flex gap-3 head3:gap-6"} `}><Image src={news} alt="News icon" className='w-[20px] h-[20px]'/><h3>News</h3></Link></li>
                                                    <li className='flex'><Link href="/job-position"className={` ${pathname === "/job-position" ? "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 bg-black/10 rounded-2xl w-[250px]  flex gap-3 head3:gap-6" : "font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]  flex gap-3 head3:gap-6"} `}><Image src={job} alt="Job openings icon" className='w-[24px] h-[24px]'/><h3>Job Openings</h3></Link></li>
                                                </div>
                                            </ul>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </Wrapper>
    );
};

export default Header;

// import { useState, useEffect } from 'react';
// import Image from "next/image";
// import logo99 from "@/../../public/IMG-Logo-4.png";
// import Wrapper from "./Wrapper";
// import home from "./assets/home.png";
// import events from "./assets/events.png";
// import job from "./assets/job.png";
// import news from "./assets/news.png";
// import who from "./assets/who.png";
// import contract from "./assets/contract.png";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { AlignLeft } from "lucide-react";
// import Navbar from "./theme-provider";

// const Header = () => {
//     const [activeLink, setActiveLink] = useState("");
//     const pathname = usePathname();

//     useEffect(() => {
//         setActiveLink(pathname);
//     }, [pathname]);

//     let headerColor = 'text-gray-700'; // Default color

//     switch (true) {
//         case pathname.includes("/open_position/Job_ID"):
//         case pathname.includes("/whoWeAre"):
//         case pathname.includes("/benefits"):
//             headerColor = 'text-gray-300';
//             break;
//         default:
//             headerColor = 'text-gray-700';
//     }

//     return (
//         <Wrapper>
//             <header className="relative top-1 z-10">
//                 <div>
//                     <div>
//                         <nav>
//                             <ul className="hidden lg:flex justify-between items-center mx-auto">
//                                 <li>
//                                     <Link className="flex gap-2 items-center" href="/">
//                                         <Image src={logo99} alt="Money logo" className="h-10 w-12 object-cover" />
//                                     </Link>
//                                 </li>
//                                 <div className={`flex gap-7 text-md  font-[500] ${headerColor}`}>
//                                     <li><Link href="/" className={`hover:text-blue-600 link ${activeLink === "/" ? "text-blue-600" : "text-gray-700"}`}>HOME</Link></li>
//                                     <li><Link href="/whoWeAre" className={`hover:text-blue-600  uppercase link ${activeLink === "/whoWeAre" ? "text-blue-600" : "text-gray-700"}`}><Navbar/></Link></li>
//                                     <li><Link href="/Contract" className={`hover:text-blue-600 link ${activeLink === "/Contract" ? "text-blue-600" : "text-gray-700"}`}>CONTRACT VEHICLES</Link></li>
//                                     <li><Link href="/Events" className={`hover:text-blue-600 link ${activeLink === "/Events" ? "text-blue-600" : "text-gray-700"}`}>EVENTS</Link></li>
//                                     <li><Link href="/News" className={`hover:text-blue-600 link ${activeLink === "/News" ? "text-blue-600" : "text-gray-700"}`}>NEWS</Link></li>
//                                     <li><Link href="/job-position" className={`hover:text-blue-600 link ${activeLink === "/job-position" ? "text-blue-600" : "text-gray-700"}`}>JOB OPENINGS</Link></li>
//                                 </div>
//                             </ul>
//                         </nav>
//                     </div>
//                     <div>
//                         <nav>
//                             <ul className="flex lg:hidden justify-between">
//                                 <li>
//                                     <Link className="flex gap-2 items-center" href="/">
//                                         <Image src={logo99} alt="Money logo" className="h-9 w-10 object-cover" />
//                                     </Link>
//                                 </li>
//                                 <Sheet>
//                                     <SheetTrigger><AlignLeft /></SheetTrigger>
//                                     <SheetContent>
//                                         <SheetHeader>
//                                             <ul className="flex-col items-between flex-1">
//                                                 <div className={`flex  text-md  flex-col `}>
//                                                     <Link className="flex gap-2 items-center" href="/">
//                                                         <Image src={logo99} alt="Money logo" className="h-10 w-12 object-cover" />
//                                                         <p className=' text-[12px] about8:text-[14px] head2:text-[16px] text-blue-600'>Info. Management Group, Inc.</p>
//                                                     </Link>
//                                                     <li className='mt-6 '>
//                                                         <Link href="/" className={`font-sans my-1 text-[14px] head3:text-[16px] items-center text-gray-900 px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]  flex gap-3 head3:gap-6 ${activeLink === "/" ? "text-blue-600" : "text-gray-700"}`}><Image src={home} alt="Home Icon" className='w-[20px] h-[20px]'/><h3>Home</h3></Link></li>
//                                                     <li className='flex'><Link href="/whoWeAre" className={`font-sans text-[14px] head3:text-[16px] my-1 items-center text-gray-900 px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]    flex gap-3 head3:gap-6 ${activeLink === "/whoWeAre" ? "text-blue-600" : "text-gray-700"}`}><Image src={who} alt="Home icon" className='w-[25px] h-[25px]'/><h3 className='relative right-[10px]'><Navbar/></h3></Link></li>
//                                                     <li className='flex'><Link href="/Contract" className={`font-sans text-[14px] head3:text-[16px] my-1 items-center text-gray-900 px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]   flex gap-3 head3:gap-6 ${activeLink === "/Contract" ? "text-blue-600" : "text-gray-700"}`}><Image src={contract} alt="Contract vehicles icon" className='w-[20px] h-[20px]'/><h3>Contract Vehicles</h3></Link></li>
//                                                     <li className='flex'><Link href="/Events" className={`font-sans text-[14px] head3:text-[16px] my-1 items-center text-gray-900 px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]    flex gap-3 head3:gap-6 ${activeLink === "/Events" ? "text-blue-600" : "text-gray-700"}`}><Image src={events} alt="Events icon" className='w-[20px] h-[20px]'/><h3>Events</h3></Link></li>
//                                                     <li className='flex'><Link href="/News" className={`font-sans text-[14px] head3:text-[16px] my-1 items-center text-gray-900  px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]   flex gap-3 head3:gap-6 ${activeLink === "/News" ? "text-blue-600" : "text-gray-700"}`}><Image src={news} alt="News icon" className='w-[20px] h-[20px]'/><h3>News</h3></Link></li>
//                                                     <li className='flex'><Link href="/job-position" className={`font-sans text-[14px] head3:text-[16px] my-1 items-center text-gray-900  px-3 py-3 hover:bg-black/10 hover:rounded-2xl w-[250px]   flex gap-3 head3:gap-6 ${activeLink === "/job-position" ? "text-blue-600" : "text-gray-700"}`}><Image src={job} alt="Job openings icon" className='w-[24px] h-[24px]'/><h3>Job Openings</h3></Link></li>
//                                                 </div>
//                                             </ul>
//                                         </SheetHeader>
//                                     </SheetContent>
//                                 </Sheet>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </header>
//         </Wrapper>
//     );
// };

// export default Header;

