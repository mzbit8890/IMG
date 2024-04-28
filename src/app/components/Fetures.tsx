// import Image from "next/image"
import first from "@../../../public/girl-2583442_1280.jpg"
import mission from "@/app/components/assets/mission.png"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"




// let boxes = [
//     {
//         image1: "/vavtpt8.jpg",
//         link: "https://dvsv3.com/"

//     },
//     {
//         image1: "/DoD-SkillBridge22.jpg",
//         link: "https://skillbridge.osd.mil/"
//     },
// ]

// let smallBoxes2 = [
//     {
//         image1: "/HireVet.png",
//         link: "https://www.hirevets.gov/awardees_table?created=2&field_application_type_value%5B2%5D=2&field_application_type_value_1%5B1%5D=1&field_employer_name_value=&field_employer_state_value=47"
//     },
//     {
//         image1: "/HVMPD-gold_2023.png",
//         link: "https://www.hirevets.gov/awardees_table?created=1&field_application_type_value%5B2%5D=2&field_application_type_value_1%5B1%5D=1&field_employer_name_value=&field_employer_state_value=47"
//     },
//     {
//         image1: "/WBJ2022.png",
//         link: "https://dvsv3.com/"
//     },
//     {
//         image1: "/Wbg.png",
//         link: "https://dvsv3.com/"
//     },
//     {
//         image1: "/2023.png",
//         link: "https://vetsindexes.com/award-results-2023/"
//     },

// ]


// // // const Fetures = () => {
// // //   return (

// // //     <div className='pt-24 bg-blue-50/80 h-screen max-w-screen-2xl max-auto px-9'>
// // //     <div className='text-5xl font-bold'>
// // //   Fetures Overview
// // //     </div>
// // //  <div className='flex justify-betweenjustify-self-start'>
// // //  <p className=' text-gray-900 mt-4'>
// // //     IMG empowers businesses to optimize their data assets and drive success in today's competitive landscape
// // //     </p>



// // // {b
// // //     boxes.map((item,i) => {
// // //         return (
// // //             <div className='border border-black rounded-md  justify-self-end'>
// // //                 <div>{item.image1}</div>
// // //                 <div>{item.image1}</div>
// // //                 <div>{item.image1}</div>
// // //             </div>
// // //         )
// // //     })
// // //  }
// // //   </div>
// // // </div>


// // //   )
// // // }

// // // export default Fetures



// // import React from 'react';
// // import Link from "next/link";
// // import Boxes from "./Boxes";

// // const TextAndBoxesSection = () => {
// //     return (
// //         <div className="bg-blue-50/80  flex flex-col lg:flex-row max-w-screen-2xl mx-auto lg:space-x-4 ">
// //             {/* Text content */}
// //             <div className="lg:w-1/2  mt-24 ">
// //                 <div className="pl-16">
// //                     <h2 className="text-6xl font-semibold text-gray-800 mb-4">Features Overview</h2>
// //                     <p className="text-gray-600 text-left text-balance text-lg">IMG empowers businesses to optimize their data assets and drive success in today's competitive landscape</p>
// //                 </div>
// //                 <div >
// //                     <Image src="/girl-2583442_1280.jpg" alt="" className="mt-10" width={300} height={300} />
// //                 </div>
// //             </div>

// //             {/* Boxes */}
// //            <div className="sticky top-0 z-10">
// //            <Boxes />
// //            </div>
// //         </div>

// //     );
// // };

// // export default TextAndBoxesSection;

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { ArrowRight } from "lucide-react"

import image1 from "@/../public/Wbg.png"
import image2 from "@/../public/HireVet.png"
import image3 from "@/../public/HVMPD-gold_2023.png"
import image4 from "@/../public/WBJ2022.png"
import image5 from "@/../public/2023.png"

let smallBoxes4 = {
    heading4: "CyberSecurity Companies",
    subHeading4: "Information Management Group Earns Place on Washington Business Journal's Cybersecurity Companies List",
    image4: image1,
    link4: "/News"
}

let smallBoxes1 = [
    {
        heading: "",
        subHeading: "",
        image1: image2,
        link: "https://www.hirevets.gov/awardees_table?created=2&field_application_type_value%5B2%5D=2&field_application_type_value_1%5B1%5D=1&field_employer_name_value=&field_employer_state_value=47"
    },
    {
        heading: "",
        subHeading: "",
        image1: image3,
        link: "https://www.hirevets.gov/awardees_table?created=1&field_application_type_value%5B2%5D=2&field_application_type_value_1%5B1%5D=1&field_employer_name_value=&field_employer_state_value=47"
    },
    {
        heading: "",
        subHeading: "",
        image1: image4,
        link: "https://dvsv3.com/"
    },
    {
        heading: "CyberSecurity Companies",
        subHeading: "Information Management Group Earns Place on Washington Business Journal's Cybersecurity Companies List",
        image1: image1,
        link: "https://dvsv3.com/"
    },
    {
        heading: "",
        subHeading: "",
        image1: image5,
        link: "https://vetsindexes.com/award-results-2023/"
    },

]

import CarouselText3, { CarouselText, CarouselText2, CarouselText4, CarouselText5, CarouselText6, CarouselText7, CarouselText8 } from "./CarouselText45"
import { MotionDiv } from "./MotionImg"

const TextAndBoxesSection = () => {
    return (
//         //         <div className="bg-blue-50/80 lg:flex max-w-screen-2xl sm:mx-auto ">
//         //             {/* Left Side (Fixed) */}
//         //             <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen ">
//         //                 <div className="pt-16 lg:mt-16 md:pl-16">
//         //                     <h2 className="text-4xl sm:text-[55px] xl:text-6xl text-center lg:text-left text-balance font-semibold text-gray-800 mb-4">Features Overview</h2>
//         //                     <p className="text-gray-600 text-center lg:text-left text-balance sm:text-lg">IMG empowers businesses to optimize their data assets and drive success in today's competitive landscape</p>
//         //                 </div>
//         //                 <div className='justify-self-center flex justify-center lg:justify-start'>
//         //                     <Image src={first} alt="" className="justify-self-center mt-10 h-[554px] w-[454px] lg:h-96 lg:w-72 object-cover"/>
//         //                 </div>
//         //             </div>

//         //             {/* Right Side (Scrollable) */}
//         //             <div className="xl:w-1/2 xl:overflow-y-auto justify-self-center">
//         //             <div className="pt-16 flex flex-col lg:mt-20 items-center ">
//         // <div>
//         //     {
//         //         boxes.map((item, i) => {
//         //             return (
//         //                 <div className=" p-4 flex-col ">
//         //                     <div className="border border-black/20 hover:shadow-2xl hover:border-white hover:bg-white w-full lg:w-[560px] h-40 mb-4 flex justify-center items-center">
//         //                         <Link href={item.link}>
//         //                             <Image src={item.image1} alt="" className="h-[120px] sm:h-[150px] object-fill " width={600} height={300} />
//         //                         </Link>
//         //                     </div>

//         //                 </div>

//         //             )
//         //         })
//         //     }
//         // </div>
//         // <div className="lg:w-[597px] grid grid-cols-2 ">
//         //     {
//         //         smallBoxes1.slice(0, 6).map((item, i) => {
//         //             return (
//         //                 <div>
//         //                     <div className="flex flex-row p-4">
//         //                         <div className="flex gap-7">
//         //                             <div className="border  border-black/20 hover:shadow-2xl hover:bg-white hover:border-white lg:w-[260px] h-40 mb-4 flex justify-center items-center">
//         //                                 <Link href={item.link}>
//         //                                     <Image src={item?.image1} alt="" className="h-[150px] sm:h-[160px] object-fill" width={170} height={300} />
//         //                                 </Link>
//         //                             </div>

//         //                         </div>
//         //                     </div>
//         //                 </div>

//         //             )
//         //         })
//         //     }
//         // </div>
//         // </div>
//         //             </div>
//         //         </div>


        <div className="bg-blue-50/80 flex flex-col items-center pb-8 lg:pb-5">

            <div className="pt-[70px] lg:pt-[118px] max-w-screen-2xl mx-auto px-3 about8:px-6 xl:px-9 ">
                <div className="about8:px-4 home4:px-11">
                    <h2 className="text-[22px]/[1.24] head3:text-[30px]/[1.24] feat11:text-[35px] about8:text-[40px] feat3:text-[47px] feat10:text-[56px] lg:text-6xl text-center text-blue-600 font-bold">Features <span className="text-blue-600">Over</span><span className="text-yellow-500">view</span></h2>
                    <p className="text-gray-500 text-center mt-3 text-balance mb-10 text-[13px] feat10:text-[15px] lg:text-[17px]">IMG empowers businesses to optimize their data assets and drive success in today&apos;s competitive landscape
                        Dive into a world of limitless potential with our feature set, meticulously crafted to cater to your every need.
                    </p>
                    {/* <Carousel className="w-full max-w-3xl"> */}
                    <div className="flex justify-center ">
                        <Carousel className="w-full max-w-[10rem] feat12:max-w-[11rem] feat7:max-w-[12rem] feat6:max-w-[13rem] feat5:max-w-[15rem] feat4:max-w-[19rem] feat3:max-w-[27rem] about7:max-w-xl mdds:max-w-2xl ab:max-w-4xl jj:max-w-6xl ">
                            <MotionDiv initial={{
                        opacity: 0,
                        y: -100
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}  viewport={{ once: true }} > <CarouselContent >
                           
                                <CarouselItem >
                                    <CarouselText />
                                </CarouselItem>
                                <CarouselItem >
                                    
                                    <CarouselText2 />
                                </CarouselItem>
                                <CarouselItem><CarouselText4 /></CarouselItem>
                                <CarouselItem><CarouselText5 /></CarouselItem>
                                <CarouselItem><CarouselText6 /></CarouselItem>
                                <CarouselItem><CarouselText7 /></CarouselItem>
                                <CarouselItem><CarouselText8 /></CarouselItem>
                              
                            </CarouselContent>  </MotionDiv>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>


                
                    </div>
                  




                </div>

            </div>
        </div>

    );
};

export default TextAndBoxesSection;










































// Fetures.tsx

// import React from 'react';
// import Link from "next/link";
// import Image from 'next/image';
// import { ArrowRight } from "lucide-react"

// import image1 from "@/../public/Wbg.png"
// import image2 from "@/../public/HireVet.png"
// import image3 from "@/../public/HVMPD-gold_2023.png"
// import image4 from "@/../public/WBJ2022.png"
// import image5 from "@/../public/2023.png"

// let smallBoxes4 = {
//     heading4: "CyberSecurity Companies",
//     subHeading4: "Information Management Group Earns Place on Washington Business Journal's Cybersecurity Companies List",
//     image4: image1,
//     link4: "/News"
// }

// let smallBoxes1 = [
//     {
//         heading: "",
//         subHeading: "",
//         image1: image2,
//         link: "https://www.hirevets.gov/awardees_table?created=2&field_application_type_value%5B2%5D=2&field_application_type_value_1%5B1%5D=1&field_employer_name_value=&field_employer_state_value=47"
//     },
//     {
//         heading: "",
//         subHeading: "",
//         image1: image3,
//         link: "https://www.hirevets.gov/awardees_table?created=1&field_application_type_value%5B2%5D=2&field_application_type_value_1%5B1%5D=1&field_employer_name_value=&field_employer_state_value=47"
//     },
//     {
//         heading: "",
//         subHeading: "",
//         image1: image4,
//         link: "https://dvsv3.com/"
//     },
//     {
//         heading: "CyberSecurity Companies",
//         subHeading: "Information Management Group Earns Place on Washington Business Journal's Cybersecurity Companies List",
//         image1: image1,
//         link: "https://dvsv3.com/"
//     },
//     {
//         heading: "",
//         subHeading: "",
//         image1: image5,
//         link: "https://vetsindexes.com/award-results-2023/"
//     },
// ];

// import CarouselText3, { CarouselText, CarouselText2, CarouselText4, CarouselText5, CarouselText6, CarouselText7, CarouselText8 } from "./carouselText";
// import { MotionDiv } from "./MotionImg";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// const TextAndBoxesSection = () => {
//     return (
//         <div className="bg-blue-50/80 flex flex-col items-center pb-8 lg:pb-5">

//             <div className="pt-[70px] lg:pt-[118px] max-w-screen-2xl mx-auto px-3 about8:px-6 xl:px-9 ">
//                 <div className="about8:px-4 home4:px-11">
//                     <h2 className="text-[22px]/[1.24] head3:text-[30px]/[1.24] feat11:text-[35px] about8:text-[40px] feat3:text-[47px] feat10:text-[56px] lg:text-6xl text-center text-blue-600 font-bold">Features <span className="text-blue-600">Over</span><span className="text-yellow-500">view</span></h2>
//                     <p className="text-gray-500 text-center mt-3 text-balance mb-10 text-[13px] feat10:text-[15px] lg:text-[17px]">IMG empowers businesses to optimize their data assets and drive success in today&apos;s competitive landscape
//                         Dive into a world of limitless potential with our feature set, meticulously crafted to cater to your every need.
//                     </p>
//                     <div className="flex justify-center ">
//                         <Carousel className="w-full max-w-[10rem] feat12:max-w-[11rem] feat7:max-w-[12rem] feat6:max-w-[13rem] feat5:max-w-[15rem] feat4:max-w-[19rem] feat3:max-w-[27rem] about7:max-w-xl mdds:max-w-2xl ab:max-w-4xl jj:max-w-6xl ">
//                             {/* <MotionDiv initial={{
//                         opacity: 0,
//                         y: -100
//                     }}
//                     transition={{ duration: 1.2 }}
//                     whileInView={{ opacity: 1, y: 0 }}  viewport={{ once: true }} >  */}
//                            <CarouselContent >
//                                 <CarouselItem >
//                                     <CarouselText />
//                                 </CarouselItem>
//                                 <CarouselItem >
//                                     <CarouselText />
//                                 </CarouselItem>
//                                 <CarouselItem><CarouselText4 /></CarouselItem>
//                                 <CarouselItem><CarouselText5 /></CarouselItem>
//                                 <CarouselItem><CarouselText6 /></CarouselItem>
//                                 <CarouselItem><CarouselText7 /></CarouselItem>
//                                 <CarouselItem><CarouselText8 /></CarouselItem>
                              
//                             </CarouselContent> 
//                              {/* </MotionDiv> */}
//                             <CarouselPrevious />
                          
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TextAndBoxesSection;
