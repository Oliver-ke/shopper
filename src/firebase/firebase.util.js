import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyA9IhycWmnkZ6aBPq9Aoh0v-wCnjaxGrQg',
	authDomain: 'shopper-c5e45.firebaseapp.com',
	databaseURL: 'https://shopper-c5e45.firebaseio.com',
	projectId: 'shopper-c5e45',
	storageBucket: 'shopper-c5e45.appspot.com',
	messagingSenderId: '356046318556',
	appId: '1:356046318556:web:ef06aed0257b63cd32fd19',
	measurementId: 'G-FMJ0G91YHF',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// create users profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { displayName, email, photoURL } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				photoURL,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}
	return userRef;
};

// google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
