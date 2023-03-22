import React from 'react';
import {useTranslation} from 'react-i18next';

function Testimonials() {
  const {t} = useTranslation();
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Don't take our word for it</h2>
            <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                  <div className="relative inline-flex flex-col mb-4">

                  </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow">— {t("Review1")}</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">{t("ReviewName1")}</cite>
                </div>
              </div>

              {/* 2nd testimonial */}
              <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
                <div>
                    <div className="relative inline-flex flex-col mb-4">

                    </div>
                  </div>
                <blockquote className="text-lg text-gray-400 grow">— {t("Review2")}</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">{t("ReviewName2")}</cite>
                  </div>
                </div>

                {/* 3rd testimonial */}
                <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
                  <div>
                      <div className="relative inline-flex flex-col mb-4">

                      </div>
                    </div>
                  <blockquote className="text-lg text-gray-400 grow">— {t("Review3")}</blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <cite className="text-gray-200 not-italic">{t("ReviewName3")}</cite>
                    </div>
                  </div>

                </div>

              </div>
            </div>
</section>
  );
}

export default Testimonials;
