import Profile from "./assets/profile.jpeg";
// Tech Stack
import Dart from './assets/Dart.png';
import DBeaver from './assets/DBeaver.png';
import Express from './assets/Express.png';
import FastApi from './assets/FastAPI.png';
import Flutter from './assets/Flutter.png';
import Git from './assets/Git.png';
import Github from './assets/GitHub.png';
import JavaScript from './assets/JavaScript.png';
import Linux from './assets/Linux.png';
import React from './assets/React.png';
import Tailwind from './assets/Tailwind.png';
// -------- end

import mobDevIcon from './assets/mobile-development.png';
import dev from './assets/development.png'
import { useState } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

function App() {
  const [copied, setCopied] = useState(false);

  const images = [
    Dart,
    DBeaver,
    Express,
    FastApi,
    Flutter,
    Git,
    Github,
    JavaScript,
    Linux,
    React,
    Tailwind
  ];
  const services = [
    {
      title: "UX & UI",
      icon: mobDevIcon,
      desc: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    },
    {
      title: "Web & Mobile App",
      icon: mobDevIcon,
      desc: "Transforming ideas into exceptional web and mobile app experiences.",
    },
    {
      title: "Design & Creative",
      icon: dev,
      desc: "Crafting visually stunning designs that connect with your audience.",
    },
    {
      title: "Development",
      icon: mobDevIcon,
      desc: "Bringing your vision to life with the latest technology and design trends.",
    },
  ];


  const handleCopy = () => {
    navigator.clipboard.writeText('vishnu.praaksh@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reduced from 6s to 2s for better UX
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 select-none font-outfit">
      <div
        style={{
          backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
          opacity: 0.05,
          top: '-200%',
          right: '-200%',
          bottom: '-200%',
          left: '-200%',
          width: '400%',
          height: '400%',
          position: 'absolute',
          willChange: 'transform',
          transform: 'translateX(-10%) translateY(10%)',
          zIndex: 0,
        }}
      />

      <div className="relative min-h-screen">
        <div className="h-[105vh] flex flex-col bg-white rounded-bl-[70px] rounded-br-[70px] md:rounded-bl-[105px] md:rounded-br-[105px] lg:rounded-bl-[105px] lg:rounded-br-[105px] border border-gray-300">
          <div className=" relative h-[80vh] overflow-hidden  border border-gray-300 rounded-bl-[70px] rounded-br-[70px] md:rounded-bl-[105px] md:rounded-br-[105px] lg:rounded-bl-[105px] lg:rounded-br-[105px]">
            {/* Custome Background */}
            <div
              style={{
                backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
                opacity: 0.05,
                top: '-200%',
                right: '-200%',
                bottom: '-200%',
                left: '-200%',
                width: '400%',
                height: '400%',
                position: 'absolute',
                willChange: 'transform',
                transform: 'translateX(-10%) translateY(10%)',
                zIndex: 0,
              }}
            />
            <div className="relative h-[80vh] z-10 ">
              {/* Header for mobile */}
              <div className="flex md:hidden lg:hidden flex-row h-[15%] items-center justify-between px-1">
                <div className="flex flex-row h-10 w-max text-black items-center pl-4 pr-[2px] rounded-full">
                  <button
                    onClick={handleCopy}
                    className={`bg-white rounded-[18px] px-6 py-2 text-[12px] font-medium mr-2 transition-all duration-300 ${copied ? 'bg-white text-black font-outfit' : ''
                      }`}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button className="bg-white rounded-[18px] px-6 py-2 text-[12px] font-medium hover:underline">CV</button>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center pr-4">
                  {/* Linkedin */}
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full bg-black focus:outline-none flex items-center justify-center"
                    onClick={() => window.open('https://www.linkedin.com/in/vishnupraksh', '_blank')}
                    aria-label="Open LinkedIn"
                  >
                    <BsLinkedin color="white" width={20} height={20} />
                  </button>
                  {/* Instagram */}
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full bg-black focus:outline-none flex items-center justify-center"
                    onClick={() => window.open('https://www.instagram.com/_im_vishn_u', '_blank')}
                    aria-label="Open Instagram"
                  >
                    <BsInstagram color="white" width={20} height={20} />
                  </button>
                  {/* Twitter */}
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full bg-black focus:outline-none flex items-center justify-center"
                    onClick={() => window.open('https://x.com/_im_vishn_u', '_blank')}
                    aria-label="Open TwitterX"
                  >
                    <BsTwitterX color="white" width={20} height={20} />
                  </button>
                </div>
              </div>
              {/* Header Section  for Tab and Laptop*/}
              <div className="hidden md:flex lg:flex flex-row h-[15%] items-center justify-between px-11">
                <div className="flex flex-row h-10 w-max border border-gray-300/50 text-black items-center pl-4 pr-[2px] rounded-full bg-gray-100/50">
                  <span className="font-outfit text-sm font-light mr-3">vishnu.praaksh@gmail.com</span>
                  <button
                    onClick={handleCopy}
                    className={`bg-white rounded-[18px] px-6 py-2 text-[12px] font-medium mr-2 transition-all duration-300 ${copied ? 'bg-white text-black font-outfit' : ''
                      }`}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button className="bg-white rounded-[18px] px-6 py-2 text-[12px] font-medium hover:underline">CV</button>
                </div>
                <div className="flex flex-row font-outfit font-light">
                  <a className="hover:underline text-[14px] mr-1" href="https://www.instagram.com/_im_vishn_u">Instagram</a>
                  <span className="mr-1 text-[14px]"> / </span>
                  <a className="hover:underline text-[14px] mr-1" href="https://www.linkedin.com/in/vishnupraksh">Linkedin</a>
                  <span className="mr-1 text-[14px]">/</span>
                  <a className="hover:underline text-[14px] mr-1" href="https://x.com/_im_vishn_u">Twitter</a>
                </div>
              </div>
              {/* Main Content */}
              <div className="flex flex-col h-[60%] justify-center items-center gap-[60px]">
                {/* Profile */}
                <div className="relative flex items-center justify-center h-[22%]">
                  <div className="overflow-hidden h-[130px] w-[130px] rounded-full">
                    <img src={Profile} alt="Profile" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute bg-white w-max h-12 ml-[180px] rounded-full -rotate-12 flex items-center justify-center px-3 animate-[bounce_7s_infinite]">
                    <div className="font-outfit text-[14px] text-black">Vishnu Prakash</div>
                  </div>
                </div>
                {/* Headline */}
                <div className='flex justify-center font-outfit text-3xl md:text-5xl lg:text-5xl'>
                  <div className="text-center font-medium">
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-black via-black/55 to-black/55">
                      Building digital<br />
                      products, brands, and<br />
                      experience.
                    </span>
                  </div>
                </div>
              </div>
              {/* Github Button */}
              <div className="flex w-full justify-center items-center">
                <button className="bg-black px-7 py-4 rounded-full">
                  <a
                    href="https://github.com/v-ishnu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-outfit hover:underline flex items-center gap-2"
                  >
                    <BsGithub className="text-lg" />
                    <span>Github</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* Marquee Section */}
          <div className="relative w-full overflow-hidden py-10">
            <div className="flex justify-center">
              <span className="font-outfit">
                Tech Stack
              </span>
            </div>
            <div className="flex animate-marquee pt-10 items-center">
              {[...images, ...images].map((img, index) => (
                <div key={index} className="inline-flex items-center justify-center mx-4">
                  <div className="h-[40px] w-[140px] rounded-full overflow-hidden flex items-center justify-center">
                    <img
                      src={img}
                      alt={`Tech stack ${index % images.length}`}
                      className="h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Service Section */}
        <div className="flex flex-col relative justify-center items-center h-full w-full py-24 gap-[60px]">
          <div className="w-full max-w-3xl md:max-w-[50%] lg:max-w-[35%] px-4 text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black via-black/55 to-black/55">
              Collaborate with brands and agencies to create impactful results.
            </h2>
          </div>
          {/* Divider */}
          <div className="relative flex w-full h-[1px] bg-gray-300 justify-center items-center">
            <div className="absolute justify-center px-7 py-4 bg-white z-10 rounded-full -rotate-[15deg]">
              <span className="font-outfit text-[12px]">Services</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-5">
            {services.map((service, idx) => (
              <div key={idx} className="flex md:max-w-[70%] lg:max-w-[40%] flex-col items-start justify-items-center gap-2">
                {/* SVG Icon */}
                <img src={service.icon} alt="icon" className="w-9 h-10 shrink-0" />
                {/* Text Block */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border-t border-gray-300 rounded-tl-[70px] rounded-tr-[70px] lg:rounded-tl-[6.5625rem] lg:rounded-tr-[6.5625rem] pt-16 pb-8 md:pt-24 px-4">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white mb-8">
              <img
                src={Profile}
                alt="Vishnu Prakash"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[56px] font-semibold leading-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-black via-black/55 to-black/55 mb-10 px-4">
              Tell me about your next project
            </h2>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href="mailto:vishnu.praaksh@gmail.com"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full transition-colors text-sm md:text-base"
              >
                Email Me
              </a>
              <a
                href="https://wa.me/"
                className="bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-black px-8 py-4 rounded-full transition-colors text-sm md:text-base"
              >
                WhatsApp
              </a>
            </div>
            {/* Divider */}
            <div className="w-full max-w-4xl border-t border-gray-300/50 pb-2" />
            {/* Footer */}
            <div className="w-full max-w-4xl flex flex-col md:flex-row lg:flex-row justify-between items-center space-y-2">
              <div className="font-outfit text-sm text-gray-600">
                © {new Date().getFullYear()} All rights reserved.
              </div>
              <div className="flex flex-row items-center font-outfit font-light text-sm space-x-2">
                <a
                  href="https://www.instagram.com/_im_vishn_u"
                  className="text-gray-600 hover:text-black hover:underline transition-colors"
                >
                  Instagram
                </a>
                <span className="text-gray-400">/</span>
                <a
                  href="https://www.linkedin.com/in/vishnupraksh"
                  className="text-gray-600 hover:text-black hover:underline transition-colors"
                >
                  Linkedin
                </a>
                <span className="text-gray-400">/</span>
                <a
                  href="https://x.com/_im_vishn_u"
                  className="text-gray-600 hover:text-black hover:underline transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
