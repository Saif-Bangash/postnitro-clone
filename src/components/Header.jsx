import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Importing flags
import EN from "../assets/flags/BR - Brazil.svg";
import BR from "../assets/flags/CN - China.svg";
import FR from "../assets/flags/DE - Germany.svg";
import DE from "../assets/flags/ES - Spain.svg";

const languages = [
  { code: "EN", label: "English", icon: EN },
  { code: "BR", label: "Português", icon: BR },
  { code: "FR", label: "Français", icon: FR },
  { code: "DE", label: "Deutsch", icon: DE },
];

const Header = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setShowDropdown(false);
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center shadow-sm bg-white relative z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
        <img
          src="src/assets/logo-full.svg"
          alt="Postnitro Logo"
          className="h-6"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-6 text-sm text-gray-700 font-medium">
        {/* Getting Started Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
            <span>Getting Started</span>
            <FaChevronDown className="text-xs" />
          </div>
          {isDropdownOpen && (
            <div className="absolute left-0 w-48 mt-2 bg-white shadow-lg rounded-md border border-gray-200 z-50">
              <a
                href="https://postnitro.ai/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Docs
              </a>
              <a
                href="https://postnitro.ai/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Blog
              </a>
              <a
                href="https://ls.postnitro.ai/affiliates"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Affiliates
              </a>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
          <span>Products</span>
          <FaChevronDown className="text-xs" />
        </div>

        <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
          <span>Free Tools</span>
          <FaChevronDown className="text-xs" />
        </div>

        <Link to="/pricing">
          <span className="cursor-pointer hover:text-black">Plans</span>
        </Link>
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        {/* Language Selector */}
        <div className="relative">
          <button
            className="flex items-center border border-gray-300 px-3 py-1 rounded-full text-sm text-gray-600 hover:bg-gray-100"
            onClick={toggleDropdown}
          >
            <img
              src={selectedLang.icon}
              alt={selectedLang.code}
              className="w-5 h-5 mr-2 rounded-full object-cover"
            />
            {selectedLang.code}
            <FaChevronDown className="ml-2 text-xs" />
          </button>

          {showDropdown && (
            <div className="absolute top-12 right-0 bg-white border rounded-md shadow-md z-10 w-44">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => handleSelect(lang)}
                  className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src={lang.icon}
                    alt={lang.code}
                    className="w-5 h-5 mr-2 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-700">{lang.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Buttons */}
        <button className="hidden md:block bg-white border border-green-600 text-green-600 font-medium px-4 py-1.5 text-sm rounded-full hover:bg-green-50">
          Create Image Post{" "}
          <span className="ml-1 text-xs bg-green-200 text-green-800 px-1 rounded">
            BETA
          </span>
        </button>
        <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-1.5 text-sm rounded-full">
          Create Carousel
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t mt-2 lg:hidden z-40 py-4 px-6 space-y-3 text-sm text-gray-700">
          {/* Getting Started - with dropdown */}
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center hover:text-black"
            >
              <span>Getting Started</span>
              <FaChevronDown
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="ml-4 mt-2 space-y-1">
                <a
                  href="https://postnitro.ai/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-black"
                >
                  Docs
                </a>
                <a
                  href="https://postnitro.ai/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-black"
                >
                  Blog
                </a>
                <a
                  href="https://ls.postnitro.ai/affiliates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-black"
                >
                  Affiliates
                </a>
              </div>
            )}
          </div>

          <div className="block hover:text-black">Products</div>
          <div className="block hover:text-black">free plane</div>
          <Link
            to="/pricing"
            className="block hover:text-black"
            onClick={() => {
              setIsDropdownOpen(false); // close "Getting Started" dropdown
              setMobileMenuOpen(false); // close the whole mobile menu
            }}
          >
            Plans
          </Link>

          <button className="w-full border border-green-600 text-green-600 py-2 rounded-md font-medium">
            Create Image Post (BETA)
          </button>
          <button className="w-full bg-green-600 text-white py-2 rounded-md font-medium mt-2">
            Create Carousel
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
