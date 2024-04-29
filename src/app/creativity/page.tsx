"use client"
import React from 'react'
import Wrapper from '../components/Wrapper'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'



const Page = () => {

    let {back} = useRouter()
  return (
   <Wrapper>

<div className='md:px-11 pt-8 '>
        <h2 className='text-[22px]/[1.29] about8:text-3xl font-bold who1:text-5xl mb-5'>Diversity, Creativity, Synergy, and Innovation</h2>
   
  <p  className='who1:text-[16px]/[1.59] text-[12px]/[1.29] about8:text-[13px]  about6:pt-4  pb-4 text-gray-500'>We believe diversity drives innovation. We value the “whole person.” Our people provide Information Technology, Information Assurance, Logistics, and Visual Communication services to our customers. Visual Communication services to our customers. Our workforce is made up of people of diverse cultural backgrounds, with diverse personal and professional experiences, diverse beliefs, diverse thoughts and diverse ideas. It is our belief that by encouraging an inclusive environment throughout all levels of our organization, we will bring together the unique characteristics of our employees. Our people are team-focused and problem-solvers, not shackled by unilateral vision but liberated by collaborative synergy. The resulting environment promotes innovation and thereby improves our “customer experience” as well as our employee experience. Creativity is driven by approaching a task from varying perspectives and angles. The best solutions are often derived from examining the problem from all angles in order to develop complete understanding before taking direct action. Daily, personnel at all levels of our organization practice this belief. We encourage the free-exchange of ideas through “thought leadership” meetings and we facilitate interdepartmental communication, as well as cross training. Diverse thought is captured through these communication channels and influences performance throughout Information Management Group, Inc.’s services.</p>
                
        
      
     
        <Button className='mb-44 py-2 px-9' onClick={() => back()}>Go Back</Button>
    </div>
   </Wrapper>
  )
}

export default Page
