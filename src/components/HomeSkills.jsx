import React from 'react'

const HomeHero = () => {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-purple-800 mx-auto pt-16 pb-16">
      <h1 className="text-4xl font-bold">
        Skills
      </h1>
      <div className="p-2"/>
      <p>
        Skills are broken up into [X] categories. Each skill is based out of 100. 
        This is some more text to see how it looks.
      </p>
      <div className="p-2"/>
      <div className="flex flex-row">
        {/* SKILL NAMES */} 
        <div className="flex flex-col">
          <p>Strength</p>
          <p>Strength</p>
        </div>
        {/* SKILL DESCRIPTIONS */}
        <div className="flex flex-col">
          <p>Skills are broken up into [X] categories. Each skill is based out of 100. 
        This is some more text to see how it looks.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeHero