"use client"

// page.tsx
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Link } from 'lucide-react';
import LineArrow from '../icons/LineArrow';
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
    <div className="flex-shrink-0 w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]  flex justify-center px-8 md:px-0">
      <div className="bg-white  overflow-hidden h-full flex flex-col md:flex-row-reverse shadow-[10px_10px_20px_5px_rgba(34,177,229,0.5)]">

        <div className="md:w-1/3  lg:w-1/3 h-56 md:h-auto">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover "
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://placehold.co/600x400/1a233b/ffffff?text=Image+Load+Error";
            }}
          />
        </div>

        <div className="md:w-1/2 h-full  flex flex-col justify-center flex-1">
          <h3 className="text-xl xl:text-2xl font-bold text-[#1a233b] my-[24px] pl-[24px] xl:my-[30px] xl:pl-[30px]">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 xl:text-xl lg:leading-relaxed px-[24px] xl:mb-[30px] py-[5px] xl:px-[30px]">
            {project.description}
          </p>
          <a href={project.link} className=" mb-[24px] mx-[24px] xl:mb-[30px] xl:mx-[30px] inline w-fit bg-[#1a233b] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#2c3e50] transition-colors duration-200">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

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
  const [index, setIndex] = useState(1); // start at first REAL slide (after the leading clone)
  const [btnColor1, setBtnColor1] = useState('#0A1A2E');
  const [btnColor2, setBtnColor2] = useState('#0A1A2E');
  const isJumpingRef = useRef(false);    // prevents visual snap during teleport
  const SMOOTH_MS = 400;

  // Build cloned edges for real infinite loop
  const extendedSlides = [
    projectsData[projectsData.length - 1],
    ...projectsData,
    projectsData[0],
  ];

  // Calculate scrollLeft so that slide at `idx` is centered in viewport
  const scrollToCentered = (idx: number, behavior: ScrollBehavior = 'smooth') => {
    const container = sliderRef.current;
    if (!container) return;
    const slideEl = container.children[idx] as HTMLElement | undefined;
    if (!slideEl) return;

    const target =
      slideEl.offsetLeft - (container.clientWidth / 2 - slideEl.offsetWidth / 2);

    container.scrollTo({ left: target, behavior });
  };

  // Buttons
  const scrollProjects = (direction: number) => {
    const next = index + direction;
    setIndex(next);
    scrollToCentered(next, 'smooth');

    // After smooth scroll finishes, if we're on a clone, teleport to the real one
    window.clearTimeout((scrollProjects as any)._t);
    (scrollProjects as any)._t = window.setTimeout(() => {
      const total = projectsData.length;
      if (!sliderRef.current) return;

      if (next === 0) {
        // we are on the leading clone -> jump to last real
        isJumpingRef.current = true;
        const real = total;
        setIndex(real);
        scrollToCentered(real, 'auto');
        // allow browser to settle
        requestAnimationFrame(() => (isJumpingRef.current = false));
      } else if (next === total + 1) {
        // we are on the trailing clone -> jump to first real
        isJumpingRef.current = true;
        const real = 1;
        setIndex(real);
        scrollToCentered(real, 'auto');
        requestAnimationFrame(() => (isJumpingRef.current = false));
      }
    }, SMOOTH_MS);
  };

  // On mount, center the first real slide
  useEffect(() => {
    // ensure layout is ready
    const id = window.setTimeout(() => {
      scrollToCentered(1, 'auto');
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  // Re-center on resize (keeps current slide exactly centered)
  useEffect(() => {
    const onResize = () => {
      if (!isJumpingRef.current) scrollToCentered(index, 'auto');
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [index]);

  return (
    <div className="bg-white text-gray-800 font-inter">
      <section id="projects" className="py-8 md:py-8 lg:py-12  bg-[linear-gradient(to_bottom,rgba(49,210,242,0.12)_0%,rgba(49,210,242,0.12)_50%,rgba(49,210,242,0.2)_75%,rgba(49,210,242,0.3)_100%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* top section for heading and description */}
          <div className="mb-12   md:gap-20">
            {/* heading section */}
            <div className="mb-4">
              <h1 className="inter-font capitalize mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight custom-neavy-blue-font text-center">Our Projects</h1>
            </div>

          </div>
        </div>
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-hidden gap-8  inter-font  pb-24 md:px-4 "
          >
            {extendedSlides.map((project, i) => (
              <ProjectCard key={`loop-${i}-${project.id}`} project={project} />
            ))}
          </div>
          <div className="absolute bottom-1 flex justify-center items-center w-full flex-row">
            <div className="w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%]  flex justify-between items-center px-4 md:px-8 lg:px-4 xl:px-0">
              <button
                id="prev-button"
                onMouseEnter={()=>{setBtnColor1("#31D2F2")}}
                onMouseLeave={()=>{setBtnColor1("#0A1A2E")}}
                className="  bg-none text-white p-3  outline-none   z-10 ml-4 rotate-180 cursor-pointer "
                onClick={() => scrollProjects(-1)}
                aria-label="Previous Slide"
              >
                <LineArrow size={24} color={btnColor1} />
              </button>
              <button
                id="next-button"
                onMouseEnter={()=>{setBtnColor2("#31D2F2")}}
                onMouseLeave={()=>{setBtnColor2("#0A1A2E")}}
                className={`bg-none text-white p-3 pt-6  outline-none   z-10  mr-4 cursor-pointer  `}
                onClick={() => scrollProjects(1)}
                aria-label="Next Slide"
              >
                <LineArrow size={24} color={btnColor2} />

              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
