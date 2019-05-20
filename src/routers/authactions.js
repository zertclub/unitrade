export const signIn=(credentials)=>{
    return(dispatch,getstate,{getFirebase})=>{
        const firebase= getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password,

        ).then(()=>{
             dispatch({type:'LOGIN_SUCCESS'});
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err});
        })
    }
}
export const signOut=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase= getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'});
        });
    }
}

export const signUp=(newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        console.log(newUser);
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                
                firstName: newUser.firstname,
                lastName:newUser.lastname,
                bank:newUser.bank,
                iban:newUser.iban
            }).then(()=>{
                dispatch({type:'SIGNUP_SUCCESS'})
            }).catch(err=>{
                dispatch({type:'SIGNUP_NOT',err})

            })
        }).catch(err=>{
            dispatch({type:'SIGNUP_NOT',err})
        })
    }
}