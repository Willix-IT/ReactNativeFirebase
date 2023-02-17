import {initializeApp} from 'firebase/app';
import {getDatabase, ref} from 'firebase/database';
const firebaseConfig = {
  databaseURL:
    'https://reactnativefirebase-e5cd9-default-rtdb.europe-west1.firebasedatabase.app',
};
const app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase(app));

export default dbRef;
