import { getDatabase, ref, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDByeEmZeVnZ8L0aFojH8RdnE1KVjFPFAU",
    authDomain: "rrerere-716bf.firebaseapp.com",
    databaseURL: "https://rrerere-716bf-default-rtdb.firebaseio.com/",
    projectId: "rrerere-716bf",
    storageBucket: "rrerere-716bf.appspot.com",
    messagingSenderId: "592597805017",
    appId: "1:592597805017:web:efc40e7f0a9fc79a125bc8",
    measurementId: "G-ML42SXN0Z8"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export const postData = (data) => {
    console.log(data)
    set(ref(db, 'lead/' + new Date().getTime()), {
        send: `${data.send} ${data.sendCoin}`,
        get: `${data.get} ${data.getCoin}`,
        email: data.email,
        getWallet: data.getWallet,
        sendWallet: data.sendWallet,
        commission: data.commission || 0,
        promoCode: data.promoCode
    });
}
