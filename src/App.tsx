/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { FloorPlans } from './components/FloorPlans';
import { Amenities } from './components/Amenities';
import { Simulator } from './components/Simulator';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingCtaBar } from './components/FloatingCtaBar';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col antialiased selection:bg-amber-500 selection:text-stone-950">
      {/* Top Fixed Header with Tenho Interesse CTA */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Highlights />
        <FloorPlans />
        <Amenities />
        <Simulator />
        <Gallery />
        <Location />
        <Testimonials />
        <FAQ />
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky / Floating Conversion Bar */}
      <FloatingCtaBar />
    </div>
  );
}
