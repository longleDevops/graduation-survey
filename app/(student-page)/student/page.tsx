import React from 'react'
import { AvailableSurvey } from './components/available-survey'
import { CompletedSurvey } from './components/completed-survey'
import { Plus, Search } from 'lucide-react'
import { RequestBtn } from './components/request-btn'

const StudentPage = () => {
  return (
    <div className='bg-[#f8f8fb] h-full pt-8 px-10 relative'>
      <p className='text-lg font-semibold'>Student Dashboard</p>
      <RequestBtn />
      <div className='pt-6 space-y-8'>
        <AvailableSurvey />
        <CompletedSurvey />
      </div>
    </div>
  )
}

export default StudentPage