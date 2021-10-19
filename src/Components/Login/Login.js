import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {

    const{handleGoogle}=useFirebase();
    console.log(handleGoogle);
    return (
        <div>
           <form action="">
                <input type="email"  placeholder="Email" /> <br /><br />
                <input type="password" placeholder="password" /><br /><br />
                <button>Login</button>
                <button>sign Up</button>
            </form>
            <button onClick={handleGoogle}>Google sign Up</button>
        </div>
    );
};

export default Login;