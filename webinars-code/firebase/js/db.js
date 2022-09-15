// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAPQ90e0skSFeo88fQnWkL1H5mGLArsuKE',
  authDomain: 'tom-and-jerry-446cc.firebaseapp.com',
  projectId: 'tom-and-jerry-446cc',
  storageBucket: 'tom-and-jerry-446cc.appspot.com',
  messagingSenderId: '989456374618',
  appId: '1:989456374618:web:8c35146a6f4f09af1bf163'
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore(app)

export default db
