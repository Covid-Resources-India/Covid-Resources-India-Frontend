import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAZA6-5FqYWVbPOgdO43dltHbfZMloEj_A',
	authDomain: 'covid-resources-india-a507a.firebaseapp.com',
	projectId: 'covid-resources-india-a507a',
	storageBucket: 'covid-resources-india-a507a.appspot.com',
	messagingSenderId: '591675268309',
	appId: '1:591675268309:web:cb66a0a3a0502d8089565c',
	measurementId: 'G-FKN70SGZMH'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
