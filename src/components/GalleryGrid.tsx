import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
            crossOrigin="anonymous"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
            <h3 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}