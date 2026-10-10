import React, { useState } from 'react';
import { User, Stethoscope } from 'lucide-react';

export function DoctorAvatar({
  src,
  alt,
  name,
  className = 'w-full h-full object-cover',
  containerClassName = '',
}) {
  const [hasError, setHasError] = useState(false);

  // Extract initials from doctor name, e.g. "Dr. Elena Rostova" -> "ER"
  const getInitials = (fullName) => {
    if (!fullName) return 'DR';
    const clean = fullName.replace(/^Dr\.\s*/i, '').trim();
    const parts = clean.split(' ').filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return (parts[0]?.[0] || 'D').toUpperCase();
  };

  if (!src || hasError) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-tr from-brand-700 via-brand-600 to-tealAccent-600 flex flex-col items-center justify-center text-white select-none ${containerClassName}`}
        aria-label={alt || name}
      >
        <span className="font-extrabold text-sm tracking-wider">
          {getInitials(name)}
        </span>
        <Stethoscope className="w-3.5 h-3.5 text-white/80 -mt-0.5" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || name}
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
