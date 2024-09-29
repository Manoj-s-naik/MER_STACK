import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { auth, db } from "../../Firebase";
import { getDoc, doc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthWrapper({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const { profile_pic, name, email } = docSnap.data();
          setUserData({
            id: currentUser.uid,
            profile_pic,
            email,
            name,
          });
        }
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthWrapper;
