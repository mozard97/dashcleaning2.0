import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import firebase from "../firebase";

const userContext = createContext();

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const provider = new firebase.auth.GoogleAuthProvider();

  const signinWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUserData(result.user);
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  const signoutWithGoogle = () => {
    firebase
      .auth()
      .signOut()
      .then((result) => {
        setUserData(null);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUserData(firebaseUser);

        const url = localStorage.getItem("url");

        if (url) {
          localStorage.removeItem("url");
          router.push(url);
        }
      }
      setLoading(false);
    });
  }, []);

  return (
    <userContext.Provider
      value={{
        userData,
        setUserData,
        signinWithGoogle,
        signoutWithGoogle,
      }}
    >
      {!loading && children}
    </userContext.Provider>
  );
};

export { UserDataProvider, userContext };

export const useUser = () => {
  return useContext(userContext);
};
