import React from 'react';
import {useTranslation} from 'react-i18next';

const SuccessBlock = ({id}) => {
    const {t} = useTranslation();
    return (
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{t("Success")}</h2>
            <p className="text-xl text-gray-400">
                {t("Your track number:")} <span className="text-white">{id}</span>
            </p>
            <p className="text-xl text-gray-400 underline cursor-pointer mt-4">
                {t("Track status")}
            </p>
        </div>
    )
}

export default SuccessBlock;
