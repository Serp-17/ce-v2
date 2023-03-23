import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useForm, Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {postData, getPc} from '../api/firebase';
import CustomSelect from '../components/Select';
import Input from '../components/Input';
import coinsData from '../store/coins';
import {coinsSend, coinsGet} from '../data/coins';
import {toast} from 'react-toastify';
import SuccessBlock from './SuccessBlock';

const ExchangeForm = observer(() => {
    const {t} = useTranslation();
    const [step, setStep] = useState(1);
    const [id, setId] = useState(null);
    const [error, setError] = useState(null);
    const [coin, setCoin] = useState(null);
    const [percent, setPercent] = useState(0);
    const {
        register,
        handleSubmit,
        control,
        setValue,
        getValues,
    } = useForm();

    useEffect(()=> {
        getPc().then(res => {
            setPercent(res.pc);
        })
        coinsData.fetchCoins();
    }, [])

    const onBlur = (e) => {
        const {name, value} = e.target;
        const sendCoin = getValues("sendCoin");
        const getCoin = getValues("getCoin");
        const getPrice = coinsData.coins.find(c => c.name === getCoin).price;
        const sendPrice = coinsData.coins.find(c => c.name === sendCoin).price;

        if (name === "send") {
            const val = CalculatingAmount(sendPrice, getPrice, value);
            setValue("get", val.toFixed(5));
        }
        if (name === "get") {
            const val = CalculatingAmount(getPrice, sendPrice, value);
            setValue("send", val.toFixed(5));
        }
    }

    const CalculatingAmount = (sum1, sum2, value) => {
        const sendCoin = getValues("sendCoin");
        const data = (sum1 * Number(value) / sum2);
        console.log(sendCoin)
        if (sendCoin === "XRP") {
            return (data + data * percent);
        }
        if (sendCoin === "MATIC") {
            return (data + data * percent);
        }
        if (sendCoin === "LTC") {
            return (data + data * percent);
        }
        return data;
    }

    const onSubmit = (data) => {
        if (step === 1 && data.send && data.get && data.sendCoin && data.getCoin) {
            if (data.get < 100) {
                setError("Minimum payment amount 100 USDT")
            } else {
                setError(null);
                setCoin(data.sendCoin);
                setStep(2);
            }
            return
        }
        if (step === 2) {
            postData(data).then((id) => {
                setId(id);
                toast(t("Successfully"));
                setStep(3);
            });
        }
    };

    return (
        <section>
            <div className="max-w-6xl mx-auto pr-16">

                {/* CTA box */}
                <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

                    <div className="relative flex flex-col lg:flex-row justify-between items-center">
                        {/* CTA form */}
                        <form className="w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                            {step !== 3 && (
                                <div className="flex-col flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none mx-auto mb-3">
                                    <div className="flex mb-4 mr-0 sm:mr-2">
                                        <Input
                                            type="number"
                                            placeholder="You send"
                                            name="send"
                                            register={register}
                                            onBlur={onBlur}
                                            required
                                        />
                                        <Controller
                                            control={control}
                                            name="sendCoin"
                                            defaultValue="BTC"
                                            render={({ field: { onChange, value, name, ref } }) => {
                                                return (
                                                    <CustomSelect
                                                        inputRef={ref}
                                                        options={coinsSend}
                                                        name={name}
                                                        handleChange={onChange}
                                                        defaultValue={coinsSend[0]}
                                                    />
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="mb-4 mr-0 sm:mr-2">
                                        <div className="flex">
                                            <Input
                                                type="number"
                                                placeholder="You get"
                                                name="get"
                                                register={register}
                                                onBlur={onBlur}
                                                required
                                            />
                                            <Controller
                                                control={control}
                                                name="getCoin"
                                                defaultValue="USDT"
                                                render={({ field: { onChange, value, name, ref } }) => {
                                                    return (
                                                        <CustomSelect
                                                            inputRef={ref}
                                                            options={coinsGet}
                                                            name={name}
                                                            defaultValue={coinsGet[2]}
                                                            handleChange={onChange}
                                                        />
                                                    )
                                                }}
                                            />
                                        </div>
                                        { error && <div className="error text-white mt-2">{t("Minimum payment amount 100 USDT")}</div>}
                                    </div>
                                    {step === 1 && <button type="submit" className="btn w-full text-purple-600 bg-purple-100 hover:bg-white shadow">{t("Exchange")}</button>}
                                </div>
                            )}

                            {step === 2 && (
                                <>
                                    <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none mx-auto mb-3">
                                        <div className="flex mb-2 sm:mb-0 mr-0 sm:mr-2 max-w-[314px] w-full">
                                            <Input
                                                type="text"
                                                placeholder=""
                                                name="getWallet"
                                                register={register}
                                                label={`${t("Your")} ${getValues("sendCoin")} ${t("wallet")}`}
                                            />
                                        </div>
                                        <div className="flex mb-2 sm:mb-0 mr-0 sm:mr-2 max-w-[314px] w-full">
                                            <Input
                                                type="text"
                                                placeholder=""
                                                name="sendWallet"
                                                register={register}
                                                label={`${t("Your")} ${getValues("getCoin")} ${t("wallet")}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none mx-auto">
                                        <div className="flex mb-2 sm:mb-0 mr-0 sm:mr-2 max-w-[314px] w-full">
                                            <Input
                                                type="text"
                                                placeholder="name@gail.com"
                                                name="email"
                                                register={register}
                                                label={`${t("Your")} E-mail`}
                                            />
                                        </div>
                                        <div className="flex mb-2 sm:mb-0 mr-0 sm:mr-2 max-w-[314px] w-full">
                                            <Input
                                                type="text"
                                                placeholder=""
                                                name="promoCode"
                                                register={register}
                                                label={t("Promo code")}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none mx-auto mt-6">
                                        <button type="submit" className="btn text-purple-600 bg-purple-100 hover:bg-white shadow">{t("Send")}</button>
                                    </div>
                                </>
                            )}

                            {step === 3 && <SuccessBlock id={id} coin={coin}/>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
})

export default ExchangeForm;
