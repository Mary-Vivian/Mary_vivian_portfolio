'use client';

import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface SocialLinkProps {
  title: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ title, label }) => (
  <div className="group cursor-pointer">
    <div className="flex items-center space-x-2 opacity-50 group-hover:opacity-100 transition-opacity">
      <span className="font-medium">{title}</span>
      <ArrowRight size={16} />
    </div>
    <span className="text-sm text-gray-500">{label}</span>
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <nav className="flex justify-between items-center mb-20">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-red-500">Portfolio</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
          <Link href="/ServicesPage" className="hover:text-red-500 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-red-500 transition-colors">Portfolio</Link>
          {/* <Link href="/testimonial" className="hover:text-red-500 transition-colors">Testimonial</Link> */}
        </div>
        
        <button type="button" className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors flex items-center space-x-2">
          Let&apos;s Talk
        </button>
      </nav>

     
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold">
              <span className="text-red-500">Hello,</span> I&apos;am Mary Vivian
            </h1>
            <h2 className="text-4xl font-bold flex items-center gap-2">
              SoftWare<span className="text-2xl">🎨</span> Developer
            </h2>
            <h3 className="text-3xl font-bold">Based in Kenya</h3>
          </div>
          
          <p className="text-gray-400 max-w-md">
            A Passionate Graphic Designer With More 1 Years Of Experience
            Who Is Always Excited To Work With You To Creating Wonderful
            Visual Designs!
          </p>
          
          <div className="flex space-x-4">
            <button type="button" className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
              Hire Me
            </button>
            <a
              href="/Mary Vivian  CV.pdf"
              download
              className="border border-red-500 text-red-500 px-8 py-3 rounded-full hover:bg-red-500 hover:text-white transition-colors flex items-center gap-2"
            >
              Download CV
              <Download size={20} />
            </a>
          </div>
          <div className="flex space-x-6 pt-8">
            <SocialLink title="Dribbble" label="See My Work" />
            <SocialLink title="Behance" label="See My Work" />
            <SocialLink title="LinkedIn" label="See My Work" />
            <SocialLink title="Pinterest" label="Get Design" />
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-full bg-red-500/20 max-w-md mx-auto overflow-hidden relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full transform -translate-y-1/4"></div>
            <div className="relative w-full h-full">
              <Image 
                src="/images/vee.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
