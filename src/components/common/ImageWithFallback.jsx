import React, { useState } from 'react';
import { Activity, ImageIcon } from 'lucide-react';

export function ImageWithFallback({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackText,
  loading = 'lazy',
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className="w-full h-full bg-gradient-to-tr from-slate-200 via-slate-100 to-brand-50 dark:from-navy-950 dark:via-navy-900 dark:to-brand-950/60 flex flex-col items-center justify-center p-4 text-slate-400 dark:text-slate-500 text-center select-none"
        aria-label={alt}
      >
        <Activity className="w-8 h-8 text-brand-500/70 mb-2" />
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 line-clamp-1">
          {fallbackText || alt || 'Hospital Facility Preview'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
      loading={loading}
    />
  );
}
