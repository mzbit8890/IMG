// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import Wrapper from "../components/Wrapper"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import Creativity from "@/../public/image.png"
// import Message from "@/../public/Message.jpg"
// import Link from "next/link"
// import Footer from "../components/Footer"
// import { MotionDiv } from "../components/MotionImg"

// const page = () => {
//   return (


//     <>
//       <div className="bg-blue-50/80 pb-52 ">
//         <div className="max-w-screen-2xl mx-auto px-3 about5:px-6 xl:px-9 ">

//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl/[1.20] font-bold text-center md:px-[129px] xl:px-[239px] pt-14 text-gray-800">Diversity, <span className="text-blue-600">Creativity,</span> Synergy, and Innovation</h2>
//           <p className='mt-6 text-center px-[6px] sm:px-[65px] lg:px-[238px] text-xl text-balance text-gray-600 '>At Information Management Group, Inc., we encourage diversity, creativity, synergy and innovation.</p>
//         </div>


//       </div><div className="bg-[#191970] pb-20">
//         <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:flex relative -top-32 items-center justify-center  gap-8 ">

//           <MotionDiv
//     initial={{
//        x: -100,
//        opacity: 0,
//      }}
//      transition={{ duration: 0.87 }}
//      whileInView={{ opacity: 1, x: 0 }}
//      viewport={{ once: true }}  className="bg-white shadow-2xl sm:h-[484px] sm:w-[584px]  rounded-2xl py-8 mx-3 px-5 sm:px-16 lg:px-20">
//             <h3 className="text-center text-2xl text-gray-700 font-[650]">Diversity, Creativity, Synergy, and Innovation</h3>
//             <p className="text-center pt-4 text-lg text-gray-600 line-clamp-3">We believe diversity drives innovation. We value the “whole person.” Our people provide Information Technology, Information Assurance, Logistics, and Visual Communication services to our customers.</p>
//             <div className="pt-4 flex justify-end">
              
//               <Dialog>
//                 <DialogTrigger className="border py-2 px-8 rounded-lg border-black">Learn More</DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader>
//                     <DialogTitle>Diversity, Creativity, Synergy, and Innovation</DialogTitle>
//                     <DialogDescription>We believe diversity drives innovation. We value the “whole person.” Our people provide Information Technology, Information Assurance, Logistics, and Visual Communication services to our customers. Visual Communication services to our customers. Our workforce is made up of people of diverse cultural backgrounds, with diverse personal and professional experiences, diverse beliefs, diverse thoughts and diverse ideas. It is our belief that by encouraging an inclusive environment throughout all levels of our organization, we will bring together the unique characteristics of our employees. Our people are team-focused and problem-solvers, not shackled by unilateral vision but liberated by collaborative synergy. The resulting environment promotes innovation and thereby improves our “customer experience” as well as our employee experience. Creativity is driven by approaching a task from varying perspectives and angles. The best solutions are often derived from examining the problem from all angles in order to develop complete understanding before taking direct action. Daily, personnel at all levels of our organization practice this belief. We encourage the free-exchange of ideas through “thought leadership” meetings and we facilitate interdepartmental communication, as well as cross training. Diverse thought is captured through these communication channels and influences performance throughout Information Management Group, Inc.’s services.</DialogDescription>

//                   </DialogHeader>
//                 </DialogContent>
//               </Dialog>

//             </div>
//             <div className="flex justify-center"><Image src={Creativity} alt="" className="h-44 w-72 lg:h-56 lg:w-80" /></div>
//           </MotionDiv>
//           <MotionDiv
//     initial={{
//        x: 100,
//        opacity: 0,
//      }}
//      transition={{ duration: 0.87 }}
//      whileInView={{ opacity: 1, x: 0 }}
//      viewport={{ once: true }} className="bg-white  shadow-2xl sm:h-[484px] sm:w-[584px] rounded-2xl mx-3 py-8 px-5 sm:px-16 lg:px-20">
//             <h3 className="text-center text-2xl text-gray-700 font-[650] lg:px-16">Message from the President</h3>
//             <p className="text-center pt-4 text-lg text-gray-600 line-clamp-3">At IMG, we believe that our employees are at the core of our success and are therefore our most important asset. The professionalism and work quality of our diverse technical teams led Army leadership to coin the phrase “the IMG standard.” </p>
//             <div className="pt-4 flex justify-end">
//             <Link href="/presidentMessage"><button className="border py-2 px-8 rounded-lg border-black">Learn More</button></Link>
              

//             </div>
//             <div className="flex justify-center items-end"><Image src={Message} alt="" className=" h-48 w-64" /></div>
//           </MotionDiv>
//         </div>
//       </div>
//       <div >

// <Footer/>
// </div>
//     </>


//   )
// }

// export default page





import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Wrapper from "../components/Wrapper"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Creativity from "@/../public/image.png"
import Message from "@/../public/Message.jpg"
import Link from "next/link"
import Footer from "../components/Footer"
import { MotionDiv } from "../components/MotionImg"

const page = () => {
  return (


    <>
      <div className="bg-blue-50/80 pb-52 ">
        <div className="max-w-screen-2xl mx-auto px-3 about5:px-6 xl:px-9 ">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl/[1.20] font-bold text-center md:px-[129px] xl:px-[239px] pt-14 text-gray-800">Diversity, <span className="text-blue-600">Creativity,</span> Synergy, and Innovation</h2>
          <p className='mt-6 text-center px-[6px] sm:px-[65px] lg:px-[238px] text-xl text-balance text-gray-600 '>At Information Management Group, Inc., we encourage diversity, creativity, synergy and innovation.</p>
        </div>


      </div><div className="bg-[#191970] pb-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:flex relative -top-32 items-center justify-center  gap-8 ">

          <MotionDiv
    initial={{
       x: -100,
       opacity: 0,
     }}
     transition={{ duration: 0.87 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }}  className="bg-white shadow-2xl sm:h-[484px] sm:w-[584px]  rounded-2xl py-8 mx-3 px-5 sm:px-16 lg:px-20">
            <h3 className="text-center text-2xl text-gray-700 font-[650]">Diversity, Creativity, Synergy, and Innovation</h3>
            <p className="text-center pt-4 text-lg text-gray-600 line-clamp-3">We believe diversity drives innovation. We value the “whole person.” Our people provide Information Technology, Information Assurance, Logistics, and Visual Communication services to our customers.</p>
            <div className="pt-4 flex justify-end">
              

            <Link href="/creativity"><button className="border py-2 px-8 rounded-lg border-black">Learn More</button></Link>

              {/* <Dialog>
                <DialogTrigger className="border py-2 px-8 rounded-lg border-black">Learn More</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Diversity, Creativity, Synergy, and Innovation</DialogTitle>
                    <DialogDescription>We believe diversity drives innovation. We value the “whole person.” Our people provide Information Technology, Information Assurance, Logistics, and Visual Communication services to our customers. Visual Communication services to our customers. Our workforce is made up of people of diverse cultural backgrounds, with diverse personal and professional experiences, diverse beliefs, diverse thoughts and diverse ideas. It is our belief that by encouraging an inclusive environment throughout all levels of our organization, we will bring together the unique characteristics of our employees. Our people are team-focused and problem-solvers, not shackled by unilateral vision but liberated by collaborative synergy. The resulting environment promotes innovation and thereby improves our “customer experience” as well as our employee experience. Creativity is driven by approaching a task from varying perspectives and angles. The best solutions are often derived from examining the problem from all angles in order to develop complete understanding before taking direct action. Daily, personnel at all levels of our organization practice this belief. We encourage the free-exchange of ideas through “thought leadership” meetings and we facilitate interdepartmental communication, as well as cross training. Diverse thought is captured through these communication channels and influences performance throughout Information Management Group, Inc.’s services.</DialogDescription>

                  </DialogHeader> */}
                {/* </DialogContent>
              </Dialog> */}

            </div>
            <div className="flex justify-center"><Image src={Creativity} alt="" className="h-44 w-72 lg:h-56 lg:w-80" /></div>
          </MotionDiv>
          <MotionDiv
    initial={{
       x: 100,
       opacity: 0,
     }}
     transition={{ duration: 0.87 }}
     whileInView={{ opacity: 1, x: 0 }}
     viewport={{ once: true }} className="bg-white  shadow-2xl sm:h-[484px] sm:w-[584px] rounded-2xl mx-3 py-8 px-5 sm:px-16 lg:px-20">
            <h3 className="text-center text-2xl text-gray-700 font-[650] lg:px-16">Message from the President</h3>
            <p className="text-center pt-4 text-lg text-gray-600 line-clamp-3">At IMG, we believe that our employees are at the core of our success and are therefore our most important asset. The professionalism and work quality of our diverse technical teams led Army leadership to coin the phrase “the IMG standard.” </p>
            <div className="pt-4 flex justify-end">
            <Link href="/presidentMessage"><button className="border py-2 px-8 rounded-lg border-black">Learn More</button></Link>
              

            </div>
            <div className="flex justify-center items-end"><Image src={Message} alt="" className=" h-48 w-64" /></div>
          </MotionDiv>
        </div>
      </div>
      <div >

<Footer/>
</div>
    </>


  )
}

export default page
