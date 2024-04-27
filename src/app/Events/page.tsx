// import Image from "next/image"
// import IMG from "@../../../public/events.jpg"
// import Header from "../components/Header"
// import Wrapper from "../components/Wrapper"
// const page = () => {
//   return (
//     <div >
//       <div className=" flex items-center justify-center">
//         <Image src={IMG} alt="Events" className=" sm:flex sm:object-cover -z-10 brightness-50 bg-transparent" priority fill/>
//       </div>
//       <Wrapper>
//       <h1>
//         Welcome
//       </h1>
//       </Wrapper>
   
//     </div>


//   )
// }

// export default page


//     {/* <h1 className="text-gray-800 text-5xl font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//       Explore, engage, and elevate your life through the exciting events listed on IMG
//       </h1> */}



// import Image from "next/image"
// import IMG from "@../../../public/events.jpg"
// import Wrapper from "../components/Wrapper"
// import Header from "../components/Header"
// import IMG1 from "@../../../src/app/Events/events-img-1.jpg"
// import IMG2 from "@../../../src/app/Events/events--img-2.jpg"
// import IMG3 from "@../../../src/app/Events/img-events-3.jpg"

// const Page = () => {
//   return (
    
//       <Wrapper>
//        <div className="">
//        <h1 className="text-center font-bold text-5xl mt-12">Latest <span className="text-blue-600">Ev</span>ents </h1>
//       </div>
//       <div className="">
       
//       {/* <div className="flex mt-6 gap-3 flex-grow">
//       <Image src={IMG1} alt="" width={400} height={600}/>
//         <Image src={IMG2} alt=""  width={500} height={400}/>
//         <Image src={IMG3} alt=""  width={400} height={600}/>
//       </div> */}

// <div className="pi:flex pi:justify-center items-center mt-6 gap-6 text-center">
//   <div className="relative w-64 h-80 overflow-hidden rounded-lg shadow-md ">
//     <Image src={IMG1} alt="Image 1" layout="fill" objectFit="cover" className="animate-slide-in" />
//     {/* <div className="absolute bottom-0 left-0 right-0 p-3 bg-black bg-opacity-50 text-white text-center rounded-b-lg">
//       Caption for Image 1
//     </div> */}
//   </div>
//   <div className="relative w-64 h-80 overflow-hidden rounded-lg shadow-md pi:mt-0 mt-7">
//     <Image src={IMG2} alt="Image 2" layout="fill" objectFit="cover" className="animate-slide-in" />
//     {/* <div className="absolute bottom-0 left-0 right-0 p-3 bg-black bg-opacity-50 text-white text-center rounded-b-lg">
//       Caption for Image 2
//     </div> */}
//   </div>
//   <div className="relative w-64 h-80 overflow-hidden rounded-lg shadow-md  pi:mt-0 mt-7">
//     <Image src={IMG3} alt="Image 3" layout="fill" objectFit="cover" className="animate-slide-in" />
//     {/* <div className="absolute bottom-0 left-0 right-0 p-3 bg-black bg-opacity-50 text-white text-center rounded-b-lg">
//       Caption for Image 3
//     </div> */}
//   </div>
// </div>




//       <div className="">
//           <h1 className="text-center mt-8 font-bold text-gray-700 text-4xl">Oct 5, 2023 - IMG Meet and Greet </h1>
//           <p className="mt-4 text-center pi:px-44">Thank you for joining us at our recent meet and greet! We hope you had a valuable and inspiring experience connecting with us and meeting fellow job seekers. Your presence made the event a success, and we look forward to more opportunities to collaborate in the future.</p>
//       </div>
//       </div>
//       </Wrapper>
   
//   )
// }

// export default Page


// import Image from "next/image";
// import IMG1 from "@../../../src/app/Events/events-img-1.jpg";
// import IMG2 from "@../../../src/app/Events/events--img-2.jpg";
// import IMG3 from "@../../../src/app/Events/img-events-3.jpg";
// import Wrapper from "../components/Wrapper";

// const Page = () => {
//   return (
//     <Wrapper>
//       <div className="text-center mt-12">
//         <h1 className="font-bold text-5xl">
//           Latest <span className="text-blue-600">Events</span>
//         </h1>
//       </div>
//       <div className="mt-6 flex justify-center gap-6">
//         {[
//           { src: IMG1, alt: "Image 1" },
//           { src: IMG2, alt: "Image 2" },
//           { src: IMG3, alt: "Image 3" },
//         ].map((image, index) => (
//           <div
//             key={index}
//             className="relative w-64 h-80 overflow-hidden rounded-lg shadow-md"
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               layout="fill"
//               objectFit="cover"
//               className="animate-slide-in hover:scale-105 transition duration-300"
//             />
           
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-8">
//         <h1 className="font-bold text-gray-700 text-4xl">Oct 5, 2023 - IMG Meet and Greet</h1>
//         <p className="mt-4 px-8 text-gray-600">
//           Thank you for joining us at our recent meet and greet! We hope you had a valuable and inspiring experience connecting with us and meeting fellow job seekers. Your presence made the event a success, and we look forward to more opportunities to collaborate in the future.
//         </p>
//       </div>
//     </Wrapper>
//   );
// };

// export default Page;


// import Image from "next/image";
// import IMG1 from "@../../../src/app/Events/events-img-1.jpg";
// import IMG2 from "@../../../src/app/Events/events--img-2.jpg";
// import IMG3 from "@../../../src/app/Events/img-events-3.jpg";
// import Wrapper from "../components/Wrapper";

// const Page = () => {
//   return (
//     <Wrapper>
//       <div className="text-center mt-12">
//         <h1 className="font-bold text-5xl">
//           Latest <span className="text-blue-600">Events</span>
//         </h1>
//       </div>
//       <div className="mt-6 flex flex-col pi:flex-row justify-center gap-6 rounded-lg md:items-center">
//         {[
//           { src: IMG1, alt: "Image 1" },
//           { src: IMG2, alt: "Image 2" },
//           { src: IMG3, alt: "Image 3" },
//         ].map((image, index) => (
//           <div
//             key={index}
//             className="relative w-full md:w-96 h-80 overflow-hidden rounded-lg "
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               layout="fill"
//               objectFit="cover"
//               className="animate-slide-in hover:scale-105 transition rounded-lg duration-300"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-8">
//         <h1 className="font-bold text-gray-700 text-4xl">Oct 5, 2023 - IMG Meet and Greet</h1>
//         <p className="mt-4 px-8 text-gray-600">
//           Thank you for joining us at our recent meet and greet! We hope you had a valuable and inspiring experience connecting with us and meeting fellow job seekers. Your presence made the event a success, and we look forward to more opportunities to collaborate in the future.
//         </p>
//       </div>
//     </Wrapper>
//   );
// };

// export default Page;



// import Image from "next/image";
// import IMG1 from "@../../../src/app/Events/events-img-1.jpg";
// import IMG2 from "@../../../src/app/Events/events--img-2.jpg";
// import IMG3 from "@../../../src/app/Events/img-events-3.jpg";
// import Wrapper from "../components/Wrapper";

// const Page = () => {
//   return (
//     <Wrapper>
//       <div className="text-center mt-12">
//         <h1 className="font-bold text-5xl">
//           Latest <span className="text-blue-600">Events</span>
//         </h1>
//       </div>
//       <div className="mt-6 flex flex-col md:flex-row justify-center gap-6 md:items-center rounded-lg">
//         {[
//           { src: IMG1, alt: "Image 1" },
//           { src: IMG2, alt: "Image 2" },
//           { src: IMG3, alt: "Image 3" },
//         ].map((image, index) => (
//           <div
//             key={index}
//             className="relative w-full md:w-96 h-80 overflow-hidden rounded-lg"
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               layout="fill"
//               objectFit="cover"
//               className="animate-slide-in hover:scale-105 transition rounded-lg duration-300"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-8">
//         <h1 className="font-bold text-gray-700 text-4xl">Oct 5, 2023 - IMG Meet and Greet</h1>
//         <p className="mt-4 px-8 text-gray-600">
//           Thank you for joining us at our recent meet and greet! We hope you had a valuable and inspiring experience connecting with us and meeting fellow job seekers. Your presence made the event a success, and we look forward to more opportunities to collaborate in the future.
//         </p>
//       </div>
//     </Wrapper>
//   );
// };

// export default Page;


import Image from "next/image";
import IMG1 from "@../../../src/app/Events/events-img-1.jpg";
import IMG2 from "@../../../src/app/Events/events--img-2.jpg";
import IMG3 from "@../../../src/app/Events/img-events-3.jpg";
import IMG4 from "@../../../src/app/Events/events-img/890.jpeg"
import IMG5 from "@../../../src/app/Events/events-img/img-3-9.jpeg"
import IMG6 from "@../../../src/app/Events/events-img/img-9-0.jpeg"


import Wrapper from "../components/Wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "../components/Footer";

const Page = () => {
  return (

    <>
    <Wrapper>
      <div className="text-center mt-12">
        <h1 className="font-bold  about8:text-5xl text-3xl">
          Latest <span className="text-blue-600">Events</span>
        </h1>
      </div>



   





  {/* <div className="mt-16 flex flex-col md:flex-row justify-center gap-6 md:items-center">
  {[
    { src: IMG1, alt: "Image 1" },
    { src: IMG2, alt: "Image 2" },
    { src: IMG3, alt: "Image 3" },
  ].map((image, index) => (
    <div key={index} className="relative w-full md:w-96 h-80 overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg animate-slide-in hover:scale-105 transition duration-300"
      />
    </div>
  ))}
</div> */}

 


<div className="mt-16 flex flex-col md:flex-row object-fill justify-center gap-12 md:items-center ">
        
          <div
            
            className="relative   w-full md:w-64 h-80 overflow-hidden md:rounded-xl"
          >
            <Image
              src={IMG1}
              alt="IMG1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg object-fill animate-slide-in hover:scale-105 transition duration-300"
            />
         
          </div>
          <div
            
            className="relative   w-full md:w-80 h-80 overflow-hidden md:rounded-xl"
          >
            <Image
              src={IMG2}
              alt="IMG2"
              layout="fill"
              objectFit="cover"
              className="md:rounded-lg object-fill animate-slide-in hover:scale-105 transition duration-300"
            />
         
          </div>
          <div
            
            className="relative   w-full md:w-96 h-80 overflow-hidden md:rounded-xl"
          >
            <Image
              src={IMG3}
              alt="IMG3"
              layout="fill"
              objectFit="cover"
              className="md:rounded-lg object-fill animate-slide-in hover:scale-105 transition duration-300"
            />
         
          </div>
     
      </div>






















      <div className="text-center mt-11">
        <h1 className="font-bold text-gray-700 about8:text-4xl text-2xl">Oct 5, 2023 - IMG Meet and Greet</h1>
        <p className="mt-11 pi:px-28 about8:text-[16px] text-[14px] text-gray-600">
          Thank you for joining us at our recent meet and greet! We hope you had a valuable and inspiring experience connecting with us and meeting fellow job seekers. Your presence made the event a success, and we look forward to more opportunities to collaborate in the future.
        </p>
      </div>



   
      <div className="mt-16 flex flex-col md:flex-row justify-center gap-6 md:items-center rounded-lg">
        {[
          { src: IMG4, alt: "Image 1" },
          { src: IMG5, alt: "Image 2" },
          { src: IMG6, alt: "Image 3" },
        ].map((image, index) => (
          <div
            key={index}
            className="relative w-full md:w-96 h-80 overflow-hidden md:rounded-lg md:rounded-xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="md:rounded-lg animate-slide-in hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-11">
        <h1 className="font-bold text-gray-700 about8:text-4xl text-2xl">NOV 1, 2023 - Networking and Hiring Fair</h1>
        <p className="mt-11 pi:px-28 about8:text-[16px] text-[14px] text-gray-600">
        IMG is honored to have had the opportunity to participate in the HIRE VETS NOW event on November 1, 2023, at Fort Belvoir, VA. Connecting with veterans eager to embark on new career journey was truly inspiring.
        If you couldn’t make it to the event but would like to discuss our job openings, we’d be happy to chat one-on-one. Feel free to reach out to us using our contact form.
          </p>
        {/* <p className="mt-2  text-gray-600 pi:px-28">
        If you couldn’t make it to the event but would like to discuss our job openings, we’d be happy to chat one-on-one. Feel free to reach out to us using our contact form.
          </p> */}
         
      </div>
      <div className="mt-9 text-center pb-5">
       <Button>
        <Link href={"./job-position"}>
        OPEN POSITION
        </Link>
       </Button>
      </div>
    </Wrapper>

    <div className='mt-16'>

<Footer/>
</div>
    </>
    

  );
};

export default Page;
