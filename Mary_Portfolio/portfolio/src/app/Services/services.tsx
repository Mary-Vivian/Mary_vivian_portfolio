'use client';

import React from 'react';
import { Code, Palette, Database, Briefcase } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, skills }) => (
  <div className="bg-zinc-900 p-6 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/10">
    <div className="w-14 h-14 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
      <div className="text-red-500">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern web technologies.",
      icon: <Code size={24} />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Backend Development",
      description: "Building robust and scalable server-side applications and APIs.",
      icon: <Database size={24} />,
      skills: ["Node.js", "Python", "SQL", "MongoDB", "RESTful APIs", "GraphQL"]
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user experiences that solve real problems.",
      icon: <Palette size={24} />,
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "Product Management",
      description: "Leading product strategy and development from conception to launch.",
      icon: <Briefcase size={24} />,
      skills: ["Agile", "Scrum", "User Stories", "Roadmapping", "Analytics", "A/B Testing"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-red-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging my diverse skill set to deliver comprehensive solutions across the full development lifecycle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              skills={service.skills}
            />
          ))}
        </div>
        <div className="text-center mt-16">
          <button 
            type="button"
            className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors inline-flex items-center gap-2"
          >
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;