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
      <div className="p-4"/>
      <div className="bg-gradient-to-br from-red-500 via-gray-900 to-red-500 rounded-xl p-[1px] hover:drop-shadow-2xl duration-200">
        <div className="bg-primary p-3 rounded-xl flex flex-row justify-between">
          <p className="w-96">
            Strength
          </p>
          <p>
            Skills are broken up into [X] categories. Each skill is based out of 100. 
            This is some more text to see how it looks.
          </p>
        </div>
      </div>
      <div className="p-2"/>
      <div className="bg-gradient-to-br from-red-500 via-gray-900 to-red-500 rounded-xl p-[1px]">
        <div className="bg-primary p-3 rounded-xl flex flex-row justify-between">
          <p className="w-96">
            Wisdom
          </p>
          <p>
            Skills are broken up into [X] categories. Each skill is based out of 100. 
            This is some more text to see how it looks.
          </p>
        </div>
      </div>
      <div className="p-2"/>
      <div className="bg-gradient-to-br from-red-500 via-gray-900 to-red-500 rounded-xl p-[1px]">
        <div className="bg-primary p-3 rounded-xl flex flex-row justify-between">
          <p className="w-96">
            Agility
          </p>
          <p>
            Skills are broken up into [X] categories. Each skill is based out of 100. 
            This is some more text to see how it looks.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeHero