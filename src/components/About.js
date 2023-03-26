import { useNavigate } from "react-router-dom"

export default function About (){
    const navigate = useNavigate()
    return (
        <>
        <h1>About</h1>
        <button onClick={() => navigate('/users')}>Go to Users Page</button>
        <button style ={{
            marginLeft:"50px"
        }}
        onClick={() => navigate('/home')}>Go to Home Page</button>
        </>
    )
}
