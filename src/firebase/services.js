// import React from 'react'

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export const addDocument = (collectionName,data) =>  {
    addDoc(collection(db, collectionName), {
        ...data,
        createAt: serverTimestamp(),
    });
}
