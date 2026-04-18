import React from 'react';
import FloatingDock from '@site/src/components/FloatingDock';

// Wraps the entire app. Used to render the global floating dock on every page.
export default function Root({ children }) {
  return (
    <>
      {children}
      <FloatingDock />
    </>
  );
}
