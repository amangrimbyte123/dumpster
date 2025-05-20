'use client';

import React, { useEffect } from 'react';

export function StyleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Force a reflow to ensure CSS is properly applied
    // This is a workaround for Turbopack CSS caching issues
    document.body.style.display = 'none';
    setTimeout(() => {
      document.body.style.display = '';
    }, 10);
  }, []);

  return <>{children}</>;
} 