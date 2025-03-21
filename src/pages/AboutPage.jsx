import React from 'react';
import { FaCode, FaServer, FaMapMarkerAlt } from 'react-icons/fa';
import { SiArchlinux } from 'react-icons/si';
import { MdOutlineSecurity } from "react-icons/md";

function About() {
  return (
    <div className="pt-24 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      
      <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/30 hover:border-myPink1 transition-all duration-300 hover:shadow-lg hover:shadow-myPink1/20 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-32 h-32 overflow-hidden rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
            <img 
              src="/cute.jpg" 
              alt="Profile of UmmIt" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-2 text-myPink1">UmmIt</h2>
            
            <div className="flex items-center mb-4 text-gray-300">
              <FaMapMarkerAlt className="mr-2 text-myPink1" />
              <span>Hong Kong, College Student</span>
            </div>
            
            <p className="text-gray-300 mb-6">
              A quirky tech geek, Arch Linux user, and open-source lover from Hong Kong. 
              I'm a cyber student with a hobby in hacking and penetration testing. 
              I enjoy working on various tech projects, particularly focusing on GNU/Linux systems, and cybersecurity.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-3 bg-gray-700/30 rounded-lg">
                <SiArchlinux className="text-3xl text-myPink1 mb-2" />
                <span className="text-center">Arch Linux</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-700/30 rounded-lg">
                <FaCode className="text-3xl text-myPink1 mb-2" />
                <span className="text-center">Open Source</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-700/30 rounded-lg">
                <FaServer className="text-3xl text-myPink1 mb-2" />
                <span className="text-center">Homelab</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-700/30 rounded-lg">
                <MdOutlineSecurity className="text-3xl text-myPink1 mb-2" />
                <span className="text-center">Cybersecurity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
