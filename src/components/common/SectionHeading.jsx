import React from 'react';

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  children,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isCenter ? 'mx-auto' : ''
          } bg-brand-100 text-brand-800 dark:bg-brand-950/60 dark:text-brand-300 dark:border dark:border-brand-800/40`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-600 dark:bg-brand-400"></span>
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {subtitle}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
