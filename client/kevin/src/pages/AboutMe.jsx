import React from 'react'
import Timeline from '../components/Timeline/Timeline'

function AboutMe() {
  return (
    <div className='px-12 md:px-48'>
        <div className='flex items-center py-6'>
            <p className='text-[32px] font-bold px-2'>Hey, I am Kevin!</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col justify-between p-2 gap-2 md:flex-row'>
                <p className='font-bold text-[18px]'>Who am I?</p>
                <p className='max-w-[600px] text-[16px] font-medium md:w-[600px]'>I'm a Photographer, Video Editor and interested in Visual Multimedia Design .</p>
            </div>

            <div className='flex flex-col justify-between p-2  gap-2 md:flex-row'>
                <p className='font-bold text-[18px]'>Education</p>
                <p className='max-w-[600px] text-[16px] font-medium'>I'm currently in my 2nd year studying Information System in Computer Science Faculty at UPN "Veteran" Jakarta</p>
            </div>

            <div className='flex flex-col justify-between p-2  gap-2 md:flex-row'>
                <p className='font-bold text-[18px]'>Experience</p>
                <p className='max-w-[600px] text-[16px] font-medium'>I have experience in the photography and videography fields as both a Photographer and Video Editor. Additionally, I possess experience in managing a team to ensure the success of events.</p>
            </div>

            <div className='flex flex-col justify-between p-2  gap-2 md:flex-row'>
                <p className='font-bold text-[18px]'>Freelance History</p>
                <div className='max-w-[600px] text-[16px] font-medium'>
                    <Timeline/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe