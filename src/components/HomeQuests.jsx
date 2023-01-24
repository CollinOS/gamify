import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleQuest } from "../redux/questSlice";
import { BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs';

const HomeQuests = () => {

  const quest = useSelector(state => state.quest);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-start max-w-2xl w-full mx-auto pt-24 pb-24">
      <h1 className="text-4xl font-bold">
        Quests
      </h1>
      <div className="p-2"/>
      <p>
        Daily and weekly quests are available to help you level up your skills. Users are incentivized 
        to complete quests by receiving rewards at the end of each month based on the amount of quests
        completed.
      </p>
      <div className="p-4"/>
      {/* DAILY QUESTS */}
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col p-4 border border-gray-400 hover:border-red-500 rounded-xl w-52 items-center justify-center hover:bg-secondary duration-200">
          <p className="font-bold">Daily</p>
          <div className="p-2" />
          <p className="text-center">This is some filler text explaining a daily quest that you should complete.</p>
          <div className="p-2" />
          <p>{quest}</p>
          <button 
            aria-label="Complete Quest"
            onClick={() => dispatch(toggleQuest())}
          >
            <BsCheckCircle className="h-8 w-8 text-gray-400 hover:text-amber-400 duration-200" />
          </button>
        </div>
        <div className="flex flex-col p-4 border border-gray-400 hover:border-red-500 rounded-xl w-52 items-center justify-center hover:bg-secondary duration-200">
          <p className="font-bold">Daily</p>
          <div className="p-2" />
          <p className="text-center">This is some filler text explaining a daily quest that you should complete.</p>
          <div className="p-2" />
          <button>
            <BsCheckCircle className="h-8 w-8 text-gray-400 hover:text-amber-400 duration-200" />
          </button>
        </div>
        <div className="flex flex-col p-4 border border-gray-400 hover:border-red-500 rounded-xl w-52 items-center justify-center hover:bg-secondary duration-200">
          <p className="font-bold">Daily</p>
          <div className="p-2" />
          <p className="text-center">This is some filler text explaining a daily quest that you should complete.</p>
          <div className="p-2" />
          <button>
            <BsCheckCircle className="h-8 w-8 text-gray-400 hover:text-amber-400 duration-200" />
          </button>
        </div>
      </div>
      <div className="p-3" />
      {/* WEEKLY QUEST */}
      <div className="flex flex-col justify-center items-center w-full border border-gray-400 hover:border-red-500 rounded-xl p-4 hover:bg-secondary duration-200">
        <p className="font-bold">Weekly</p>
        <div className="p-2" />
        <p className="text-center">
          This is some filler text explaining a daily quest that you should complete.
          This is some even cooler filler text explaining a daily quest that you should complete.
        </p>
        <div className="p-2" />
        <button>
          <BsCheckCircle className="h-8 w-8 text-gray-400 active:bg-amber-400 hover:text-amber-400 duration-200 rounded-full" />
        </button>
      </div>
    </div>
  )
}

export default HomeQuests