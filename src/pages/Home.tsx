import React from 'react';
import '../i18n'; // Import i18n configuration
import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { BrowseCategory } from '../components/BrowseCategory';
import { ExploreProducts } from '../components/ExploreProducts';
import { AboutUs } from '../components/AboutUs';
import { ProductGrid } from '../components/ProductGrid';
import { Services } from '../components/Services';
import { StatsBand } from '../components/StatsBand';
import { SignatureProjects } from '../components/SignatureProjects';
import { Partners } from '../components/Partners';
import { PreFooter } from '../components/PreFooter';
import { Footer } from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import { VideoShowcase } from '../components/VideoShowcase';
import { CTASection } from '../components/CTASection';

export function Home() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <BrowseCategory />
        <AboutUs />
        {/* <ExploreProducts /> */}
        <StatsBand />
        <ProductGrid />
        <Services />
        <VideoShowcase/>
        <SignatureProjects />
        <Partners />
        <CTASection/>
        {/* <PreFooter /> */}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}