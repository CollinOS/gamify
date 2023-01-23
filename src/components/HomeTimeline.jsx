import React from 'react'

const HomeTimeline = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full max-w-2xl mx-auto pt-16 pb-16">
      <div className="absolute m-auto z-10 h-[550px] left-0 right-0 w-4 bg-gradient-to-t from-red-500 via-red-500 to-primary" />
      <div className="flex flex-row justify-end py-16 w-full">
        <div className="w-60">
          <p>First: You will generate your skill card. Remember, dishonest entries are not tolerated</p>
        </div>
      </div>
      <div className="flex flex-row justify-start py-16 w-full">
        <div className="w-60">
          <p>Next: AI will review your skills and place you in the working environment you qualify for.</p>
        </div>
      </div>
      <div className="flex flex-row justify-end py-16 w-full">
        <div className="w-60">
          <p>Then: You will be relocated to your new work location. Come back next year for your annual evaluation.</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-full">
        <div className="absolute h-6 w-6 bg-red-500 rounded-full animate-ping-slow" />
        <div className="h-6 w-6 bg-red-500 rounded-full" />
      </div>
      <div className="p-4" />
      <div className="flex flex-row justify-center items-center w-full">
        <p>Now go level up those skills!</p>
      </div>
    </div>
  )
}

export default HomeTimeline