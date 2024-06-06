import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { orderBy } from "lodash";


const useFirestore = (collectionName,condition) => {
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            let collectionRef = collection(db, collectionName);
            let q 

            if (condition) {
                if (!condition.compareValue || !condition.compareValue.length) {
                    return;
                }
                q = query(
                    collectionRef,
                    orderBy("createAt"),
                    where(condition.fieldName, condition.operator, condition.compareValue)
                );
            }

            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ id: doc.id, ...doc.data() });
                });
                setDocuments(docs);
            }, (error) => {
                console.log("Error fetching documents: ", error);
            });

            return unsubscribe;
        };

        const unsubscribe = fetchData();
        return () => unsubscribe && unsubscribe();
    }, [collectionName, condition]);

    return documents;
}

export default useFirestore