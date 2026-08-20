'use client';

import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackText = '?',
  className,
  style,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-surface-cream-strong, #e8e0d2)',
          color: 'var(--color-primary, #cc785c)',
          fontWeight: 700,
          fontSize: '0.85rem',
          letterSpacing: '0.5px',
          userSelect: 'none',
          border: '1px solid var(--color-hairline, #e6dfd8)',
          ...style,
        }}
        title={alt}
      >
        {fallbackText}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || ''}
      className={className}
      style={style}
      onError={() => setError(true)}
      {...props}
    />
  );
}
