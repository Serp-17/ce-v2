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
                <h3 className="text-base font-semibold leading-6 text-gray-900">Applicant Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">{t("Status")}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">{t("Email")}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt
                            culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum
                            aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
                            nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default Status;
