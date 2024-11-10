'use client';
import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink
}) => (
  <div className="bg-zinc-900 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/10">
    <div className="relative h-48 w-full flex items-center justify-center">
      <Image
        src={image}
        alt={title}
        width={100}   
        height={100}  
        className="object-cover"
        priority
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
          >
            <Github size={20} />
            Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "FloodRisk Assessment Web Portal",
      description: "A Web Portal for land sellers and buyers to get flood risk assessments for the different pieces of land they are interested in.",
      image: "/images/logo.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveLink: "https://landvista-dashboard.vercel.app/",
      githubLink: "https://github.com/akirachix/Kishya-Frontend"
    },
    {
      title: "Social Media App",
      description: "A full-stack social media platform with real-time messaging and content sharing.",
      image: "/images/media.jpg",
      technologies: ["Node.js", "MongoDB", "Socket.io", "React"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management tool with team features and progress tracking.",
      image: "/images/task.jpg",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing creative work and professional experience.",
      image: "/images/port.jpg",
      technologies: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-red-500">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent projects and creative work across various domains
            and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            type="button"
            className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors inline-flex items-center gap-2"
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
