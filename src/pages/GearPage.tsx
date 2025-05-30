import React, { useState } from 'react';
import { FaLaptop, FaKeyboard, FaDesktop, FaServer, FaMemory, FaMicrochip, FaHdd, FaPowerOff, FaFan, FaLinux, FaChair, FaMouse, FaHeadphones } from 'react-icons/fa';
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { DiLinux } from "react-icons/di";
import { BsMotherboard, BsGpuCard } from "react-icons/bs";
import { BiSolidCog } from "react-icons/bi";
import { PiDesktopTowerDuotone } from "react-icons/pi";

interface GearItem {
  name: string;
  value: string;
  icon: React.ReactNode;
  image?: string;
}

interface GearCategory {
  title: string;
  icon: React.ReactNode;
  items: GearItem[];
}

const GearPage: React.FC = () => {
  const [showImages, setShowImages] = useState(false);

  const toggleView = () => {
    setShowImages(!showImages);
  };

  const gearCategories: GearCategory[] = [
    {
      title: "Desktop (Triple Boot with three GNU/Linux)",
      icon: <FaDesktop className="text-primary text-2xl" />,
      items: [
        { 
          name: "Motherboard",
          value: "Gigabyte B760M GAMING X", 
          icon: <BsMotherboard className="text-primary text-lg" />,
          image: "/img/gear/motherboard.webp"
        },
        { 
          name: "CPU",
          value: "Intel i5-13600K", 
          icon: <FaMicrochip className="text-primary text-lg" />,
          image: "/img/gear/cpu.webp"
        },
        { 
          name: "GPU",
          value: "Sapphire RX 6650 XT 8GB", 
          icon: <BsGpuCard className="text-primary text-lg" />,
          image: "/img/gear/gpu.webp" 
        },
        { 
          name: "GPU-2", 
          value: "PowerColor RX 6600 8GB", 
          icon: <BsGpuCard className="text-primary text-lg" />,
          image: "/img/gear/gpu2.webp" 
        },
        { 
          name: "RAM", 
          value: "ADATA XPG 64GB", 
          icon: <FaMemory className="text-primary text-lg" />,
          image: "/img/gear/ram.webp"
        },
        { 
          name: "NVMe SSD", 
          value: "Kingston KC3000 2TB", 
          icon: <FaHdd className="text-primary text-lg" />,
          image: "/img/gear/nvme.webp"
        },
        { 
          name: "SATA SSD", 
          value: "Toshiba MG08 4TB", 
          icon: <FaHdd className="text-primary text-lg" />,
          image: "/img/gear/ssd.webp"
        },
        { 
          name: "Power Supply", 
          value: "ADATA 850W Gold", 
          icon: <FaPowerOff className="text-primary text-lg" />,
          image: "/img/gear/psu.webp"
        },
        { 
          name: "Case", 
          value: "GIGABYTE C200", 
          icon: <PiDesktopTowerDuotone className="text-primary text-lg" />,
          image: "/img/gear/case.webp"
        },
        { 
          name: "Cooler", 
          value: "Thermalright Aqua Elite 240", 
          icon: <FaFan className="text-primary text-lg" />,
          image: "/img/gear/cooler.webp"
        },
        { 
          name: "Fans", 
          value: "Thermalright TL-C12C x3", 
          icon: <FaFan className="text-primary text-lg" />,
          image: "/img/gear/fans.webp"
        },
        { 
          name: "Operating System", 
          value: "GNU/Linux", 
          icon: <FaLinux className="text-primary text-lg" />,
          image: "/img/gear/linux.webp"
        },
        { 
          name: "Distribution", 
          value: "Arch Linux / Gentoo / NixOS", 
          icon: <DiLinux className="text-primary text-lg" />,
          image: "/img/gear/distros.webp"
        },
        { 
          name: "Dynamic Window Manager", 
          value: "Hyprland", 
          icon: <BiSolidCog className="text-primary text-lg" />,
          image: "/img/gear/hyprland.webp"
        },
        { 
          name: "Desktop Environment", 
          value: "KDE Plasma", 
          icon: <BiSolidCog className="text-primary text-lg" />,
          image: "/img/gear/kde.webp"
        },
      ]
    },
    {
      title: "Laptop (Dual Boot with two GNU/Linux)",
      icon: <FaLaptop className="text-primary text-2xl" />,
      items: [
        { 
          name: "Device", 
          value: "HP Pavilion Aero 13 (Ryzen 7, Sky Blue)", 
          icon: <FaLaptop className="text-primary text-lg" />,
          image: "/img/gear/laptop.webp" 
        },
        { 
          name: "CPU", 
          value: "AMD Ryzen 7-8840U Processor", 
          icon: <FaMicrochip className="text-primary text-lg" />,
          image: "/img/gear/ryzen.webp" 
        },
        { 
          name: "iGPU", 
          value: "AMD Radeon Graphics", 
          icon: <BsGpuCard className="text-primary text-lg" />,
          image: "/img/gear/radeon.webp" 
        },
        { 
          name: "RAM", 
          value: "On-Board 16GB LPDDR5x", 
          icon: <FaMemory className="text-primary text-lg" />,
          image: "/img/gear/laptop-ram.webp" 
        },
        { 
          name: "NVMe SSD", 
          value: "1TB PCIe NVMe M.2 SSD", 
          icon: <FaHdd className="text-primary text-lg" />,
          image: "/img/gear/laptop-nvme.webp" 
        },
        { 
          name: "Opearting System", 
          value: "GNU/Linux", 
          icon: <FaLinux className="text-primary text-lg" />,
          image: "/img/gear/linux.webp" 
        },
        { 
          name: "Distribution", 
          value: "Arch Linux / Kali Linux", 
          icon: <DiLinux className="text-primary text-lg" />,
          image: "/img/gear/arch-kali.webp" 
        },
        { 
          name: "Dynamic Window Manager", 
          value: "Hyprland", 
          icon: <BiSolidCog className="text-primary text-lg" />,
          image: "/img/gear/hyprland.webp" 
        },
        { 
          name: "Desktop Environment", 
          value: "KDE Plasma", 
          icon: <BiSolidCog className="text-primary text-lg" />,
          image: "/img/gear/kde.webp" 
        },
      ]
    },
    {
      title: "Peripherals",
      icon: <FaKeyboard className="text-primary text-2xl" />,
      items: [
        { 
          name: "Keyboard", 
          value: "MSI GK20 Gaming Keyboard", 
          icon: <FaKeyboard className="text-primary text-lg" />,
          image: "/img/gear/keyboard.webp" 
        },
        { 
          name: "Mouse", 
          value: "Logitech G502 X Wired Gaming Mouse - Black", 
          icon: <FaMouse className="text-primary text-lg" />,
          image: "/img/gear/mouse.webp" 
        },
        { 
          name: "Chair", 
          value: "Cooler Master CALIBER X2 - Grey", 
          icon: <FaChair className="text-primary text-lg" />,
          image: "/img/gear/chair.webp" 
        },
        { 
          name: "Headphones", 
          value: "Pixel Buds Pro 2", 
          icon: <FaHeadphones className="text-primary text-lg" />,
          image: "/img/gear/headphones.webp" 
        },
      ]
    },
    {
      title: "Homelab",
      icon: <FaServer className="text-primary text-2xl" />,
      items: [
        { 
          name: "Server", 
          value: "Raspberry Pi 4B", 
          icon: <FaServer className="text-primary text-lg" />,
          image: "/img/gear/raspberry.webp" 
        },
        { 
          name: "RAM", 
          value: "8GB LPDDR4-3200 SDRAM", 
          icon: <FaMemory className="text-primary text-lg" />,
          image: "/img/gear/pi-ram.webp" 
        },
        { 
          name: "Storage", 
          value: "microSD 128GB", 
          icon: <FaHdd className="text-primary text-lg" />,
          image: "/img/gear/microsd.webp" 
        },
        { 
          name: "OS", 
          value: "OpenWrt", 
          icon: <FaLinux className="text-primary text-lg" />,
          image: "/img/gear/openwrt.webp" 
        },
      ]
    },
    {
      title: "Mobile Devices",
      icon: <HiMiniDevicePhoneMobile className="text-primary text-2xl" />,
      items: [
        { 
          name: "Device", 
          value: "Googel Pixel 6A", 
          icon: <HiMiniDevicePhoneMobile className="text-primary text-lg" />,
          image: "/img/gear/pixel.webp" 
        },
        { 
          name: "RAM", 
          value: "8GB", 
          icon: <FaMemory className="text-primary text-lg" />,
          image: "/img/gear/phone-ram.webp" 
        },
        { 
          name: "Storage", 
          value: "128GB", 
          icon: <FaHdd className="text-primary text-lg" />,
          image: "/img/gear/phone-storage.webp" 
        },
        { 
          name: "OS", 
          value: "Graphene OS", 
          icon: <FaLinux className="text-primary text-lg" />,
          image: "/img/gear/graphene.webp" 
        },
      ]
    }
  ];

  return (
    <div className="pt-24 px-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-center flex-grow">
          UmmIt Gears <DiLinux className="text-primary text-4xl inline-block mb-1" /> :)
        </h1>
        <div className="flex items-center">
          <span className="mr-2 text-white">Text</span>
          <div className="relative inline-block w-12 h-6 transition duration-200">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0"
              checked={showImages}
              onChange={toggleView}
            />
            <span 
              onClick={toggleView} 
              className={`absolute cursor-pointer inset-0 rounded-full ${
                showImages ? 'bg-primary' : 'bg-gray-700'
              }`}
            >
              <span 
                className={`absolute w-5 h-5 bg-white rounded-full transition-transform duration-200 transform ${
                  showImages ? 'translate-x-6' : 'translate-x-1'
                } top-0.5`}
              ></span>
            </span>
          </div>
          <span className="ml-2 text-white">Images</span>
        </div>
      </div>
      <p className="text-center text-white mb-8">These are the gears I use for my daily life and work. Without them, I Probably not here :)</p>
      
      <div className="space-y-8">
        {gearCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="flex items-center mb-4">
              {category.icon}
              <h2 className="text-2xl font-bold ml-3 text-white">{category.title}</h2>
            </div>
            
            {showImages ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-gray-900/60 rounded-lg p-4 flex flex-col items-center text-center hover:bg-gray-800/80 transition-all"
                  >
                    <div className="w-full h-40 mb-3 overflow-hidden rounded-lg bg-gray-700/50 flex items-center justify-center">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              const placeholderDiv = document.createElement('div');
                              placeholderDiv.className = 'text-4xl text-gray-500 flex flex-col items-center justify-center h-full w-full';
                              placeholderDiv.innerHTML = `
                                <div class="text-gray-500 text-4xl mb-2"></div>
                                <span class="text-sm text-gray-500">No Image</span>
                              `;
                              parent.appendChild(placeholderDiv);
                            }
                          }}
                        />
                      ) : (
                        <div className="text-4xl text-gray-500 flex flex-col items-center justify-center">
                          {item.icon}
                          <span className="text-sm mt-2 text-gray-500">No Image</span>
                        </div>
                      )}
                    </div>
                    <div className="font-medium text-lg text-base-content">{item.name}</div>
                    <div className="text-base-content/80 text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2">
                    {item.icon}
                    <span className="font-medium text-white">{item.name}:</span>
                    <span className="text-white/80">{item.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GearPage;