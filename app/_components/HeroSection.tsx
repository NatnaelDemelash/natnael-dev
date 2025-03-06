// import { ChevronRight, Download } from 'lucide-react';
import { ChevronRight, Download } from 'lucide-react';
import ShinyButton from './ui/ShinyButton';
import Link from 'next/link';
import { TextGenerateEffect } from './ui/TextGenerate';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div
        className="pb-20 pt-36 sm:p-0 sm:min-h-screen flex flex-col items-center justify-center relative"
        id="#home"
      >
        <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-md mb-6 mt-3">
          <Image
            src="/imgs/profile.jpeg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center relative z-10 text-center">
          <p className="uppercase font-bold text-sm tracking-widest">
            Based In Addis Ababa, Ethiopia
          </p>
          {/* <h1 className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-tight tracking-wide">
            Quality Design &{" "}
            <span className="text-primary">Web Development</span> Synergy
            Building modern web applications with creativity and precision.
          </h1> */}
          <TextGenerateEffect
            words="Building Modern Web Applications With Creativity"
            className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide"
          />
          <p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-dark-200 dark:text-stone-200/70">
            Hi👋, I&apos;m Natnael, I create intuitive, visually stunning and
            highly functional web applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ShinyButton icon={<ChevronRight />}>
              <Link href="#work">See My Work</Link>
            </ShinyButton>
            <a
              href="/resume/CV_en.pdf"
              download
              className="flex items-center gap-2.5 group"
            >
              <Download className="text-primary" />
              <span className="group-hover:text-white/70 transition-colors duration-200 font-semibold">
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
