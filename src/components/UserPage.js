import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function UserPage (){
    const users = [
        { Name: 'Paul George', Email: 'paul.george@gmail.com', Page: 'paul  george' },
        { Name: 'John Wick', Email: 'john.wick@gmail.com', Page: 'john  wick' },
        { Name: 'Luisa Williamson', Email: 'luisa.williamson@gmail.com', Page:'luisa  williamson' },
        { Name: 'Annie Chuppo', Email: 'annie.chuppo@gmail.com', Page: 'annie  chuppo'}
    ]
    const {userID} = useParams()

    let userInfo=users.find((user)=>{
            return user.Page===userID && user
           
                })

             
    console.log(userInfo);
    return(
        <>
        {/* <h1>
        {userID}

         </h1> */}
        <div>
        { users.map(item1 => {
            return <div style={{
                backgroundColor: 'blue', border: '4px solid black', margin: '50px'}}> 
                <h1>Information about {item1.Page}</h1> 
                <p>user email is {item1.Email}</p>
                <Link to={`/users/`}>back to users</Link>
            </div>}
         )}
         </div>
        </>
    )
}