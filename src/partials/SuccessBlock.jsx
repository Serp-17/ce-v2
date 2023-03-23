import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {wallets} from '../data/wallets';
import {toast} from 'react-toastify';

const SuccessBlock = ({id, coin}) => {
    const {t} = useTranslation();
    const wallet = wallets.find(c => c.coin === coin);
    const copyText = () => {
        navigator.clipboard.writeText(wallet ? wallet.wallet : "0x74cd8dc1b59ca9ab213b8cd47496d3198ed17d75");
        toast(t("Copied"))
    }

    return (
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{t("Success")}</h2>
            <div className="mb-5 text-xl text-gray-400">
                {t("Account for sending coins:")} <span className="text-white" onClick={copyText}>{wallet ? wallet.wallet : "0x74cd8dc1b59ca9ab213b8cd47496d3198ed17d75"}</span>
            </div>
            <p className="text-xl text-gray-400">
                {t("Your track number:")} <span className="text-white">{id}</span>
            </p>
            <p className="text-xl text-gray-400 underline cursor-pointer mt-4">
                <Link to="/check">
                    {t("Track status")}
                </Link>
            </p>
        </div>
    )
}

export default SuccessBlock;
