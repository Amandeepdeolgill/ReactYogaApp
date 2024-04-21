import { useState } from "react";
import "./SignUp.css";





export default function SignUp ({ registeredUsers, setRegisteredUsers }) {





    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');




    function handleForm (e) {
        e.preventDefault();




        if (registeredUsers.some(user => user.email === email)) {
            setError('Email already exists.');



            
          } else {
            setRegisteredUsers(prevUsers => [...prevUsers, { email, password }]);
            alert("Registration Successful!");
            setFullName('');
            setEmail('');
            setPassword('');
            setError('');
          }

    }




    return (


        < >


           <form onSubmit={handleForm}>

            {error && <p className="error">{error}</p>}

            <input id="fullName" placeholder="Full Name" required></input>
            <input id="email" type="text" placeholder="Enter Your Email" value={email}   onChange={(e) => setEmail(e.target.value)}  required></input>
            <input id="password" type="password" placeholder="Enter Your Password" value={password}  onChange={(e) => setPassword(e.target.value)} required></input>
            <button type="submit">Sign Up</button>
           </form>

        </>


    )



}