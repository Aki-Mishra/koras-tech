"use client"

// page.tsx
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define a type for your project data to ensure type safety
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

// ProjectCard component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="rounded-t-xl w-full h-48 object-cover"
          onError={(e) => { const target = e.target as HTMLImageElement; target.src = 'https://placehold.co/600x400/1a233b/ffffff?text=Image+Load+Error'; }}
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1a233b] mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>
          <a href={project.link} className="inline-block bg-[#1a233b] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#2c3e50] transition-colors duration-200">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

// Project data can be easily managed in this array
const projectsData: Project[] = [

  {
    id: 1,
    title: 'Financial Analytics Dashboard',
    description: 'Created an intuitive dashboard for real-time financial data visualization and reporting.',
    imageUrl: 'https://images.unsplash.com/photo-1584385789552-b9fc0c2de2c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZpbmFuY2lhbCUyMEFuYWx5dGljcyUyMERhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D',
    link: '#',
  },
  {
    id: 2,
    title: 'Mobile Health Application',
    description: 'Designed and built a mobile app to help users track their wellness goals and metrics.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1705421624813-dc890737aafb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 3,
    title: 'Cloud Infrastructure Migration',
    description: 'Successfully migrated a legacy system to a modern, scalable cloud infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1667984390527-850f63192709?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D',
    link: '#',
  },
  {
    id: 4,
    title: 'Corporate Website Redesign',
    description: 'Refreshed the company\'s online presence with a modern, user-friendly, and responsive design.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661762833325-9b7e1c0b4abf?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },

];

const Projects = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('.flex-shrink-0')?.clientWidth || 0;
      const scrollAmount = cardWidth + 32; // card width + gap (8 units = 32px)
      sliderRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white text-gray-800 font-inter">
      <section id="projects" className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* top section for heading and description */}
          <div className="mb-12 flex flex-col md:flex-row  md:gap-20">
            {/* heading section */}
            <div className="mb-4">
              <h5 className="uppercase mb-4 text-[17px] leading-4 inter-font">What we done</h5>
              <h1 className="custom-times-new-roman-font capitalize mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight custom-neavy-blue-font">Our Projects</h1>
            </div>
            {/* description section */}
            <div className="">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed ">We provide complete tech solutions — from app development and management to website design and UI/UX services. Whether you're starting fresh or scaling up, we deliver smart, reliable, and modern digital solutions tailored to your needs.</p>
            </div>
          </div>
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex overflow-x-hidden gap-8 pb-4 inter-font"
            >
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <button
              id="prev-button"
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#1a233b] text-white p-3 rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-200 z-10 ml-4 "
              onClick={() => scrollProjects(-1)}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              id="next-button"
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#1a233b] text-white p-3 rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-200 z-10 mr-4"
              onClick={() => scrollProjects(1)}
              aria-label="Next Slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
