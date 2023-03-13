import React from 'react';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import ExchangeForm from '../partials/ExchangeForm';
import FeaturesTitleBlocks from '../partials/FeaturesTitleBlocks';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <div className="h-screen">
          <FeaturesTitleBlocks />
          <ExchangeForm />
        </div>
        <FeaturesBlocks />
        <FeaturesZigZag />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
}

export default Home;