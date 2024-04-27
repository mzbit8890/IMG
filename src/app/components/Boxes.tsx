import Image from "next/image"
import first from "@../../../public/vavtpt2.jpg"
import Link from "next/link"

let boxes = [
    {
        id:1,
        image1: "/vavtpt8.jpg",
        link: "https://dvsv3.com/"

    },
    {
        id:2,
        image1: "/DoD-SkillBridge22.jpg",
        link: "https://skillbridge.osd.mil/"
    },
]

let smallBoxes1 = [
    {
        id:1,
        image1: "/HireVet.png",
        link: "https://www.hirevets.gov/awardees_table?created=2&field_application_type_value%5B2%5D=2&field_application_type_value_1%5B1%5D=1&field_employer_name_value=&field_employer_state_value=47"
    },
    {
        id:2,
        image1: "/HVMPD-gold_2023.png",
        link: "https://www.hirevets.gov/awardees_table?created=1&field_application_type_value%5B2%5D=2&field_application_type_value_1%5B1%5D=1&field_employer_name_value=&field_employer_state_value=47"
    },
    {
        id:3,
        image1: "/WBJ2022.png",
        link: "https://dvsv3.com/"
    },
    {
        id:4,
        image1: "/Wbg.png",
        link: "https://dvsv3.com/"
    },
    {
        id:5,
        image1: "/2023.png",
        link: "https://vetsindexes.com/award-results-2023/"
    },

]


const Boxes = () => {
  return (
    <div>
      <div className="flex-col mt-24 ">
<div>
    {
        boxes.map((item, key) => {
            return (
                <div key={item.id} className=" p-4 flex-col ">
                    <div className="border border-black/20 hover:shadow-2xl hover:border-white hover:bg-white w-[560px] h-40 mb-4 flex justify-center items-center">
                        <Link href={item.link}>
                            <Image src={item.image1} alt="" className="h-[150px] object-fill" width={600} height={300} />
                        </Link>
                    </div>

                </div>

            )
        })
    }
</div>
<div className="w-2/2 grid grid-cols-2 ">
    {
        smallBoxes1.slice(0, 6).map((item, key) => {
            return (
                <div key={item.id}>
                    <div  className="flex flex-row p-4">
                        <div className="   flex gap-7">
                            <div className="border border-black/20 hover:shadow-2xl hover:bg-white hover:border-white w-[260px] h-40 mb-4 flex justify-center items-center">
                                <Link href={item.link}>
                                    <Image src={item?.image1} alt="" className="h-[160px] object-fill" width={170} height={300} />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            )
        })
    }
</div>
</div>

    </div>
  )
}

export default Boxes
