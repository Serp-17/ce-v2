import React from 'react';
import PageIllustration from '../partials/PageIllustration';
import ExchangeForm from '../partials/ExchangeForm';
import FeaturesTitleBlocks from '../partials/FeaturesTitleBlocks';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Newsletter from '../partials/Newsletter';
import FeaturesZigzag from '../partials/FeaturesZigzag';

function Home() {
  return (
    <>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        {/*<PageIllustration />*/}
      </div>
      <div className="flex items-center justify-around h-auto lg:h-screen mt-8">
        <FeaturesTitleBlocks />
        <ExchangeForm />
      </div>
      <FeaturesZigzag/>
      <FeaturesBlocks />
      <Newsletter />
    </>
  );
}

export default Home;