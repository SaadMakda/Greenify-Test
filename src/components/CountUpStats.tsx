'use client'

import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const CountUpStats = () => {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
        <h2 className="mb-8 text-center text-base sm:text-lg md:mb-16 bg-gradient-to-b from-stone-50 to-stone-100 bg-clip-text text-transparent">
          Track your carbon footprint
          <span className="text-green-500"> with our software</span>
        </h2>

        <div className="flex flex-col items-center justify-center sm:flex-row">
          <Stat
            num={95}
            suffix="%"
            subheading="Property sustainability score"
          />
          <div className="h-[1px] w-12 bg-green-700 sm:h-12 sm:w-[1px]" />
          <Stat
            num={500}
            suffix="M+"
            subheading="Dollars saved in energy costs"
          />
          <div className="h-[1px] w-12 bg-green-700 sm:h-12 sm:w-[1px]" />
          <Stat
            num={30}
            suffix="M+"
            subheading="Pounds of CO2 emissions reduced"
          />
        </div>
      </div>
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl text-white">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-white">{subheading}</p>
    </div>
  );
};

export default CountUpStats;