"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center h-[40rem]">
      <p className="text-neutral-600 text-xs sm:text-base dark:text-neutral-200">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex md:flex-row flex-col space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <button className="dark:border-white bg-black border border-transparent rounded-xl w-40 h-10 text-sm text-white">
          Join now
        </button>
        <button className="bg-white border border-black rounded-xl w-40 h-10 text-black text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
export default TypewriterEffectSmoothDemo;

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center h-[40rem]">
      <p className="mb-10 text-base text-neutral-600 dark:text-neutral-200">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex md:flex-row flex-col space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-10">
        <button className="dark:border-white bg-black border border-transparent rounded-xl w-40 h-10 text-sm text-white">
          Join now
        </button>
        <button className="bg-white border border-black rounded-xl w-40 h-10 text-black text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
