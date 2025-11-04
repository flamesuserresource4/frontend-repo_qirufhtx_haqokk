import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          Built for performance, accessibility, and delightful collaboration.
        </p>
        <div className="flex items-center gap-4">
          <a href="#accessibility" className="hover:text-neutral-900 transition-colors">Accessibility</a>
          <a href="#preview" className="hover:text-neutral-900 transition-colors">Live Preview</a>
          <a href="#" className="hover:text-neutral-900 transition-colors">Docs</a>
        </div>
      </div>
    </footer>
  );
}
