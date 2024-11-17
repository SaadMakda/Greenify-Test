"use client";

import { Vanish } from "./Vanish"; 

export default function VanishPrompt() {
  const placeholders = [
    "How can I reduce energy consumption in office buildings?",
    "Any ways to cut carbon for our property immediately?",
    "How can we track and improve a building's carbon footprint?",
    "What are the cost-saving benefits of using renewable energy?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-[20rem] flex flex-col justify-center items-center px-4 bg-black">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl text-white">
        Ask <span className="text-green-500">Greenify</span> anything
      </h2>
      <Vanish
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        className="bg-black text-white placeholder-gray-400" 
      />
    </div>
  );
}