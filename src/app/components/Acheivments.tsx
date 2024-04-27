import Image from "next/image"
import Wrapper from "./Wrapper"
import achieve1 from "@/app/components/assets/navy.png"
import achieve2 from "@/app/components/assets/energy.png"
import achieve3 from "@/app/components/assets/virginaBest.png"
import achieve4 from "@/app/components/assets/intele.png"
import achieve5 from "@/app/components/assets/agency.png"
import achieve6 from "@/app/components/assets/op.png"
import achieve7 from "@/app/components/assets/security.png"
import achieve8 from "@/app/components/assets/win.png"
import achieve9 from "@/app/components/assets/shipp.png"
import achieve10 from "@/app/components/assets/white.png"
import Footer from "./Footer"
import { MotionDiv } from "./MotionImg"

// import achieve2 from "@/../public/achive2.png"




let dataItem1= {
    image1: achieve1,
    image2: achieve2,
    image3: achieve9,
    headingSpan: "Department of Energy",
    heading: "/Department of Navy",
    paragraph: "Information Management Group, Inc. (IMG) has been managing and executing various IT support projects as part of a joint program involving the Department of Navy and Department of Energy for two decades. We are currently operating under a five (5) year effort that requires IMG to be responsible for successfully accomplishing various IT support activities at eight (8) unique sites located across the United States."
  }
  // {
  //   image: "/achive2.png",
  //   headingSpan: "Lorem ipsum",
  //   heading: "dolor sit amet consectetur",
  //   paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam delectus consectetur dolores? Ullam, facere. Laborum officiis animi illo nostrum quia quidem inventore fugiat, laboriosam consequatur nihil, sequi ipsam labore."
  // },
 let dataItem2 = {
    image: achieve6,
    image2: achieve10,
    headingSpan: "Seaport-e Task Order awarded to IMG to support MARCORSYSCOM'S",
    heading: "production of PM AMMO Ammunition Quarterly Magazine.",
    paragraph: "IMG was selected among over 20 competitors to support PM AMMO Quarterly. Support includes the editing, technical writing, graphics design, and document/print production for the Marine Corps' only periodical representation of Class V (W) ground ammunition items and will provide the Marine Corps with necessary information in matters related to conventional ammunition."
  }
  let dataItem3 = {
    image: achieve3,
    image2: achieve8,
    headingSpan: "IMG was awarded one of the 2014",
    heading: "'Best Places to Work in Virginia'",
    paragraph: "IMG was named as one of the 2014 'Best Places to Work in Virginia' by Virginia Business. This award continues to demonstrate IMG's commitment to the professional development and overall well-being of its employees, and is the fourth award IMG has received in recognition of its excellent employee relations. IMG was recognized in 2011 and 2013 as one of the 'Best Places to Work in Virginia,' and was named one of the Washington Business Journal's 'Best Places to Work' in 2009."
  }
  let dataItem4 = {

    image2: achieve7,
    headingSpan: "IMG was awarded a prime ID/IQ Contract",
    heading: "for Integrated Cyber Operations.",
    paragraph: "Supporting SSC Atlantic and its customers. The scope of the work covers the entire spectrum of non-inherently governmental services and solutions (equipment and services) associated with the full system lifecycle support including research, development, test, evaluation, production and fielding of sustainable, secure, survivable, and interoperable Command, Control, Communications, Computers, Combat Systems, Intelligence, Surveillance, Reconnaissance (C5ISR), Information Operations, Enterprise Information Services (EIS) and Space capabilities. Although not limited beyond the description above, this contract has a primary focus on mission capabilities within the Integrated Cyber Operations (ICO) Portfolio."
  }
  let dataItem5 = {
    image1: achieve4,
    image2: achieve5,
    headingSpan: "Defense Intelligence",
    heading: "Agency Support",
    paragraph: "Information Management Group, Inc. has proudly supported the Defense Intelligence Agency since 2004.In our 9 years of support, we have provided full life cycle IT support services to multiple OCONUS and CONUS locations to include hazardous duty zones.Please click here to see examples of our work."
  }


const Acheivments = () => {
  return (
    //     <Wrapper>
    //         <div className="sm:px-9">
    //             <h2 className="text-4xl lg:text-6xl font-[630] text-gray-800">Our Achievements</h2>
    //             <div className="mt-12">

    //              {/* <div className="grid grid-cols-2 ">
    //               {
    //                 data.map((item, i) => {
    //                   return(
    //                     <div className="col-span-2">
    //                       <div className="flex "> 
    //                     <div className=" w-[534px] hover:scale-110 duration-300 h-[314px]">
    //                     <Image src={item.image.achieve1} alt="" className="w-[534px]  object-cover h-[314px]"/>
    //                     </div>
    //                    <div className=" items-center">
    //                    <h3 className="text-[44px]/[1.20] font-semibold text-gray-800"><span className="text-blue-600">{item.headingSpan}</span> {item.heading}</h3>
    //                     <p className="text-lg text-gray-600">{item.paragraph}.</p>

    //                 </div></div>
    //                     </div>
    //                   )
    //                 })
    //               } */}

    // {/*               

    //              </div> */}

    // <div className="grid grid-cols-2 gap-16">
    //   {data.map((item, i) => (
    //     <div key={i} className="col-span-2 grid grid-cols-2 gap-8   relative"> {/* Ensure each box is wrapped in a div with grid layout */}
    //       <div className="col-span-1 hover:scale-110 duration-300 relative d:w-[534px]  d:h-[314px]">
    //         {/*  w-[134px] sm:w-[270px] md:w-[334px]  lg:w-[434px] ll:w-full xl: */}
    //         {/* w-[534px] h-[314px] */}

    //        <Image src={item.image} alt="" className=" object-center object-cover" layout="fill" objectFit="cover" objectPosition=""/>

    //       </div>
    //       <div className="col-span-1 flex items-start lg:items-center py-5 ">
    //         <div>
    //           <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl/[1.20] font-semibold text-gray-800 pb-5 ">
    //             <span className="text-blue-600">{item.headingSpan}</span> {item.heading}
    //           </h3>
    //           <p className="line-clamp-2 text:sm sm:text-normal sm:line-clamp-3 lg:line-clamp-6 ll:text-[16px] xl:text-lg text-gray-600 text-balance">{item.paragraph}</p>
    //         </div>
    //       </div>
    //     </div>



    //   ))}
    // </div>


    //             </div>
    //         </div>



    //         <div className="h-80 w-full relative overflow-hidden">
    //   <div className="absolute inset-0 w-full h-full bg-blue-500 transform -skew-y-0"></div>
    //   <div className="absolute inset-0 w-full h-full bg-blue-600 transform -skew-y-12"></div>
    //   <div className="absolute inset-0 w-full h-full bg-blue-700 transform -skew-y-12"></div>
    //   <div className="absolute inset-0 w-full h-full bg-blue-800 transform -skew-y-12"></div>
    //   <div className="text-7xl">
    //     hello

    //   </div>
    // </div>

    //     </Wrapper>
    <>
      <div className="max-w-screen-2xl  lg:pt-[118px] mb-12 mx-auto px-3 about8:px-6 xl:px-9">
        <h2 className="text-[22px]/[1.24] about8:px-4 home4:px-11 head3:text-[30px]/[1.24] feat11:text-[35px] about8:text-[40px] feat3:text-[47px] feat10:text-[56px] lg:text-6xl text-center text-blue-600 font-bold">Our <span className="text-gray-700">Acheivements</span></h2>
      </div>

      <div className="lg:pl-80 ">
        <div className="h-[338px] achieve7:h-[358px] achieve6:h-[468px] max-w-screen-2xl mx-auto pr-4 about8:pr-6 xl:pr-9 bg-blue-900  flex  items-center">

          < MotionDiv
             initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="relative nkm:flex hidden lg:right-64 justify-center items-center h-60   achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve5:h-[468px] achieve6: sm:w-[668px] ">
            <div>
              <Image src={dataItem5.image2} alt="achieve2" className="  h-60  achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve6:w-[668px] grayscale brightness-90  flex justify-center items-center object-cover" />
            </div>

            {/* <Image src={achieve3} alt="achieve2" className="h-[368px] brightness-90 w-[568px] flex justify-center items-center object-cover"/> */}
            <div className="flex absolute justify-center w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:w-[230px] achieve6:h-[230px]  items-center">
              <Image src={dataItem5.image1} alt={dataItem5.headingSpan} className="w-[80px] h-[80px] achieve9:w-[100px] achieve9:h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:h-[180px] achieve6:w-[180px] achieve2:w-[230px] achieve2:h-[230px] object-cover" />

              {/* <Image src={achieve2} alt="achieve2" className=" w-[230px] h-[230px] object-cover"/> */}
            </div>



          </MotionDiv>
          < div
              className="relative  nkm:hidden flex  lg:right-64 justify-center items-center h-60   achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve5:h-[468px] achieve6: sm:w-[668px] ">
            <div>
              <Image src={dataItem5.image2} alt="achieve2" className="  h-60  achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve6:w-[668px] grayscale brightness-90  flex justify-center items-center object-cover" />
            </div>

            {/* <Image src={achieve3} alt="achieve2" className="h-[368px] brightness-90 w-[568px] flex justify-center items-center object-cover"/> */}
            <div className="flex absolute justify-center w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:w-[230px] achieve6:h-[230px]  items-center">
              <Image src={dataItem5.image1} alt={dataItem5.headingSpan} className="w-[80px] h-[80px] achieve9:w-[100px] achieve9:h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:h-[180px] achieve6:w-[180px] achieve2:w-[230px] achieve2:h-[230px] object-cover" />

              {/* <Image src={achieve2} alt="achieve2" className=" w-[230px] h-[230px] object-cover"/> */}
            </div>



          </div>
          <div className="lg:relative pl-2 achieve10:pl-4 achieve8:pl-5 lg:pl-16 achieve8:pr-3 achieve6:pr-6 xl:pr-9 achieve1:pl-20 lg:w-[344px] achieve2:w-[444px] achieve1:w-[544px] lg:right-72">
            <h2 className="w-[155px] achieve12:w-[170px] achieve11:w-[190px] achieve10:w-[230px] achieve9:w-[290px] achieve8:w-[320px] achieve7:w-[380px] achieve5:w-[428px] achieve4:w-[484px] lg:w-[554px] achieve2:w-[644px] achieve1:w-[744px] font-bold text-[12px]/[1.22] achieve10:text-[14px]/[1.22] achieve9:text-[17.3px]/[1.22] achieve8:text-[18px]/[1.22] achieve7:text-[22px]/[1.22] achieve6:text-[28px]/[1.22] achieve5:text-[33px]/[1.22] achieve4:text-[36px]/[1.20] achieve2:text-[41px]/[1.20] achieve1:text-5xl text-blue-500"><span className="text-yellow-500">{dataItem5.headingSpan} </span>{dataItem5.heading}</h2>
            <p className="w-[155px] achieve12:w-[170px] achieve11:w-[190px] achieve10:w-[230px] achieve9:w-[290px] text-gray-100 achieve8:w-[320px] text-[7.8px]/[1.35] achieve10:text-[9.5px]/[1.35] achieve9:text-[10.7px]/[1.35] achieve8:text-[11.3px]/[1.35] achieve7:text-[12px]/[1.35] achieve6:text-[13px] achieve4:text-[14px] achieve7:w-[380px] achieve5:w-[428px] achieve4:w-[484px] achieve1:text-[16px] mt-2 achieve7:mt-4 achieve1:w-[744px] lg:w-[545px] achieve2:w-[644px]">{dataItem5.paragraph}</p>
          </div>
        </div>


      </div>

      {/* second box */}
      <div className="lg:pl-80 mt-6 about8:mt-10 sm:mt-16 lg:mt-20">
        <div className="h-[338px] achieve7:h-[358px] achieve6:h-[468px] max-w-screen-2xl mx-auto pr-4 about8:pr-6 xl:pr-9 bg-blue-900  flex  items-center">
          <MotionDiv
             initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}  className="relative  nkm:flex hidden lg:right-64 justify-center items-center h-60   achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve5:h-[468px] achieve6: sm:w-[668px] ">
            <div>
              <Image src={dataItem3.image2} alt="achieve2" className="  h-60  achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve6:w-[668px]  brightness-3  flex justify-center items-center object-cover" />
            </div>
            {/* <Image src={achieve3} alt="achieve2" className="h-[368px] brightness-90 w-[568px] flex justify-center items-center object-cover"/> */}
            <div className="flex absolute justify-center w-[100px] h-[100px]   sm:w-[130px] sm:h-[130px]  achieve6:w-[230px] achieve6:h-[230px]  items-center">
              <Image src={dataItem3.image} alt={dataItem4.headingSpan} className="w-[80px] border-2 achieve6:border-8 border-red-800 rounded-full bg-white h-[80px] achieve9:w-[100px] achieve9:h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:h-[180px] achieve6:w-[180px] achieve2:w-[230px] achieve2:h-[230px] object-cover" />
              {/* <Image src={achieve2} alt="achieve2" className=" w-[230px] h-[230px] object-cover"/> */}
            </div>
          </MotionDiv>
          <div
            className="relative   nkm:hidden flex  lg:right-64 justify-center items-center h-60   achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve5:h-[468px] achieve6: sm:w-[668px] ">
            <div>
              <Image src={dataItem3.image2} alt="achieve2" className="  h-60  achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve6:w-[668px]  brightness-3  flex justify-center items-center object-cover" />
            </div>
            {/* <Image src={achieve3} alt="achieve2" className="h-[368px] brightness-90 w-[568px] flex justify-center items-center object-cover"/> */}
            <div className="flex absolute justify-center w-[100px] h-[100px]   sm:w-[130px] sm:h-[130px]  achieve6:w-[230px] achieve6:h-[230px]  items-center">
              <Image src={dataItem3.image} alt={dataItem4.headingSpan} className="w-[80px] border-2 achieve6:border-8 border-red-800 rounded-full bg-white h-[80px] achieve9:w-[100px] achieve9:h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:h-[180px] achieve6:w-[180px] achieve2:w-[230px] achieve2:h-[230px] object-cover" />
              {/* <Image src={achieve2} alt="achieve2" className=" w-[230px] h-[230px] object-cover"/> */}
            </div>
          </div>
          <div className="lg:relative pl-2 achieve10:pl-4 achieve8:pl-5 lg:pl-16 achieve8:pr-3 achieve6:pr-6 xl:pr-9 achieve1:pl-20 lg:w-[344px] achieve2:w-[444px] achieve1:w-[544px] lg:right-72">
            <h2 className="w-[155px] achieve12:w-[170px] achieve11:w-[190px] achieve10:w-[230px] achieve9:w-[290px] achieve8:w-[320px] achieve7:w-[380px] achieve5:w-[428px] achieve4:w-[484px] lg:w-[554px] achieve2:w-[644px] achieve1:w-[744px] font-bold text-[12px]/[1.22] achieve10:text-[14px]/[1.22] achieve9:text-[17.3px]/[1.22] achieve8:text-[18px]/[1.22] achieve7:text-[22px]/[1.22] achieve6:text-[28px]/[1.22] achieve5:text-[33px]/[1.22] achieve4:text-[36px]/[1.20] achieve2:text-[41px]/[1.20] achieve1:text-5xl text-blue-500"><span className="text-yellow-500">{dataItem4.headingSpan} </span>{dataItem4.heading}</h2>
            <p className="w-[155px] achieve12:w-[170px] achieve11:w-[190px] achieve10:w-[230px] achieve9:w-[290px] text-gray-100 achieve8:w-[320px] text-[7.8px]/[1.35] achieve10:text-[9.5px]/[1.35] achieve9:text-[10.7px]/[1.35] achieve8:text-[11.3px]/[1.35] achieve7:text-[12px]/[1.35] achieve6:text-[13px] achieve4:text-[14px] achieve7:w-[380px] achieve5:w-[428px] achieve4:w-[484px] achieve1:text-[16px] mt-2 achieve7:mt-4 achieve1:w-[744px] lg:w-[545px] achieve2:w-[644px]">{dataItem4.paragraph}</p>
          </div>
        </div>
      </div>

      {/* third box */}
      <div className="lg:pl-80 mt-6 about8:mt-10 sm:mt-16 lg:mt-20">
        <div className="h-[338px] achieve7:h-[358px] achieve6:h-[468px] max-w-screen-2xl mx-auto pr-4 about8:pr-6 xl:pr-9 bg-blue-900  flex  items-center">
          <MotionDiv
             initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="relative  nkm:flex hidden lg:right-64 justify-center items-center h-60   achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve5:h-[468px] achieve6: sm:w-[668px] ">
            <div>
              <Image src={dataItem4.image2} alt={dataItem4.headingSpan} className="  h-60  achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve6:w-[668px]  brightness-3  flex justify-center items-center object-cover" />
            </div>
            {/* <Image src={achieve3} alt="achieve2" className="h-[368px] brightness-90 w-[568px] flex justify-center items-center object-cover"/> */}
            <div className="flex absolute justify-center w-[220px] h-[100px] sm:w-[530px] sm:h-[130px]  achieve6:w-[530px] achieve6:h-[230px]  items-center">
              <h2 className="w-[220px] achieve9:w-[520px] achieve9: sm:w-[530px] text-[7px] achieve14:text-[8px] achieve13:text-[9px] feat4:text-[11px] sm:text-[16px]  achieve6:text-[25px] achieve6:w-[530px]  achieve1:text-right  text-center  achieve2:w-[530px] text-white achieve1:text-4xl px-2  achieve2:text-3xl font-bold">IMG was awarded<br/>Prime SPAWAR Integrated<br/>Cyber Operations</h2>
              {/* <Image src={achieve2} alt="achieve2" className=" w-[230px] h-[230px] object-cover"/> */}
            </div>
          </MotionDiv>
          <div
             className="relative   nkm:hidden flex  lg:right-64 justify-center items-center h-60   achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve5:h-[468px] achieve6: sm:w-[668px] ">
            <div>
              <Image src={dataItem4.image2} alt={dataItem4.headingSpan} className="  h-60  achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve6:w-[668px]  brightness-3  flex justify-center items-center object-cover" />
            </div>
            {/* <Image src={achieve3} alt="achieve2" className="h-[368px] brightness-90 w-[568px] flex justify-center items-center object-cover"/> */}
            <div className="flex absolute justify-center w-[220px] h-[100px] sm:w-[530px] sm:h-[130px]  achieve6:w-[530px] achieve6:h-[230px]  items-center">
              <h2 className="w-[220px] achieve9:w-[520px] achieve9: sm:w-[530px] text-[7px] achieve14:text-[8px] achieve13:text-[9px] feat4:text-[11px] sm:text-[16px]  achieve6:text-[25px] achieve6:w-[530px]  achieve1:text-right  text-center  achieve2:w-[530px] text-white achieve1:text-4xl px-2  achieve2:text-3xl font-bold">IMG was awarded<br/>Prime SPAWAR Integrated<br/>Cyber Operations</h2>
              {/* <Image src={achieve2} alt="achieve2" className=" w-[230px] h-[230px] object-cover"/> */}
            </div>
          </div>
          <div className="lg:relative pl-2 achieve10:pl-4 achieve8:pl-5 lg:pl-16 achieve8:pr-3 achieve6:pr-6 xl:pr-9 achieve1:pl-20 lg:w-[344px] achieve2:w-[444px] achieve1:w-[544px] lg:right-72">
            <h2 className="w-[155px] achieve12:w-[170px] achieve11:w-[190px] achieve10:w-[230px] achieve9:w-[290px] achieve8:w-[320px] achieve7:w-[380px] achieve5:w-[428px] achieve4:w-[484px] lg:w-[554px] achieve2:w-[644px] achieve1:w-[744px] font-bold text-[12px]/[1.22] achieve10:text-[14px]/[1.22] achieve9:text-[17.3px]/[1.22] achieve8:text-[18px]/[1.22] achieve7:text-[22px]/[1.22] achieve6:text-[28px]/[1.22] achieve5:text-[33px]/[1.22] achieve4:text-[36px]/[1.20] achieve2:text-[41px]/[1.20] achieve1:text-5xl text-blue-500"><span className="text-yellow-500">{dataItem4.headingSpan}</span> {dataItem4.heading}</h2>
            <p className="w-[155px] achieve12:w-[170px] achieve11:w-[190px] achieve10:w-[230px] achieve9:w-[290px] text-gray-100 achieve8:w-[320px] text-[7.8px]/[1.35] achieve10:text-[9.5px]/[1.35] achieve9:text-[10.7px]/[1.35] achieve8:text-[11.3px]/[1.35] achieve7:text-[12px]/[1.35] achieve6:text-[13px] achieve4:text-[14px] achieve7:w-[380px] achieve5:w-[428px] achieve4:w-[484px] achieve1:text-[16px] mt-2 achieve7:mt-4 achieve1:w-[744px] lg:w-[545px] achieve2:w-[644px]">{dataItem4.paragraph}</p>
          </div>
        </div>
      </div>

      {/* fourth box */}
      <div className="lg:pl-80 mt-6 about8:mt-10 sm:mt-16 lg:mt-20">
        <div className="h-[338px] achieve7:h-[358px] achieve6:h-[468px] max-w-screen-2xl mx-auto pr-4 about8:pr-6 xl:pr-9 bg-blue-900  flex  items-center">
          <MotionDiv
             initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}  className="relative  nkm:flex hidden lg:right-64 justify-center items-center h-60   achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve5:h-[468px] achieve6: sm:w-[668px] ">
            <div>
              <Image src={dataItem1.image3} alt={dataItem1.headingSpan} className="  h-60  achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve6:w-[668px] grayscale brightness-90  flex justify-center items-center object-cover" />
            </div>
            {/* <Image src={achieve3} alt="achieve2" className="h-[368px] brightness-90 w-[568px] flex justify-center items-center object-cover"/> */}
            <div className="flex achieve18:flex-row flex-col gap-2 absolute justify-center w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:w-[230px] achieve6:h-[230px]  items-center">
              
              <Image src={dataItem1.image1} alt={dataItem1.headingSpan} className="w-[80px] h-[80px] achieve18:w-[100px] achieve18:h-[100px] achieve17:w-[130px] achieve17:h-[130px]  achieve16:h-[180px] achieve16:w-[180px] achieve15:w-[213px] achieve15:h-[213px] object-cover" />
              <Image src={dataItem1.image2} alt={dataItem1.headingSpan} className="w-[80px] h-[80px] achieve18:w-[100px] achieve18:h-[100px] achieve17:w-[130px] achieve17:h-[130px]  achieve16:h-[180px] achieve16:w-[180px] achieve15:w-[213px] achieve15:h-[213px] object-cover" />
              {/* <Image src={achieve2} alt="achieve2" className=" w-[230px] h-[230px] object-cover"/> */}
            </div>
          </MotionDiv>
          <div
             className="relative  nkm:hidden flex lg:right-64 justify-center items-center h-60   achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve5:h-[468px] achieve6: sm:w-[668px] ">
            <div>
              <Image src={dataItem1.image3} alt={dataItem1.headingSpan} className="  h-60  achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve6:w-[668px] grayscale brightness-90  flex justify-center items-center object-cover" />
            </div>
            {/* <Image src={achieve3} alt="achieve2" className="h-[368px] brightness-90 w-[568px] flex justify-center items-center object-cover"/> */}
            <div className="flex achieve18:flex-row flex-col gap-2 absolute justify-center w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:w-[230px] achieve6:h-[230px]  items-center">
              
              <Image src={dataItem1.image1} alt={dataItem1.headingSpan} className="w-[80px] h-[80px] achieve18:w-[100px] achieve18:h-[100px] achieve17:w-[130px] achieve17:h-[130px]  achieve16:h-[180px] achieve16:w-[180px] achieve15:w-[213px] achieve15:h-[213px] object-cover" />
              <Image src={dataItem1.image2} alt={dataItem1.headingSpan} className="w-[80px] h-[80px] achieve18:w-[100px] achieve18:h-[100px] achieve17:w-[130px] achieve17:h-[130px]  achieve16:h-[180px] achieve16:w-[180px] achieve15:w-[213px] achieve15:h-[213px] object-cover" />
              {/* <Image src={achieve2} alt="achieve2" className=" w-[230px] h-[230px] object-cover"/> */}
            </div>
          </div>
          <div className="lg:relative pl-2 achieve10:pl-4 achieve8:pl-5 lg:pl-16 achieve8:pr-3 achieve6:pr-6 xl:pr-9 achieve1:pl-20 lg:w-[344px] achieve2:w-[444px] achieve1:w-[544px] lg:right-72">
            <h2 className="w-[155px] achieve12:w-[170px] achieve11:w-[190px] achieve10:w-[230px] achieve9:w-[290px] achieve8:w-[320px] achieve7:w-[380px] achieve5:w-[428px] achieve4:w-[484px] lg:w-[554px] achieve2:w-[644px] achieve1:w-[744px] font-bold text-[12px]/[1.22] achieve10:text-[14px]/[1.22] achieve9:text-[17.3px]/[1.22] achieve8:text-[18px]/[1.22] achieve7:text-[22px]/[1.22] achieve6:text-[28px]/[1.22] achieve5:text-[33px]/[1.22] achieve4:text-[36px]/[1.20] achieve2:text-[41px]/[1.20] achieve1:text-5xl text-blue-500"><span className="text-yellow-500">{dataItem1.headingSpan}</span> {dataItem1.heading}</h2>
            <p className="w-[155px] achieve12:w-[170px] achieve11:w-[190px] achieve10:w-[230px] achieve9:w-[290px] text-gray-100 achieve8:w-[320px] text-[7.8px]/[1.35] achieve10:text-[9.5px]/[1.35] achieve9:text-[10.7px]/[1.35] achieve8:text-[11.3px]/[1.35] achieve7:text-[12px]/[1.35] achieve6:text-[13px] achieve4:text-[14px] achieve7:w-[380px] achieve5:w-[428px] achieve4:w-[484px] achieve1:text-[16px] mt-2 achieve7:mt-4 achieve1:w-[744px] lg:w-[545px] achieve2:w-[644px]">{dataItem1.paragraph}</p>
          </div>
        </div>
      </div>

      {/* five box */}
      <div className="lg:pl-80 mt-6 about8:mt-10 sm:mt-16 lg:mt-20">
        <div className="h-[338px] achieve7:h-[358px] achieve6:h-[468px] max-w-screen-2xl mx-auto pr-4 about8:pr-6 xl:pr-9 bg-blue-900  flex  items-center">
          <MotionDiv
             initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="nkm:flex hidden relative  lg:right-64 justify-center items-center h-60   achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve5:h-[468px] achieve6: sm:w-[668px] ">
                
            <div className="bg-gray-300">
              <Image src={dataItem2.image2} alt="achieve2" className="  h-60  achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve6:w-[668px] grayscale  flex justify-center items-center object-cover" />
            </div>
            {/* <Image src={achieve3} alt="achieve2" className="h-[368px] brightness-90 w-[568px] flex justify-center items-center object-cover"/> */}
            <div className="flex absolute justify-center w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:w-[230px] achieve6:h-[230px]  items-center">
              <Image src={dataItem2.image} alt={dataItem2.headingSpan} className="w-[80px] h-[80px] achieve9:w-[100px] achieve9:h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:h-[180px] achieve6:w-[180px] achieve2:w-[230px] achieve2:h-[230px] object-cover" />
              {/* <Image src={achieve2} alt="achieve2" className=" w-[230px] h-[230px] object-cover"/> */}
            </div>
          </MotionDiv>
          <div className="flex nkm:hidden relative  lg:right-64 justify-center items-center h-60   achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve5:h-[468px] achieve6: sm:w-[668px] ">

              
<div className="bg-gray-300">
  <Image src={dataItem2.image2} alt="achieve2" className="  h-60  achieve9:h-60 sm:h-64 achieve6:h-[368px] achieve6:w-[668px] grayscale  flex justify-center items-center object-cover" />
</div>
{/* <Image src={achieve3} alt="achieve2" className="h-[368px] brightness-90 w-[568px] flex justify-center items-center object-cover"/> */}
<div className="flex absolute justify-center w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:w-[230px] achieve6:h-[230px]  items-center">
  <Image src={dataItem2.image} alt={dataItem2.headingSpan} className="w-[80px] h-[80px] achieve9:w-[100px] achieve9:h-[100px] sm:w-[130px] sm:h-[130px]  achieve6:h-[180px] achieve6:w-[180px] achieve2:w-[230px] achieve2:h-[230px] object-cover" />
  {/* <Image src={achieve2} alt="achieve2" className=" w-[230px] h-[230px] object-cover"/> */}
</div>  </div>
          <div className="lg:relative pl-2 achieve10:pl-4 achieve8:pl-5 lg:pl-16 achieve8:pr-3 achieve6:pr-6 xl:pr-9 achieve1:pl-20 lg:w-[344px] achieve2:w-[444px] achieve1:w-[544px] lg:right-72">
            <h2 className="w-[155px] achieve12:w-[170px] achieve11:w-[190px] achieve10:w-[230px] achieve9:w-[290px] achieve8:w-[320px] achieve7:w-[380px] achieve5:w-[428px] achieve4:w-[484px] lg:w-[554px] achieve2:w-[644px] achieve1:w-[744px] font-bold text-[12px]/[1.22] achieve10:text-[14px]/[1.22] achieve9:text-[17.3px]/[1.22] achieve8:text-[18px]/[1.22] achieve7:text-[22px]/[1.22] achieve6:text-[28px]/[1.22] achieve5:text-[33px]/[1.22] achieve4:text-[36px]/[1.20] achieve2:text-[41px]/[1.20] achieve1:text-5xl text-blue-500"><span className="text-yellow-500">{dataItem2.headingSpan}</span> {dataItem2.heading}</h2>
            <p className="w-[155px] achieve12:w-[170px] achieve11:w-[190px] achieve10:w-[230px] achieve9:w-[290px] text-gray-100 achieve8:w-[320px] text-[7.8px]/[1.35] achieve10:text-[9.5px]/[1.35] achieve9:text-[10.7px]/[1.35] achieve8:text-[11.3px]/[1.35] achieve7:text-[12px]/[1.35] achieve6:text-[13px] achieve4:text-[14px] achieve7:w-[380px] achieve5:w-[428px] achieve4:w-[484px] achieve1:text-[16px] mt-2 achieve7:mt-4 achieve1:w-[744px] lg:w-[545px] achieve2:w-[644px]">{dataItem2.paragraph}</p>
          </div>
        </div>
      </div>
      <div className='mt-16 '>

        <Footer/>
    </div>
    </>

  )
}

export default Acheivments
