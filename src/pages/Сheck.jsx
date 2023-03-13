import React from 'react';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Input from '../components/Input';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {checkId} from '../api/firebase';
import Status from '../components/Status';

const Check = () => {
    const {t} = useTranslation();
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
        setValue,
        getValues,
    } = useForm();

    const getData = () => {
        console.log(123)
        checkId('1678733790937')
    }

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="grow">
                <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                    <PageIllustration />
                </div>
                <section onClick={getData}>
                    <Status />
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 h-screen mt-[25%]">
                        {/* CTA box */}
                        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
                            <div className="relative flex flex-col lg:flex-row justify-between items-center">
                                <form className="w-full mx-auto">
                                    <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none mx-auto mb-3">
                                        <div className="flex mb-2 sm:mb-0 mr-0 sm:mr-2 check-input">
                                            <Input
                                                type="number"
                                                placeholder="Your id"
                                                name="checkId"
                                                register={register}
                                                // label="You send"
                                            />
                                        </div>
                                        <button type="submit" className="btn text-purple-600 bg-purple-100 hover:bg-white shadow">{t("Check")}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Check;
