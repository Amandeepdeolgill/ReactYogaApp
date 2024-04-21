import { useState } from "react";
import "./LogIn.css";





export default function LogIn ({ registeredUsers, setRegisteredUsers }) {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');





  function handleForm (e) {

    e.preventDefault();



    const user = registeredUsers.find(user => user.email === email && user.password === password);




    if (user) {
      alert("You are now Signed In.");
      setEmail('');
      setPassword('');
      setError('');




    } else {
      setError('Invalid email or password.');
    }
}






    return (





        <>
          <form className="form" onSubmit={handleForm}>
            <h1>Welcome Back!</h1>
            {error && <p className="error">{error}</p>}
            <input id="email" type="text" placeholder="Enter Your Email" value={email}   onChange={(e) => setEmail(e.target.value)}  required></input>
            <input id="password" type="password" placeholder="Enter Your Password" value={password}  onChange={(e) => setPassword(e.target.value)} required></input>
            <button type="submit">Log In</button>
           </form>
        </>




    )
}