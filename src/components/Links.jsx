import React from 'react';

import { FaYoutube, FaGithub, FaDiscord, FaPinterest } from 'react-icons/fa';
import { FaSquareThreads, FaGitlab, FaMedium } from "react-icons/fa6";
import { SiHugo, SiUpptime, SiMyanimelist, SiCodeberg } from "react-icons/si";
import { BsGpuCard, BsReddit } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoMarkdown } from "react-icons/io5";

import { ReactSVG } from "react-svg";

const linksData = [

  { label: "Codeberg", url: "https://codeberg.org/UmmIt", icon: <SiCodeberg className="w-5 h-5 mr-2" />, alt: "@UmmIt" },
  { label: "Gitlab", url: "https://gitlab.com/UmmIt", icon: <FaGitlab className="w-5 h-5 mr-2" />, alt: "@UmmIt" },
  { label: "Github", url: "https://github.com/UmmItC", icon: <FaGithub className="w-5 h-5 mr-2" />, alt: "@UmmItC" },
  { label: "HackMD", url: "https://hackmd.io/@UmmIt", icon: <IoLogoMarkdown className="w-5 h-5 mr-2" />, alt: "@UmmIt" },
  { label: "Medium", url: "https://medium.com/@UmmIt", icon: <FaMedium className="w-5 h-5 mr-2" />, alt: "@UmmIt" }, 

  { label: "Librepay", url: "https://liberapay.com/UmmIt", icon: <ReactSVG src="/librepay.svg" className="w-5 h-5 mr-2" />, alt: "@UmmIt" }, 

  { label: "Personal Blog", url: "https://blog.ummit.dev", icon: <SiHugo className="w-5 h-5 mr-2" />, alt: "blog.ummit.dev" },
  { label: "InfoSec", url: "https://infosec.ummit.dev", icon: <SiHugo className="w-5 h-5 mr-2" />, alt: "infosec.ummit.dev" },
  { label: "GPU-Passthrough Docs", url: "https://github.com/UmmItC/GPU-Passthrough", icon: <BsGpuCard className="w-5 h-5 mr-2" />, alt: "In development"},
  { label: "Upptime Status", url: "https://status.ummit.dev", icon: <SiUpptime className="w-5 h-5 mr-2"/>, alt: "status.ummit.dev"},
 
  { label: "Instagram", url: "https://instagram.com/ltas.sh", icon: <BiLogoInstagramAlt className="w-5 h-5 mr-2" />, alt: "@ltas.sh" },
  { label: "Threads", url: "https://threads.net/ltas.sh", icon: <FaSquareThreads className="w-5 h-5 mr-2" />, alt: "@ltas.sh" },
  { label: "Reddit", url: "https://www.reddit.com/user/Ferry0087_RD/", icon: <BsReddit className="w-5 h-5 mr-2" />, alt: "u/Ferry0087_RD" },
  { label: "Discord", url: "", icon: <FaDiscord className="w-5 h-5 mr-2" />, alt: "@linuss17_" }, 
  { label: "Youtube", url: "https://youtube.com/@PonnBOuO", icon: <FaYoutube className="w-5 h-5 mr-2" />, alt: "@PonnBOuO" },
  
  { label: "MyAnimeList", url: "https://myanimelist.net/profile/lovepenguin/", icon: <SiMyanimelist className="w-5 h-5 mr-2" />, alt: "@lovepenguin" },
  { label: "Pinterest", url: "https://www.pinterest.com/gauging_shucking523/", icon: <FaPinterest className="w-5 h-5 mr-2" />, alt: "@gauging_shucking523" },
];

function Links() {
  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
      {linksData.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md px-4 py-2 text-gray-100 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-between"
        >
          <div className="flex items-center">
            {link.icon}
            <span className="ml-2">{link.label}</span>
          </div>
          <span className="text-gray-400 text-sm">{link.alt}</span>
        </a>
      ))}
    </div>
  );
}

export default Links;