import React, {useState} from 'react';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Input from '../components/Input';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {checkId} from '../api/firebase';
import Status from '../components/Status';
import {Bars} from  'react-loader-spinner'
import {toast} from "react-toastify";

const Check = () => {
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(null);
    const [id, setId] = useState(null);
    const {t} = useTranslation();
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        setLoading(true);
        setId(data.id);
        checkId(data.id).then((res) => {
            if (res.email) {
                setInfo(res);
            } else {
                setInfo(null);
                toast.error("Something went wrong");
            }
        }).catch((err) => {
            setInfo(null);
            toast.error("Something went wrong");
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <>
            <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
                <PageIllustration />
            </div>
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-screen mt-[10%]">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">{t("Check your order")}</h1>
                        <p className="text-xl text-gray-400">
                            {t("Here you can track your order by track number.")}
                        </p>
                    </div>
                    {/* CTA box */}
                    <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

                        {loading && <Bars
                            height="80"
                            width="80"
                            color="#4b4acf"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass="loader"
                            visible={true}
                        />}

                        <div className="relative flex flex-col lg:flex-row justify-between items-center mb-6">
                            <form className="w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none mx-auto mb-3">
                                    <div className="flex mb-2 sm:mb-0 mr-0 sm:mr-2 check-input">
                                        <Input
                                            type="number"
                                            placeholder="Your id"
                                            name="id"
                                            register={register}
                                            onBlur={() => {}}
                                            // label="You send"
                                        />
                                    </div>
                                    <button type="submit" className="btn text-purple-600 bg-purple-100 hover:bg-white shadow">{t("Check")}</button>
                                </div>
                            </form>
                        </div>
                        {info && <Status {...info} id={id} />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Check;
