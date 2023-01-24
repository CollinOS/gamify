import React from 'react'

const HomeHero = () => {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pt-24 pb-24">
      <h1 className="text-4xl font-bold">
        A dystopian future where human life is viewed as a game.
        Value is determined by your skill card. 
      </h1>
      <div className="p-4"/>
      <button className="border border-red-500 hover:bg-red-500 rounded-full p-2 w-24 duration-200">Create</button>
    </div>
  )
}

export default HomeHero