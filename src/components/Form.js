// import { click } from "@testing-library/user-event/dist/click"
// import { useNavigate } from "react-router-dom"
// export default function Form (){
//     const navigate = useNavigate()
//     return (
//         <>
//         <h1>Login</h1>
//         <input type="text" placeholder="Username"/>
//         <input type="text" placeholder="Password"/>
//         <button onClick={() => navigate('/users')}type="submit">Submit</button>
//         </>
//     )
// }
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

export default function Form (){
    const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username !== '' && password !== '') {
      setSubmitted(true);
      navigate('/users');
    }
  };

  if (submitted) {
    return null;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}