import React, {useEffect, useState} from "react";
import FIREBASE from "../firebase";
import Login from "../pages/Login";
//import Home from "../pages/Home";

const Authentication = () =>{

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const  clearInputs = () =>{
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        FIREBASE.auth.signInWithEmailAndPassword( email, password ).
        catch(err => {
            switch (err.code){
                case 'auth/invalid-email':
                case 'auth/user-disable':
                case 'auth/user-not-found':
                    setEmailError(err.message);
                    break;
                case 'auth/wrong-password':
                    setPasswordError(err.message);
                    break;
            };
        });
    };

    const handleSignIn = () => {
        clearErrors();
        FIREBASE.auth.createUserWithEmailAndPassword( email, password ).
        catch(err => {
            switch (err.code){
                case 'auth/email-alredy':
                case 'auth/invalid-email':
                    setEmailError(err.message);
                    break;
                case 'auth/weak-password':
                    setPasswordError(err.message);
                    break;
            };
        });
    };

    const handleLogout = () => {
        FIREBASE.auth.signOut();
    };

    const authListener = () => {
        FIREBASE.auth.onAuthStateChanged((user) =>{
            if(user){
                clearInputs();
                setUser(user);
            }else{
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return(
        <div>

            <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignIn={handleSignIn}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
            />

        </div>
    );

};
export default Authentication;