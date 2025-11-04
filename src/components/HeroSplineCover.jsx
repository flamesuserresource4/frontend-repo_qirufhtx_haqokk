import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSplineCover() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full" aria-label="Interactive hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to ensure text readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Enterprise Kanban, reimagined
          </h1>
          <p className="mt-4 text-neutral-700 md:text-lg">
            A production-grade, accessible, and high‑performance board with delightful interactions.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#preview"
              className="inline-flex items-center justify-center rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500"
            >
              Live preview
            </a>
            <a
              href="#accessibility"
              className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              Accessibility first
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
