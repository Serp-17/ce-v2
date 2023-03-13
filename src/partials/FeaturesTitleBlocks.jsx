import React from 'react';
import {useTranslation} from 'react-i18next';

function FeaturesTitleBlocks() {
  const {t} = useTranslation();
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{t("Automatic exchange of cryptocurrencies at the best rate in Russia and Poland.")}</h2>
            <p className="text-xl text-gray-400">
              {window.location.host} - {t("this is a reliable, confidential, profitable and fastest service for the exchange of electronic currencies.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesTitleBlocks;
