import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { useCallback, useEffect, useState } from 'react';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVetp7fza2IdKM6vY6XL8By-VEURdgyw4",
  authDomain: "riesbeck-tut.firebaseapp.com",
  databaseURL: "https://riesbeck-tut-default-rtdb.firebaseio.com",
  projectId: "riesbeck-tut",
  storageBucket: "riesbeck-tut.appspot.com",
  messagingSenderId: "471827832691",
  appId: "1:471827832691:web:f091356087bea54fc06f06",
  measurementId: "G-8FGVXZJKF3"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

