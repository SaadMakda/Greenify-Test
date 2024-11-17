"use client";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Showcase() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-black dark:bg-neutral-900 overflow-hidden">
      <div className="flex flex-col min-h-screen pt-20 md:pt-40 max-w-7xl mx-auto">
        <motion.div
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
          className="flex justify-center"
        >
          <Badge>Join us in achieving sustainability goals</Badge>
        </motion.div>
        <motion.h1
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
          className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 text-white dark:text-gray-100"
        >
          Building a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-700">
            Greener
          </span>{" "}
          Future Together
        </motion.h1>
        <motion.p
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: 0.2,
          }}
          className="text-center mt-6 text-base md:text-xl text-neutral-400 max-w-3xl mx-auto relative z-10 dark:text-neutral-200"
        >
          Greenify helps you track and enhance your building’s sustainability
          efforts. Dive into insights, reduce your carbon footprint, and save
          costs with our intuitive tools.
        </motion.p>
        <motion.div
          initial={{
            y: 80,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: 0.4,
          }}
          className="flex items-center gap-4 justify-center mt-6 relative z-10"
        >
          <SplashButton className="flex space-x-2 items-center group">
            <span>Learn More</span>
            <HiArrowRight className="text-white group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200" />
          </SplashButton>
        </motion.div>
        <div className="p-4 border border-neutral-700 bg-neutral-900 rounded-[32px] mt-20 relative dark:bg-neutral-800">
          <div className="p-2 bg-neutral-900 border border-neutral-700 rounded-[24px]">
            <Image
              src="/map.png"
              alt="header"
              width={1920}
              height={1080}
              className="rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reuse SplashButton
const SplashButton = ({ children, className, ...rest }: any) => {
  return (
    <Link
      href="/dashboard"
      className={cn(
        "rounded-md bg-gradient-to-br from-green-400 to-green-700 px-4 py-2 text-zinc-50 ring-2 ring-green-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-green-500/70 dark:ring-green-500/70 dark:ring-offset-neutral-900 dark:text-neutral-900 dark:bg-green-300 dark:hover:bg-green-400",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

export const Badge: React.FC<
  { children: React.ReactNode } & React.ComponentPropsWithoutRef<"button">
> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-px text-[10px] sm:text-xs font-semibold leading-6 text-neutral-300 inline-block w-fit mx-auto dark:bg-neutral-800 dark:text-neutral-100"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-800 py-1.5 px-4 ring-1 ring-white/10 dark:ring-neutral-700">
        <span>{children}</span>
      </div>
    </button>
  );
};
