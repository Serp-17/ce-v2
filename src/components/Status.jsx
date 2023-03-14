import React from 'react';
import {useTranslation} from 'react-i18next';

const data = ["Received", "Awaiting payment", "In work", "Paid out"];

// {
//     "commission": 0,
//     "email": "123",
//     "get": "2714296.57371 USDT",
//     "getWallet": "123",
//     "promoCode": "123",
//     "send": "112.00000 BTC",
//     "sendWallet": "123",
//     "status": "Awaiting payment"
// }

const Status = ({
    id,
    status,
    email,
    get,
    send,
    sendWallet,
    getWallet
}) => {
    const {t} = useTranslation();
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg lg:w-1/2 mx-auto">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">{t("Information for")} {id}</h3>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">{t("Status")}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{status}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">{t("Info")}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{`${send} ${t("to")} ${get}`}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">{t("Email")}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{email}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">{t("Sender's wallet")}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{sendWallet}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">{t("Recipient's wallet")}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{getWallet}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default Status;
