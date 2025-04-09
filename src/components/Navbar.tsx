'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FeatureDropdown from './FeatureDropdown';
import CompanyDropdown from './CompanyDropdown';

export default function Navbar() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const featuresRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setCompanyOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative flex items-center justify-between p-5 md:p-8 md:px-10 lg:px-16">
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/images/logo.svg" 
          alt="Snap Logo" 
          width={84} 
          height={27} 
          className="mr-10 md:mr-16"
        />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {/* Features Dropdown */}
          <div ref={featuresRef} className="relative">
            <button 
              className="flex items-center text-medium-gray hover:text-almost-black transition-colors"
              onClick={() => {
                setFeaturesOpen(!featuresOpen);
                setCompanyOpen(false);
              }}
            >
              Features
              <Image 
                src={featuresOpen ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} 
                alt="Arrow" 
                width={10} 
                height={6} 
                className="ml-2"
              />
            </button>
            <FeatureDropdown isOpen={featuresOpen} />
          </div>
          
          {/* Company Dropdown */}
          <div ref={companyRef} className="relative">
            <button 
              className="flex items-center text-medium-gray hover:text-almost-black transition-colors"
              onClick={() => {
                setCompanyOpen(!companyOpen);
                setFeaturesOpen(false);
              }}
            >
              Company
              <Image 
                src={companyOpen ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} 
                alt="Arrow" 
                width={10} 
                height={6} 
                className="ml-2"
              />
            </button>
            <CompanyDropdown isOpen={companyOpen} />
          </div>
          
          <Link href="#" className="text-medium-gray hover:text-almost-black transition-colors">
            Careers
          </Link>
          
          <Link href="#" className="text-medium-gray hover:text-almost-black transition-colors">
            About
          </Link>
        </div>
      </div>
      
      {/* Desktop Login/Register */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
        <button className="text-medium-gray hover:text-almost-black transition-colors">
          Login
        </button>
        <button className="border-2 border-medium-gray hover:border-almost-black text-medium-gray hover:text-almost-black px-5 py-1.5 rounded-2xl transition-colors">
          Register
        </button>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Image 
          src={mobileMenuOpen ? "/images/icon-close-menu.svg" : "/images/icon-menu.svg"} 
          alt={mobileMenuOpen ? "Close Menu" : "Open Menu"} 
          width={24} 
          height={24} 
        />
      </button>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-40" />
      )}
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-2/3 bg-white p-8 z-40 mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mt-16 flex flex-col space-y-6">
          {/* Mobile Features Dropdown */}
          <div>
            <button 
              className="flex items-center text-medium-gray hover:text-almost-black transition-colors"
              onClick={() => setFeaturesOpen(!featuresOpen)}
            >
              Features
              <Image 
                src={featuresOpen ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} 
                alt="Arrow" 
                width={10} 
                height={6} 
                className="ml-2"
              />
            </button>
            {featuresOpen && (
              <div className="mt-4 ml-6 flex flex-col space-y-4">
                <Link href="#" className="flex items-center text-medium-gray hover:text-almost-black transition-colors">
                  <Image src="/images/icon-todo.svg" alt="Todo" width={16} height={16} className="mr-3" />
                  Todo List
                </Link>
                <Link href="#" className="flex items-center text-medium-gray hover:text-almost-black transition-colors">
                  <Image src="/images/icon-calendar.svg" alt="Calendar" width={16} height={16} className="mr-3" />
                  Calendar
                </Link>
                <Link href="#" className="flex items-center text-medium-gray hover:text-almost-black transition-colors">
                  <Image src="/images/icon-reminders.svg" alt="Reminders" width={16} height={16} className="mr-3" />
                  Reminders
                </Link>
                <Link href="#" className="flex items-center text-medium-gray hover:text-almost-black transition-colors">
                  <Image src="/images/icon-planning.svg" alt="Planning" width={16} height={16} className="mr-3" />
                  Planning
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile Company Dropdown */}
          <div>
            <button 
              className="flex items-center text-medium-gray hover:text-almost-black transition-colors"
              onClick={() => setCompanyOpen(!companyOpen)}
            >
              Company
              <Image 
                src={companyOpen ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} 
                alt="Arrow" 
                width={10} 
                height={6} 
                className="ml-2"
              />
            </button>
            {companyOpen && (
              <div className="mt-4 ml-6 flex flex-col space-y-4">
                <Link href="#" className="text-medium-gray hover:text-almost-black transition-colors">
                  History
                </Link>
                <Link href="#" className="text-medium-gray hover:text-almost-black transition-colors">
                  Our Team
                </Link>
                <Link href="#" className="text-medium-gray hover:text-almost-black transition-colors">
                  Blog
                </Link>
              </div>
            )}
          </div>
          
          <Link href="#" className="text-medium-gray hover:text-almost-black transition-colors">
            Careers
          </Link>
          
          <Link href="#" className="text-medium-gray hover:text-almost-black transition-colors">
            About
          </Link>
          
          {/* Mobile Login/Register */}
          <div className="flex flex-col space-y-4 mt-4">
            <button className="text-medium-gray hover:text-almost-black transition-colors">
              Login
            </button>
            <button className="border-2 border-medium-gray hover:border-almost-black text-medium-gray hover:text-almost-black py-2 rounded-2xl transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
