import { getDatabase, ref, get, set, child } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDjgwhkkwAqenwLafnVd2q1QH_3HBeeIog",
    authDomain: "cryptoobmen-8f2e1.firebaseapp.com",
    databaseURL: "https://cryptoobmen-8f2e1-default-rtdb.firebaseio.com",
    projectId: "cryptoobmen-8f2e1",
    storageBucket: "cryptoobmen-8f2e1.appspot.com",
    messagingSenderId: "854804977372",
    appId: "1:854804977372:web:728faa807cd1876f3b8619",
    measurementId: "G-BSMS2EPK4V"
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
    return get(child(dbRef, `lead/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val()
        } else {
            return "No data available";
        }
    }).catch((error) => {
        console.error(error);
    });
}

export const getPc = async (id) => {
    return get(child(dbRef, `pc`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val()
        } else {
            return "No data available";
        }
    }).catch((error) => {
        console.error(error);
    });
}

export const postEmail = async(data) => {
    const id = new Date().getTime();
    set(ref(db, 'Emails/'), {
        email: data.email
    });
    return id;
}

export const postContact = async(data) => {
    const id = new Date().getTime();
    set(ref(db, 'Contact/' + id), {
        email: data.email,
        name: data.name,
        message: data.message
    });
}
