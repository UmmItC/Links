import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import BackgroundWallpaper from "./components/BackgroundWallpaper";
import Navbar from "./components/Navbar";
import GPGModal from "./components/GPGModal";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ProjectPage from "./pages/ProjectPage";
import GearPage from "./pages/GearPage";
import AboutPage from "./pages/AboutPage";
import FriendsPage from "./pages/FriendsPage";
import DotfilesPage from "./pages/DotfilesPage";

import { userData, socialButtons } from "./config/userData";
import { useGPG } from "./hooks/useGPG";
import { useTheme } from "./hooks/useTheme";

const App: React.FC = () => {
  const { gpgContent, handleDownload } = useGPG();
  const { theme } = useTheme();

  const handleGPGClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const modal = document.getElementById("gpg_modal") as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  return (
    <div>
      {theme === 'cuteai' && userData.wallpaper && <BackgroundWallpaper imageUrl={userData.wallpaper} />}
      
      <Navbar userData={userData} />
      
      <Routes>
        <Route path="/" element={<HomePage userData={userData} socialButtons={socialButtons} onGPGClick={handleGPGClick} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug/*" element={<BlogPostPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/dotfiles" element={<DotfilesPage />} />
        <Route path="/gear" element={<GearPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <Footer />

      <GPGModal 
        gpgContent={gpgContent}
        onClose={() => {
          const modal = document.getElementById("gpg_modal") as HTMLDialogElement;
          if (modal) modal.close();
        }}
        onDownload={handleDownload}
      />
    </div>
  );
};

export default App;
