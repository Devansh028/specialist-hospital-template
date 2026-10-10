import React, { useState, useMemo } from 'react';
import { Maximize2, Image as ImageIcon } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/gallery';
import { hospitalConfig } from '../config/hospitalConfig';
import { SectionHeading } from '../components/common/SectionHeading';
import { Lightbox } from '../components/gallery/Lightbox';

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!hospitalConfig.gallery?.enabled) return null;

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === 0 ? filteredItems.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
      aria-label="Hospital Campus & Facilities Gallery"
      className="py-16 md:py-24 bg-white dark:bg-navy-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Visual Campus Tour"
          title="HOSPITAL ENVIRONMENT & SPACES"
          subtitle="Explore modern patient rooms, clinical consultation wings, and high-precision diagnostic facilities."
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 pt-1 px-1 no-scrollbar mb-8">
          {galleryCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                    : 'bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 cursor-pointer shadow-subtle hover:shadow-card-hover transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLightbox(index);
                }
              }}
              aria-label={`View enlarged photo: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-xs font-bold">{item.title}</span>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
                <div className="mt-2 flex items-center text-[10px] text-brand-300 font-semibold">
                  <Maximize2 className="w-3.5 h-3.5 mr-1" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex || 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
