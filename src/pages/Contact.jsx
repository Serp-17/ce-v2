import React from 'react';
import {useTranslation} from 'react-i18next';
import {useForm, Controller} from 'react-hook-form';
import {toast} from 'react-toastify';
import {postContact} from '../api/firebase';

const Contact = () => {
    const {t} = useTranslation();
    const {
        register,
        handleSubmit,
        reset,
        control
    } = useForm();

    const onSubmit = (data) => {
        postContact(data).then(() => {
            toast(t("Successfully"));
            reset();
        })
    }

    return (
        <div className="container my-24 px-6 mx-auto py-12">
            <section className="mb-32 text-gray-800">
                <div className="flex flex-wrap">
                    <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                        <h2 className="text-3xl font-bold mb-6 text-purple-600">{t("Contact us")}</h2>
                        <p className="text-gray-500 mb-6 text-white">
                            {t("We are")}
                            <b className="text-purple-600">{t("in touch 24/7")}</b>
                            {t("to maintain your profitable reality with us")}
                        </p>
                        <p className="text-gray-500 mb-2">{import.meta.env.VITE_ADDRESS}</p>
                        <p className="text-gray-500 mb-2">{import.meta.env.VITE_NUMBER}</p>
                        <p className="text-gray-500 mb-2">info@gmail.com</p>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-6 flex justify-between">
                                <input
                                    type="text"
                                    className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400"
                                    placeholder="Name"
                                    {...register("name", {required: true})}
                                />
                                <input
                                    type="email"
                                    className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400"
                                    placeholder="Email address"
                                    {...register("email", {required: true})}
                                />
                            </div>
                            <div className="form-group mb-6">
                                <textarea
                                    className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400"
                                    rows="3"
                                    placeholder="Message"
                                    {...register("message", {required: true})}
                                />
                            </div>
                            <div className="form-group form-check text-center mb-6">
                                <Controller
                                    name="checkbox"
                                    control={control}
                                    rules={{ required: true }}
                                    render={
                                        ({ field }) => <input
                                            type="checkbox"
                                            id="exampleCheck87"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                            {...field}
                                        />
                                    }
                                />

                                <label
                                    className="form-check-label inline-block text-white"
                                    htmlFor="exampleCheck87"
                                >
                                    {t("Send me a copy of this message")}
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="btn text-purple-600 bg-purple-100 hover:bg-white shadow w-full"
                            >
                                {t("Send")}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
