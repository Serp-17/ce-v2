import { getDatabase, ref, get, set, child } from 'firebase/database';
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
const dbRef = ref(db);

export const postData = async(data) => {
    const id = new Date().getTime();
    set(ref(db, 'lead/' + id), {
        send: `${data.send} ${data.sendCoin}`,
        get: `${data.get} ${data.getCoin}`,
        email: data.email,
        getWallet: data.getWallet,
        sendWallet: data.sendWallet,
        commission: data.commission || 0,
        promoCode: data.promoCode,
        status: "Awaiting payment"
    });
    return id;
}

export const checkId = async (id) => {
    get(child(dbRef, `lead/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}