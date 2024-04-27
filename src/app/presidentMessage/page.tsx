"use client"
import React from 'react'
import Wrapper from '../components/Wrapper'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

let paraData = [
    {para: "At IMG, we believe that our employees are at the core of our success and are therefore our most important asset. The professionalism and work quality of our diverse technical teams led Army leadership to coin the phrase “the IMG standard.” Our people are a committed, competent, capable, and self-motivated team of talented men and women. Our thought leaders are trusted sources who move and inspire our personnel to always be learning, take ownership, and demonstrate integrity. Our core values of respect, commitment, integrity, ownership, teamwork, diversity, and learning are evident in every action we take. Valuing diversity, equal employment opportunity and affirmative action maintains our culture of valuing the “whole person” and providing a team of highly skilled and dedicated professionals. "},
    {para: "IMG’s employment policies encourage and support equal employment opportunity for all employees and applicants for employment. Decisions are made without regard to sex, race, color, ancestry, religious creed, national origin, age, physical disability, mental disability, medical condition, sexual orientation, marital status, gender identify, transgender status, genetic information, protected veteran status, service in the Uniformed Services of the U.S., or any other protected class under relevant law. Employment decisions will be evaluated based on the individual’s skills, knowledge, abilities, job performance and other legitimate qualifications, such as seniority. Equal Employment Opportunity is one of the very highest priorities for IMG. "},
    {para: "Affirmative action and equal employment opportunity affects all employment practices at IMG including recruiting, hiring, transfer, promotion, training, compensation, benefits, discipline and termination of employment. Equal opportunity must be part of the fabric of all personnel decisions at the IMG. Successful performance on our affirmative action goals will provide benefits to the company to the full utilization and development of previously underutilized human resources. "},
    {para: "Harassment of any kind, including sexual harassment and racial harassment is strictly prohibited. Complaints of harassment will be investigated rapidly and thoroughly and employees who are found to have behaved in such a way will be disciplined, including the possibility of dismissal from the payroll. Harassment is considered a serious behavior problem and will not be tolerated at IMG. If you have a complaint of harassment, you may do so confidentially and without fear of retaliation. Retaliation for filing a complaint of discrimination of any kind is not permitted and will not be tolerated. "},
    {para: "As President of IMG, I fully embrace diversity and collaborative teamwork and I support the principles of equal employment opportunity and affirmative action. Management personnel at every level must share in the responsibility for promoting affirmative action and equal employment opportunity to ensure that our goals of diversity continue to provide the best services to our customers. "},
]

const Page = () => {

    let {back} = useRouter()
  return (
   <Wrapper>

<div className='md:px-11 pt-8 '>
        <h2 className='text-[22px]/[1.29] about8:text-3xl font-bold who1:text-5xl mb-5'>Message from the President</h2>
   
        {
            paraData.map((item,key) => {
                return(
                    <p key={item.para} className='who1:text-[16px] text-[12px]/[1.29] about8:text-[13px] py-4 text-gray-500'>{item.para}</p>
                )
            })
        }
        <div className='flex flex-col  font-serif text-xl sm:text-3xl text-gray-400 items-end'>
        <p>Kevin Keyes</p>
        <div className='flex justify-start'>
            <p className=' text-left pr-[1.4rem] sm:pr-8'>President</p>
        </div>
        
      
        </div>
        <Button className='mb-44 py-2 px-9' onClick={() => back()}>Go Back</Button>
    </div>
   </Wrapper>
  )
}

export default Page
