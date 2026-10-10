import React from 'react';
import { specialtyCategories } from '../../data/specialties';

export function SpecialtyFilter({ selectedCategory, onSelectCategory }) {
  return (
    <div
      role="tablist"
      aria-label="Filter specialties by medical department"
      className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 px-1 scrollbar-none no-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0"
    >
      {specialtyCategories.map((cat) => {
        const isSelected = selectedCategory === cat.id;

        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(cat.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex-shrink-0 ${
              isSelected
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
