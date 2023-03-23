import React from 'react';
import PageIllustration from '../partials/PageIllustration';
import ExchangeForm from '../partials/ExchangeForm';
import FeaturesTitleBlocks from '../partials/FeaturesTitleBlocks';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Newsletter from '../partials/Newsletter';

function Home() {
  return (
    <>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>
      <div className="h-auto md-h-screen mt-8">
        <FeaturesTitleBlocks />
        <ExchangeForm />
      </div>
      <FeaturesBlocks />
      <Newsletter />
    </>
  );
}

export default Home;