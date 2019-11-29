import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyC7MFCZ3vdADc398qdv2qu44lwPFhR2Qxw',
  authDomain: 'vue-firebase-tut-6ec5a.firebaseapp.com',
  databaseURL: 'https://vue-firebase-tut-6ec5a.firebaseio.com',
  projectId: 'vue-firebase-tut-6ec5a',
  storageBucket: 'vue-firebase-tut-6ec5a.appspot.com',
  messagingSenderId: '614122367030',
  appId: '1:614122367030:web:75ad42e30f91bc90015097'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({})

export default firebaseApp.firestore()
