import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#292929] text-white py-6 flex flex-col justify-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo or Brand Name */}
        <div className="text-lg font-bold">Lumeo Studio</div>

        {/* Quick Links */}
      
        <div className="text-gray-500 text-center text-sm">
        &copy; {new Date().getFullYear()} Lumeo Studio. All Rights Reserved.
      </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="mailto:lumeostudio@gmail.com"
            className="hover:text-gray-400">
            Contact us
          </a>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
