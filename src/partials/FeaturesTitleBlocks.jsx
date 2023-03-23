import React from 'react';
import {useTranslation} from 'react-i18next';

function FeaturesTitleBlocks() {
  const {t} = useTranslation();
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 text-black">{t("Automatic exchange of cryptocurrencies at the best rate in Russia and Poland.")}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesTitleBlocks;
