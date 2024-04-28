import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import image1 from "@/../public/Wbg.png"
import image2 from "@/../public/HireVet.png"
import image3 from "@/../public/HVMPD-gold_2023.png"
import image4 from "@/../public/WBJ2022.png"
import image5 from "@/../public/2023.png"
import image6 from "@/../public/dod.png"
import image7 from "@/../public/v3.png"
import image8 from "@/../public/Wbg.png"
import image9 from "@/../public/Wbg.png"
import image10 from "@/../public/Wbg.png"
import image11 from "@/../public/Wbg.png"
import { ArrowRight } from 'lucide-react'


let boxes = 
    {
        heading: "Virginia Values Veterans",
        subHeading: "The V3 Program helps employers develop and implement long-term strategies and nationally recognized best practices in recruiting, hiring, and retaining Veterans.",
        image1: image7,
        link: "https://dvsv3.com/"

    }
let boxes2 ={
        heading: "DodSkillBridge",
        subHeading: "The SkillBridge program continues to provide strong results for business leaders and our transitioning military members.",
        image1: image6,
        link: "https://skillbridge.osd.mil/"
    }



let smallBoxes1 = {
    heading: "Hire Vets 2022",
    subHeading: "Department of Labor seal The Honoring Investments in Recruiting and Employing American Military Veterans (HIRE Vets) Act of 2017",
    image1: image2,
    link: "https://www.hirevets.gov/awardees_table?created=2&field_application_type_value%5B2%5D=2&field_application_type_value_1%5B1%5D=1&field_employer_name_value=&field_employer_state_value=47"
}

let smallBoxes2 = {
    heading2: "Hire Vets 2023",
    subHeading2: "Department of Labor seal  The Honoring Investments in Recruiting and Employing American Military Veterans (HIRE Vets) Act of 2017",
    image2: image3,
    link2: "https://www.hirevets.gov/awardees_table?created=1&field_application_type_value%5B2%5D=2&field_application_type_value_1%5B1%5D=1&field_employer_name_value=&field_employer_state_value=47"
}
let smallBoxes3 = {
    heading3: "Corporate Diversity Index",
    subHeading3: "Corporate Diversity Index Small Companies in Greater D.C Information Management System.",
    image3: image4,
    link3: "https://dvsv3.com/"
}
let smallBoxes4 = {
    heading4: "CyberSecurity Companies",
    subHeading4: "Information Management Group Earns Place on Washington Business Journal's Cybersecurity Companies List",
    image4: image1,
    link4: "/News"
}
let smallBoxes5 = {
    heading5: "Vets Indexes",
    subHeading5: "Recognizing Employers That Support Veterns Vets Indexes Employer Awards",
    image5: image5,
    link5: "https://vetsindexes.com/award-results-2023/"
}



export function CarouselText() {
    return (
        <>
             <div className='flex justify-center'>

<div className="relative  feat6:h-[310px] feat5:h-[334px] feat4:h-[384px] feat1:h-[454px] w-[160px] feat7:w-[180px] feat6:w-[200px] feat5:w-[234px] feat4:w-[294px] feat3:w-[354px] feat1:w-[454px] drop-shadow-xl feat3:drop-shadow-2xl mdds:w-[554px]   flex flex-col ">
    <div className="  bg-blue-600 flex h-[70px] feat5:h-[90px] feat4:h-[110px] feat3:h-[120px] feat1:h-[140px] justify-center rounded-t-3xl">
        <div className="feat1:h-[150px] feat1:w-[150px] w-[85px] h-[85px] feat5:w-[100px] feat5:h-[100px] feat4:w-[120px] feat4:h-[120px] mdds:h-[170px] relative mdds:w-[170px] rounded-full -bottom-5 feat4:-bottom-8 feat3:-bottom-10 border-[7px] border-white bg-gray-200">
            <Image src={smallBoxes4.image4} alt="image1" /></div>
    </div> 
    <div className="flex-[0.9] flex flex-col items-center px-2 feat6:px-3 feat4:px-6 pt-[34px] feat5:pt-[40px] feat4:pt-[48px] feat3:pt-[39px] feat1:pt-[66px] mdds:pt-[74px] bg-white rounded-b-[2.5rem] feat7:rounded-b-[3.5rem] feat3:rounded-b-[5.5rem]">
        <h3 className="text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[16px] text-center feat4:text-[17px] font-bold">{smallBoxes4.heading4}</h3>
        <p className="text-center pt-[9px] feat5:pt-[12px] feat4:pt-[14px] text-[11px] feat7:text-[12px] feat6:text-[13px] feat5:text-[14px] feat4:text-[15px] feat3:text-[16px] text-gray-600">{smallBoxes4.subHeading4}
        </p>
        <Link href={smallBoxes4.link4} className="flex justify-center lg:justify-start"> <button className="mt-2 feat7:mt-3 mb-2 feat7:mb-3 feat3:mt-6 feat1:mt-10  hover:scale-105 hover:duration-300 h-[40px] w-[170px]  flex  items-center justify-center"><h3 className="ml-4 mr-4 text-blue-600 text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[15px] feat4:text-[16px] font-bold">See More</h3><div className="bg-amber-300 rounded-lg h-[27px] feat7:h-[29px] feat5:h-[34px] feat4:h-[38px] px-2 feat5:px-3 flex items-center"><ArrowRight color="white" /></div></button></Link>
    </div>
</div>
</div>

        </>
    )
}
export function CarouselText2() {
    return (
        <>
           <div className='flex justify-center'>

<div className="relative h-[300px] feat6:h-[310px] feat5:h-[334px] feat4:h-[384px] feat1:h-[454px] w-[160px] feat7:w-[180px] feat6:w-[200px] feat5:w-[234px] feat4:w-[294px] feat3:w-[354px] feat1:w-[454px] drop-shadow-xl feat3:drop-shadow-2xl mdds:w-[554px] flex flex-col ">
    <div className="  bg-blue-600 flex h-[70px] feat5:h-[90px] feat4:h-[110px] feat3:h-[120px] feat1:h-[140px] justify-center rounded-t-3xl">
        <div className="feat1:h-[150px] feat1:w-[150px] w-[85px] h-[85px] feat5:w-[100px] feat5:h-[100px] feat4:w-[120px] feat4:h-[120px] mdds:h-[170px] relative mdds:w-[170px] rounded-full -bottom-5 feat4:-bottom-8 feat3:-bottom-10 border-[7px] border-white bg-gray-200">
            <Image src={smallBoxes2.image2} alt="image1" />
        </div>
    </div> 
    <div className="flex-[0.9] flex flex-col items-center px-2 feat6:px-3 feat4:px-6 pt-[34px] feat5:pt-[40px] feat4:pt-[48px] feat3:pt-[39px] feat1:pt-[66px] mdds:pt-[74px] bg-white rounded-b-[2.5rem] feat7:rounded-b-[3.5rem] feat3:rounded-b-[5.5rem]">
        <h3 className="text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[16px] text-center feat4:text-[17px] font-bold">{smallBoxes2.heading2}</h3>
        <p className="text-center pt-[9px] feat5:pt-[12px] feat4:pt-[14px] text-[11px] feat7:text-[12px] feat6:text-[13px] feat5:text-[14px] feat4:text-[15px] feat3:text-[16px] text-gray-600">{smallBoxes2.subHeading2}
        </p>
        <Link href={smallBoxes2.link2} className="flex justify-center lg:justify-start"> 
            <button className="mt-2 feat7:mt-3 mb-2 feat7:mb-3 feat3:mt-6 feat1:mt-10  hover:scale-105 hover:duration-300 h-[40px] w-[170px]  flex  items-center justify-center">
                <h3 className="ml-4 mr-4 text-blue-600 text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[15px] feat4:text-[16px] font-bold">See More</h3>
                <div className="bg-amber-300 rounded-lg h-[27px] feat7:h-[29px] feat5:h-[34px] feat4:h-[38px] px-2 feat5:px-3 flex items-center">
                    <ArrowRight color="white" />
                </div>
            </button>
        </Link>
    </div>
</div>
</div>


        </>
    )
}
export function CarouselText4() {
    return (
        <>
           <div className='flex justify-center'>

<div className="relative h-[300px] feat6:h-[310px] feat5:h-[334px] feat4:h-[384px] feat1:h-[454px] w-[160px] feat7:w-[180px] feat6:w-[200px] feat5:w-[234px] feat4:w-[294px] feat3:w-[354px] feat1:w-[454px] drop-shadow-xl feat3:drop-shadow-2xl mdds:w-[554px] flex flex-col ">
    <div className="  bg-blue-600 flex h-[70px] feat5:h-[90px] feat4:h-[110px] feat3:h-[120px] feat1:h-[140px] justify-center rounded-t-3xl">
        <div className="feat1:h-[150px] feat1:w-[150px] w-[85px] h-[85px] feat5:w-[100px] feat5:h-[100px] feat4:w-[120px] feat4:h-[120px] mdds:h-[170px] relative mdds:w-[170px] rounded-full -bottom-5 feat4:-bottom-8 feat3:-bottom-10 border-[7px] border-white bg-gray-200">
            <Image src={smallBoxes1.image1} alt="image1" />
        </div>
    </div> 
    <div className="flex-[0.9] flex flex-col items-center px-2 feat6:px-3 feat4:px-6 pt-[34px] feat5:pt-[40px] feat4:pt-[48px] feat3:pt-[39px] feat1:pt-[66px] mdds:pt-[74px] bg-white rounded-b-[2.5rem] feat7:rounded-b-[3.5rem] feat3:rounded-b-[5.5rem]">
        <h3 className="text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[16px] text-center feat4:text-[17px] font-bold">{smallBoxes1.heading}</h3>
        <p className="text-center pt-[9px] feat5:pt-[12px] feat4:pt-[14px] text-[11px] feat7:text-[12px] feat6:text-[13px] feat5:text-[14px] feat4:text-[15px] feat3:text-[16px] text-gray-600">{smallBoxes1.subHeading}
        </p>
        <Link href={smallBoxes1.link} className="flex justify-center lg:justify-start"> 
            <button className="mt-2 feat7:mt-3 mb-2 feat7:mb-3 feat3:mt-6 feat1:mt-10  hover:scale-105 hover:duration-300 h-[40px] w-[170px]  flex  items-center justify-center">
                <h3 className="ml-4 mr-4 text-blue-600 text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[15px] feat4:text-[16px] font-bold">See More</h3>
                <div className="bg-amber-300 rounded-lg h-[27px] feat7:h-[29px] feat5:h-[34px] feat4:h-[38px] px-2 feat5:px-3 flex items-center">
                    <ArrowRight color="white" />
                </div>
            </button>
        </Link>
    </div>
</div>
</div>
        </>
    )
}
export function CarouselText5() {
    return (
        <>
           <div className='flex justify-center'>

<div className="relative h-[300px] feat6:h-[310px] feat5:h-[334px] feat4:h-[384px] feat1:h-[454px] w-[160px] feat7:w-[180px] feat6:w-[200px] feat5:w-[234px] feat4:w-[294px] feat3:w-[354px] feat1:w-[454px] drop-shadow-xl feat3:drop-shadow-2xl mdds:w-[554px]   flex flex-col ">
    <div className="  bg-blue-600 flex h-[70px] feat5:h-[90px] feat4:h-[110px] feat3:h-[120px] feat1:h-[140px] justify-center rounded-t-3xl">
        <div className="feat1:h-[150px] feat1:w-[150px] w-[85px] h-[85px] feat5:w-[100px] feat5:h-[100px] feat4:w-[120px] feat4:h-[120px] mdds:h-[170px] relative mdds:w-[170px] rounded-full -bottom-5 feat4:-bottom-8 feat3:-bottom-10 border-[7px] border-white bg-gray-200">
            <Image src={smallBoxes3.image3} alt="image1" /></div>
    </div> 
    <div className="flex-[0.9] flex flex-col items-center px-2 feat6:px-3 feat4:px-6 pt-[34px] feat5:pt-[40px] feat4:pt-[48px] feat3:pt-[39px] feat1:pt-[66px] mdds:pt-[74px] bg-white rounded-b-[2.5rem] feat7:rounded-b-[3.5rem] feat3:rounded-b-[5.5rem]">
        <h3 className="text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[16px] text-center feat4:text-[17px] font-bold">{smallBoxes3.heading3}</h3>
        <p className="text-center pt-[9px] feat5:pt-[12px] feat4:pt-[14px] text-[11px] feat7:text-[12px] feat6:text-[13px] feat5:text-[14px] feat4:text-[15px] feat3:text-[16px] text-gray-600">{smallBoxes3.subHeading3}
        </p>
        <Link href={smallBoxes3.link3} className="flex justify-center lg:justify-start"> <button className="mt-2 feat7:mt-3 mb-2 feat7:mb-3 feat3:mt-6 feat1:mt-10  hover:scale-105 hover:duration-300 h-[40px] w-[170px]  flex  items-center justify-center"><h3 className="ml-4 mr-4 text-blue-600 text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[15px] feat4:text-[16px] font-bold">See More</h3><div className="bg-amber-300 rounded-lg h-[27px] feat7:h-[29px] feat5:h-[34px] feat4:h-[38px] px-2 feat5:px-3 flex items-center"><ArrowRight color="white" /></div></button></Link>
    </div>
</div>
</div>
        </>
    )
}
export function CarouselText6() {
    return (
        <>
          <div className='flex justify-center'>

<div className="relative h-[300px] feat6:h-[310px] feat5:h-[334px] feat4:h-[384px] feat1:h-[454px] w-[160px] feat7:w-[180px] feat6:w-[200px] feat5:w-[234px] feat4:w-[294px] feat3:w-[354px] feat1:w-[454px] drop-shadow-xl feat3:drop-shadow-2xl mdds:w-[554px]   flex flex-col ">
    <div className="  bg-blue-600 flex h-[70px] feat5:h-[90px] feat4:h-[110px] feat3:h-[120px] feat1:h-[140px] justify-center rounded-t-3xl">
        <div className="feat1:h-[150px] feat1:w-[150px] w-[85px] h-[85px] feat5:w-[100px] feat5:h-[100px] feat4:w-[120px] feat4:h-[120px] mdds:h-[170px] relative mdds:w-[170px] rounded-full -bottom-5 feat4:-bottom-8 feat3:-bottom-10 border-[7px] border-white bg-gray-200">
            <Image src={smallBoxes5.image5} alt="image1" /></div>
    </div> 
    <div className="flex-[0.9] flex flex-col items-center px-2 feat6:px-3 feat4:px-6 pt-[34px] feat5:pt-[40px] feat4:pt-[48px] feat3:pt-[39px] feat1:pt-[66px] mdds:pt-[74px] bg-white rounded-b-[2.5rem] feat7:rounded-b-[3.5rem] feat3:rounded-b-[5.5rem]">
        <h3 className="text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[16px] text-center feat4:text-[17px] font-bold">{smallBoxes5.heading5}</h3>
        <p className="text-center pt-[9px] feat5:pt-[12px] feat4:pt-[14px] text-[11px] feat7:text-[12px] feat6:text-[13px] feat5:text-[14px] feat4:text-[15px] feat3:text-[16px] text-gray-600">{smallBoxes5.subHeading5}
        </p>
        <Link href={smallBoxes5.link5} className="flex justify-center lg:justify-start"> <button className="mt-2 feat7:mt-3 mb-2 feat7:mb-3 feat3:mt-6 feat1:mt-10  hover:scale-105 hover:duration-300 h-[40px] w-[170px]  flex  items-center justify-center"><h3 className="ml-4 mr-4 text-blue-600 text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[15px] feat4:text-[16px] font-bold">See More</h3><div className="bg-amber-300 rounded-lg h-[27px] feat7:h-[29px] feat5:h-[34px] feat4:h-[38px] px-2 feat5:px-3 flex items-center"><ArrowRight color="white" /></div></button></Link>
    </div>
</div>
</div>

        </>
    )
}
export function CarouselText7() {
    return (
        <>
          <div className='flex justify-center'>

<div className="relative h-[300px] feat6:h-[310px] feat5:h-[334px] feat4:h-[384px] feat1:h-[454px] w-[160px] feat7:w-[180px] feat6:w-[200px] feat5:w-[234px] feat4:w-[294px] feat3:w-[354px] feat1:w-[454px] drop-shadow-xl feat3:drop-shadow-2xl mdds:w-[554px]   flex flex-col ">
    <div className="  bg-blue-600 flex h-[70px] feat5:h-[90px] feat4:h-[110px] feat3:h-[120px] feat1:h-[140px] justify-center rounded-t-3xl">
        <div className="feat1:h-[150px] feat1:w-[150px] w-[85px] h-[85px] feat5:w-[100px] feat5:h-[100px] feat4:w-[120px] feat4:h-[120px] mdds:h-[170px] relative mdds:w-[170px] rounded-full -bottom-5 feat4:-bottom-8 feat3:-bottom-10 border-[7px] border-white bg-gray-200">
            <Image src={boxes2.image1} alt="image1" /></div>
    </div> 
    <div className="flex-[0.9] flex flex-col items-center px-2 feat6:px-3 feat4:px-6 pt-[34px] feat5:pt-[40px] feat4:pt-[48px] feat3:pt-[39px] feat1:pt-[66px] mdds:pt-[74px] bg-white rounded-b-[2.5rem] feat7:rounded-b-[3.5rem] feat3:rounded-b-[5.5rem]">
        <h3 className="text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[16px] text-center feat4:text-[17px] font-bold">{boxes2.heading}</h3>
        <p className="text-center pt-[9px] feat5:pt-[12px] feat4:pt-[14px] text-[11px] feat7:text-[12px] feat6:text-[13px] feat5:text-[14px] feat4:text-[15px] feat3:text-[16px] text-gray-600">{boxes2.subHeading}
        </p>
        <Link href={boxes2.link} className="flex justify-center lg:justify-start"> <button className="mt-2 feat7:mt-3 mb-2 feat7:mb-3 feat3:mt-6 feat1:mt-10  hover:scale-105 hover:duration-300 h-[40px] w-[170px]  flex  items-center justify-center"><h3 className="ml-4 mr-4 text-blue-600 text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[15px] feat4:text-[16px] font-bold">See More</h3><div className="bg-amber-300 rounded-lg h-[27px] feat7:h-[29px] feat5:h-[34px] feat4:h-[38px] px-2 feat5:px-3 flex items-center"><ArrowRight color="white" /></div></button></Link>
    </div>
</div>
</div>
        </>
    )
}
export function CarouselText8() {
    return (
        <>
           <div className='flex justify-center'>

<div className="relative h-[320px] feat6:h-[340px] feat5:h-[354px] feat4:h-[399px] feat1:h-[454px] w-[160px] feat7:w-[180px] feat6:w-[200px] feat5:w-[234px] feat4:w-[294px] feat3:w-[354px] feat1:w-[454px] drop-shadow-xl feat3:drop-shadow-2xl mdds:w-[554px]   flex flex-col ">
    <div className="  bg-blue-600 flex h-[70px] feat5:h-[90px] feat4:h-[110px] feat3:h-[120px] feat1:h-[140px] justify-center rounded-t-3xl">
        <div className="feat1:h-[150px] feat1:w-[150px] w-[85px] h-[85px] feat5:w-[100px] feat5:h-[100px] feat4:w-[120px] feat4:h-[120px] mdds:h-[170px] relative mdds:w-[170px] rounded-full -bottom-5 feat4:-bottom-8 feat3:-bottom-10 border-[7px] border-white bg-gray-200">
            <Image src={boxes.image1} alt="image1" /></div>
    </div> 
    <div className="flex-[0.9] flex flex-col items-center px-2 feat6:px-3 feat4:px-6 pt-[34px] feat5:pt-[40px] feat4:pt-[48px] feat3:pt-[39px] feat1:pt-[66px] mdds:pt-[74px] bg-white rounded-b-[2.5rem] feat7:rounded-b-[3.5rem] feat3:rounded-b-[5.5rem]">
        <h3 className="text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[16px] text-center feat4:text-[17px] font-bold">{boxes.heading}</h3>
        <p className="text-center pt-[9px] feat5:pt-[12px] feat4:pt-[14px] text-[11px] feat7:text-[12px] feat6:text-[13px] feat5:text-[14px] feat4:text-[15px] feat3:text-[16px] text-gray-600">{boxes.subHeading}
        </p>
        <Link href={boxes.link} className="flex justify-center lg:justify-start"> <button className="mt-2 feat7:mt-3 mb-2 feat7:mb-3 feat3:mt-6 feat1:mt-10  hover:scale-105 hover:duration-300 h-[40px] w-[170px]  flex  items-center justify-center"><h3 className="ml-4 mr-4 text-blue-600 text-[12px] feat7:text-[13px] feat6:text-[14px] feat5:text-[15px] feat4:text-[16px] font-bold">See More</h3><div className="bg-amber-300 rounded-lg h-[27px] feat7:h-[29px] feat5:h-[34px] feat4:h-[38px] px-2 feat5:px-3 flex items-center"><ArrowRight color="white" /></div></button></Link>
    </div>
</div>
</div>


        </>
    )
}



const CarouselText3 = () => {
    return (
        <>
        <div><CarouselText /></div>
        <div><CarouselText2 /></div>
        <div><CarouselText4 /></div>
        <div><CarouselText5 /></div> 
        <div><CarouselText6 /></div> 
        <div><CarouselText7 /></div> 
        <div><CarouselText8 /></div> 
            
            
        </>
    )
}

export default CarouselText3



