import Wrapper from "./Wrapper"
import { Noto_Sans_Buhid } from 'next/font/google'
import Image from "next/image"
import LandingPageImage from "@/app/components/assets/thherolop.png"
import { MotionDiv, MotionImg } from "./MotionImg"

const poppins = Noto_Sans_Buhid({
    weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
    style: 'normal', subsets: ['latin']
})

const Hero = () => {
    return (
        <Wrapper>
            <div
            className="py-10 grid flex-col grid-cols-1 lg:grid-cols-2 items-center">
                <MotionDiv 
             initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="xl:col-span-1 text-center lg:text-left text-balance mt-20 lg:mt-16">
                    <p className={` ${poppins.className}`}><span className="text-blue-600  font-semibold text-[13px] tracking-wider  "><span className="py-1 pl-5  bg-blue-100">TALK BUS</span>INESS GROWTH</span></p>

                    <h1 className=" font-bold  text-gray-800 text-[22px]/[1.17] head3:text-[30px]/[1.17] about8:text-[40px]/[1.17] home2:text-[48px]/[1.17] home1:text-[54px]/[1.17] xl:text-6xl/[1.17] py-4 grid-cols-1">
                        Delivering Critical Services for Over 30 Years</h1>
                 
                    <p className="text-[13px] about8:text-[16px] home1:text-lg text-gray-600 xl:text-left lg:w-[540px]">(IMG) is a privately-owned small business that has been successfully delivering critical services and solutions across multiple and geographically dispersed networks</p>
                  
                   <div className="flex text-xl head3:text-2xl font-bold text-blue-600 gap-20 mt-7 lg:justify-start justify-center">
                        <h2 className="head3:pr-6 lg:pr-0">250+</h2>
                        <h2 className="pr-4 lg:pr-0">99%</h2>
                        
                    </div>
                    <div className="flex text-[13px] head3:text-[16px] gap-10 text-gray-600 justify-center lg:justify-start">
                    <p>Happy Clients</p>
                    <p>Client Satisfaction</p>
                   </div>
                   
                </MotionDiv>
                <MotionDiv
                 initial={{
                    x: 200,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, x: 20 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                    
                <Image src={LandingPageImage} alt="Landing page Image" height={600} width={600} className=" xl:col-span-1 object-fill lg:px-0 pr-10 head3:pr-16 home3:px-32 pt-4 lg-pt-0  justify-self-center xl:justify-self-end" />
</MotionDiv>
            </div>
        </Wrapper>
    )
}

export default Hero

// import Wrapper from "./Wrapper"
// import { Noto_Sans_Buhid } from 'next/font/google'
// import Image from "next/image"
// import LandingPageImage from "@/app/components/assets/heropic.png"

// const poppins = Noto_Sans_Buhid({
//     weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
//     style: 'normal', subsets: ['latin']
// })

// const Hero = () => {
//     return (
//         <Wrapper>
//             <div className="py-10 grid flex-col grid-cols-1 lg:grid-cols-1 items-center">
//                 <div className="xl:col-span-1 text-center lg:text-center text-balance mt-20 lg:mt-16">
//                     <p className={` ${poppins.className}`}><span className="text-blue-600  font-semibold text-[13px] tracking-wider  "><span className="py-1 pl-5  bg-blue-100">TALK BUS</span>INESS GROWTH</span></p>

//                     <h1 className=" font-bold  text-gray-800 text-[22px]/[1.17] head3:text-[30px]/[1.17] about8:text-[40px]/[1.17] home2:text-[48px]/[1.17] home1:text-[54px]/[1.17] xl:text-6xl/[1.17] py-4 grid-cols-1">
//                         Delivering Critical Services for Over 30 Years</h1>
//                  <div className="flex justify-center">
//                      <p className="text-[13px] about8:text-[16px] home1:text-lg text-gray-600 xl:text-center lg:">(IMG) is a privately-owned small business that has been successfully delivering critical services and solutions across multiple and geographically dispersed networks</p>
//                  </div>
                   
                  
//                    <div className="flex text-xl head3:text-2xl font-bold text-blue-600 gap-20 mt-7 lg:justify-center justify-center">
//                         <h2 className="head3:pr-6 lg:pr-0">250+</h2>
//                         <h2 className="pr-4 lg:pr-0">99%</h2>
                        
//                     </div>
//                     <div className="flex text-[13px] head3:text-[16px] gap-10 text-gray-600 justify-center lg:justify-center">
//                     <p>Happy Clients</p>
//                     <p>Client Satisfaction</p>
//                    </div>
                   
//                 </div>
//                 <Image src={LandingPageImage} alt="Landing page Image" height={600} width={600} className=" xl:col-span-1 object-fill lg:px-0 px-10 head3:px-16 home3:px-32 pt-4 lg-pt-0  justify-self-center xl:justify-self-end" />

//             </div>
//         </Wrapper>
//     )
// }

// export default Hero
