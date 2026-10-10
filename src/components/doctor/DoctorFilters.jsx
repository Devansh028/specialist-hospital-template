import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { specialties } from '../../data/specialties';

export function DoctorFilters({
  searchQuery,
  onSearchChange,
  selectedSpecialty,
  onSpecialtyChange,
  selectedExperience,
  onExperienceChange,
  selectedConsultationType,
  onConsultationTypeChange,
  onResetFilters,
  hasActiveFilters,
}) {
  return (
    <div className="bg-white dark:bg-navy-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-subtle space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search doctors by name, specialty, or condition..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-850 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:bg-white dark:focus:bg-navy-900 focus:ring-2 focus:ring-brand-500 transition-all"
          aria-label="Search doctors"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Clear search query"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Dropdown Filters Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Specialty Filter */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Specialty
          </label>
          <select
            value={selectedSpecialty}
            onChange={(e) => onSpecialtyChange(e.target.value)}
            className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-navy-850 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500"
            aria-label="Filter by specialty"
          >
            <option value="all">All Specialties</option>
            {specialties.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Range */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Experience Level
          </label>
          <select
            value={selectedExperience}
            onChange={(e) => onExperienceChange(e.target.value)}
            className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-navy-850 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500"
            aria-label="Filter by experience level"
          >
            <option value="all">All Experience Levels</option>
            <option value="10">10+ Years Experience</option>
            <option value="15">15+ Years Experience</option>
          </select>
        </div>

        {/* Consultation Mode */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Consultation Mode
          </label>
          <select
            value={selectedConsultationType}
            onChange={(e) => onConsultationTypeChange(e.target.value)}
            className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-navy-850 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-brand-500"
            aria-label="Filter by consultation mode"
          >
            <option value="all">All Modes</option>
            <option value="tele">Teleconsultation Available</option>
            <option value="in-person">In-Person Only</option>
          </select>
        </div>
      </div>

      {/* Reset Filter Button if active */}
      {hasActiveFilters && (
        <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-800">
          <span className="text-slate-500 dark:text-slate-400">
            Filters currently applied
          </span>
          <button
            type="button"
            onClick={onResetFilters}
            className="text-brand-600 dark:text-brand-400 font-semibold hover:underline flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
