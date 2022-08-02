import { useEffect } from 'react'
import { AuthUI, UIConfig } from '../firebase/Authentication';

function Main() {

    useEffect(() => {
        AuthUI.start('#firebaseui-auth-container', UIConfig);
    })

    return (
        <div className=" h-screen flex justify-center items-center">
            <div className='sm:shadow-xl shadow-slate-400'>
                <p className='m-5 text-xl text-center'> Inicia Sesión y comienza a chatear</p>
                <div id="firebaseui-auth-container"></div>
            </div>
        </div>
    )
}

export default Main
