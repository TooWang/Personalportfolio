import { GalleryGrid } from "./components/GalleryGrid";
import { ContactSection } from "./components/ContactSection";
import { useEffect, useRef, useState } from "react";

const designWorks = [
  {
    id: 1,
    title: "Mon3tr",
    imageUrl: "https://pub-c8fcb62ea5604841ae8b588759ae3d38.r2.dev/gallery/Mon3tr.png"
  },
  {
    id: 2,
    title: "Rhine",
    imageUrl: "https://pub-c8fcb62ea5604841ae8b588759ae3d38.r2.dev/gallery/Rhine.png"
  },
  {
    id: 3,
    title: "Summary 2024",
    imageUrl: "https://pub-c8fcb62ea5604841ae8b588759ae3d38.r2.dev/gallery/Summary2024.png"
  },
  {
    id: 4,
    title: "SBC4",
    imageUrl: "https://pub-c8fcb62ea5604841ae8b588759ae3d38.r2.dev/gallery/SBC4.png"
  }
];

const artworks = [
  {
    id: 1,
    title: "Abstract Composition",
    imageUrl: "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NTI2NjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    title: "Digital Illustration",
    imageUrl: "https://images.unsplash.com/photo-1587120511358-98f9104cc096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NTM1MTk0MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Mixed Media Art",
    imageUrl: "https://images.unsplash.com/photo-1629927464439-6ba2167656fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmslMjBwYWludGluZ3xlbnwxfHx8fDE3NjUzNzY3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "Color Study",
    imageUrl: "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NTI2NjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    title: "Concept Art",
    imageUrl: "https://images.unsplash.com/photo-1587120511358-98f9104cc096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NTM1MTk0MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    title: "Experimental Work",
    imageUrl: "https://images.unsplash.com/photo-1629927464439-6ba2167656fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydHdvcmslMjBwYWludGluZ3xlbnwxfHx8fDE3NjUzNzY3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSections = 5; // cover, design, artwork, contact, footer

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only apply on desktop (md and above)
      if (window.innerWidth < 768) return;
      
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(currentSection + direction, totalSections - 1));
      
      if (nextSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(nextSection);
        
        const sections = containerRef.current?.children;
        if (sections && sections[nextSection]) {
          sections[nextSection].scrollIntoView({ behavior: 'smooth' });
          
          setTimeout(() => {
            setIsScrolling(false);
          }, 500);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSection, isScrolling]);

  return (
    <div ref={containerRef} className="min-h-screen md:h-screen md:overflow-hidden" style={{ scrollBehavior: 'smooth' }}>
      {/* Cover Section */}
      <section
        className="h-screen flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjUzNzI4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-white text-center px-4">
          Creative Designer &amp; Artist
        </h1>
      </section>

      {/* Design Works Gallery */}
      <section className="h-screen py-8 md:py-20 px-4 md:px-12 lg:px-24 bg-white flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="mb-4 md:mb-12 text-center">Design Works</h2>
          <GalleryGrid items={designWorks} />
        </div>
      </section>

      {/* Artwork Gallery */}
      <section className="h-screen py-8 md:py-20 px-4 md:px-12 lg:px-24 bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="mb-4 md:mb-12 text-center">Artwork</h2>
          <GalleryGrid items={artworks} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="h-screen px-4 md:px-12 lg:px-24 bg-white flex items-center justify-center">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 bg-gray-50">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}