import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();
  const addTransaction = async ({
   
    type,
    title,
    amount,
  }) => {
    await addDoc(transactionCollectionRef, {
      userID,
     type,
      title,
      amount,
      createdAt: serverTimestamp(),
    });
  };
  return { addTransaction };
};