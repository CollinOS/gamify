import React from 'react';
import { NavLink } from "react-router-dom";

export default function Root() {

  return (
  <main className="flex flex-col justify-center items-center h-screen w-screen px-8 bg-primary">
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold">
        A dystopian future where human life is viewed as a game.
        Press start to begin your journey.
      </h1>
      <div className="p-4"/>
      <NavLink to="/">
        <button className="border border-red-500 hover:bg-red-500 rounded-full p-2 w-24 duration-200">Start</button>
      </NavLink>
    </div>
  </main>
  )
}
