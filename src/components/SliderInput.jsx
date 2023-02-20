import React from "react";

export default function Input({
  label,
  value,
  set,
}) {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full pb-8">
      <p>{label}</p>
      <label className="flex justify-center items-center w-full">
        <input
          className="rounded-lg overflow-hidden appearance-none bg-secondary h-4 w-full cursor-pointer"
          value={value}
          type="range"
          min="0"
          max="100"
          onChange={(e) => set(parseFloat(e.target.value))}
        />
        <input className="accent-red-500 bg-primary ml-2"
          type="number"
          value={value}
          min="0"
          max="100"
          onChange={(e) => set(parseFloat(e.target.value) || 0)}
        />
      </label>
    </div>
  );
}