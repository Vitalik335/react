import { useEffect, useState } from 'react';

export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null);

    const auth = authFirebase();
    const provider = new authFirebase.GoogleAuthProvider();

    const logOut = () => auth.signOut()
    .then()
    .catch(err => console.error())

    const logIn = () => auth.signInWithPopup(provider); 

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setAuthentication(user)
            } else {
                setAuthentication(null)
            }
        })
    }, [auth, authentication]);

    return { authentication, logIn, logOut }


}