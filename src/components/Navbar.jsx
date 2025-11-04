import React from 'react';
import { Rocket, Settings, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Primary">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-sm">
            <Rocket className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Vibe Kanban</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <a href="#features" className="hover:text-neutral-900 transition-colors">Features</a>
          <a href="#preview" className="hover:text-neutral-900 transition-colors">Preview</a>
          <a href="#accessibility" className="hover:text-neutral-900 transition-colors">Accessibility</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">
            <Settings className="h-4 w-4" aria-hidden="true" />
            Settings
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-rose-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500">
            <User className="h-4 w-4" aria-hidden="true" />
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
