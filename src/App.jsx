import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSplineCover from './components/HeroSplineCover.jsx';
import KanbanPreview from './components/KanbanPreview.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <HeroSplineCover />

      <main>
        <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Feature
              title="Production Architecture"
              description="Composable components, clear state boundaries, and scalable patterns that grow with your team."
            />
            <Feature
              title="Performance & Accessibility"
              description="Keyboard-first navigation, semantic markup, and optimized rendering for snappy interactions."
            />
            <Feature
              title="Enterprise UX"
              description="Thoughtful spacing, subtle motion, and balanced typography for a calm, efficient workspace."
            />
          </div>
        </section>

        <KanbanPreview />

        <section id="accessibility" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Accessibility Highlights</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
            <li>Semantic regions and labeled headings for columns</li>
            <li>Keyboard moves: focus a card, then press 1–4 to move it across columns</li>
            <li>High-contrast priority badges and focus-visible outlines</li>
            <li>Reduced motion by default; tasteful hover/focus affordances</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-600">{description}</p>
    </div>
  );
}
